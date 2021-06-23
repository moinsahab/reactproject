const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url, { useUnifiedTopology: true });
let db;

app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, "build")));

app.get("/centiment", async (req, res) => {
  let { stepSize, step, ticker } = req.query;
  const noOfTickersToShow = 10;
  const collection = await db.collection("stockapeData");
  const {
    0: { incremental: max },
  } = await collection.find({}).sort({ incremental: -1 }).limit(1).toArray();
  const lte = max - stepSize * (step - 1),
    gte = lte - stepSize + 1;
  const results = await collection
    .find({
      $and: [{ incremental: { $lte: lte } }, { incremental: { $gte: gte } }],
    })
    .sort({ incremental: -1 })
    .toArray();

  if (!ticker) {
    const firstDoc = results[0];
    let respose = {},
      bestTickers = [],
      sortable = [];
    results.forEach((doc) => {
      delete doc["_id"];
      delete doc["incremental"];
    });
    for (let tic in firstDoc) sortable.push([tic, firstDoc[tic]]);
    sortable.sort((a, b) => b[1] - a[1]);
    for (let x = 0; x < noOfTickersToShow; x++)
      bestTickers.push(sortable[x][0]);
    bestTickers.forEach((tic) => (respose[tic] = []));
    results.forEach((doc) =>
      bestTickers.forEach((tic) => respose[tic].push(doc[tic] ? doc[tic] : 0))
    );
    res.send(respose);
  } else {
    let respose = { [ticker]: [] };
    results.forEach((doc) =>
      respose[ticker].push(doc[ticker] ? doc[ticker] : 0)
    );
    res.send(respose);
  }
});

app.get("/donut", async (req, res) => {
  let sortable = [],
    response = [];
  const noOfTickersToShow = 5;
  const collection = await db.collection("tickerCounter");
  const {
    0: { tickers },
  } = await collection.find({}).limit(1).toArray();
  for (let tic in tickers) sortable.push([tic, tickers[tic]]);
  sortable.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < noOfTickersToShow; i++) {
    const [tic, value] = sortable[i];
    response.push({ [tic]: value });
  }
  res.send(response);
});

app.get("/table", async (req, res) => {
  const noOfTickersToShow = 10;
  let { ticker, unit } = req.query;
  let stepSize;
  switch (unit) {
    case "hourly":
      stepSize = 1;
      break;
    case "daily":
      stepSize = 24;
      break;
    case "weekly":
      stepSize = 168;
      break;
    case "monthly":
      stepSize = 672;
      break;
    default:
      stepSize = 7;
  }
  const collection = await db.collection("stockapeData");
  const {
    0: { incremental: max },
  } = await collection.find({}).sort({ incremental: -1 }).limit(1).toArray();
  const gte = max - stepSize + 1;
  const results = await collection
    .find({
      $and: [{ incremental: { $lte: max } }, { incremental: { $gte: gte } }],
    })
    .sort({ incremental: -1 })
    .toArray();

  if (!ticker) {
    const firstDoc = results[0];
    let respose = {},
      bestTickers = [],
      sortable = [];
    results.forEach((doc) => {
      delete doc["_id"];
      delete doc["incremental"];
    });
    for (let tic in firstDoc) sortable.push([tic, firstDoc[tic]]);
    sortable.sort((a, b) => b[1] - a[1]);
    for (let x = 0; x < noOfTickersToShow; x++)
      bestTickers.push(sortable[x][0]);
    bestTickers.forEach((tic) => (respose[tic] = []));
    results.forEach((doc) =>
      bestTickers.forEach((tic) => respose[tic].push(doc[tic] ? doc[tic] : 0))
    );
    res.send(respose);
  } else {
    let respose = { [ticker]: [] };
    results.forEach((doc) =>
      respose[ticker].push(doc[ticker] ? doc[ticker] : 0)
    );
    res.send(respose);
  }
});

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/bar", async (req, res) => {
  let { unit, ticker } = req.query;
  let sum = 0,
    tickerOccur = 0;
  let noOfDocuments;
  switch (unit) {
    case "hourly":
      noOfDocuments = 1;
      break;
    case "daily":
      noOfDocuments = 24;
      break;
    case "weekly":
      noOfDocuments = 168;
      break;
    case "monthly":
      noOfDocuments = 672;
      break;
    default:
      noOfDocuments = 7;
  }

  const scorePromise = new Promise(async (resolve, reject) => {
    try {
      let collection = await db.collection("stockapeData");
      const {
        0: { incremental: max },
      } = await collection
        .find({})
        .sort({ incremental: -1 })
        .limit(1)
        .toArray();
      const docsForScore = await collection
        .find({
          $and: [
            { incremental: { $lte: max } },
            { incremental: { $gte: max - noOfDocuments + 1 } },
          ],
        })
        .sort({ incremental: -1 })
        .toArray();
      docsForScore.forEach((doc) => {
        if (Object.keys(doc).includes(ticker)) sum += doc[ticker];
      });
      resolve();
    } catch (ex) {
      reject();
    }
  });

  const countPromise = new Promise(async (resolve, reject) => {
    try {
      let collection = db.collection("tickerCounter");
      const docsForCount = await collection
        .find()
        .limit(noOfDocuments)
        .toArray();
      docsForCount.forEach(({ tickers: tic }) => {
        if (Object.keys(tic).includes(ticker)) tickerOccur += tic[ticker];
        resolve();
      });
    } catch (ex) {
      reject();
    }
  });

  Promise.allSettled([scorePromise, countPromise])
    .then(() => {
      res.send({
        occurence: tickerOccur,
        average: sum == 0 ? 0 : sum / tickerOccur,
      });
    })
    .catch((ex) => {
      res.send({
        message: "Something went wrong",
      });
    });
});

app.get("/votes", async (req, res) => {
  const { ticker, unit } = req.query;
  let noOfDocuments,
    response = {};
  switch (unit) {
    case "hourly":
      noOfDocuments = 1;
      break;
    case "daily":
      noOfDocuments = 24;
      break;
    case "weekly":
      noOfDocuments = 168;
      break;
    case "monthly":
      noOfDocuments = 672;
      break;
    default:
      noOfDocuments = 7;
  }

  const collection = await db.collection("votes");
  const result = await collection.find().limit(noOfDocuments).toArray();
  result.forEach((doc) => delete doc["_id"]);
  if (!ticker) {
    const noOfTickerToUse = 10;
    let tickerToUse = [],
      i = 0;
    for (let x in result[0]) {
      if (i++ === noOfTickerToUse) break;
      tickerToUse.push(x);
      response[x] = {
        occurence: 0,
        upVotes: 0,
        downvotes: 0,
      };
    }
    result.forEach((doc) => {
      for (let tic in doc) {
        if (tickerToUse.includes(tic)) {
          response[tic].occurence++;
          response[tic].upVotes += doc[tic][0];
          response[tic].downvotes += doc[tic][1];
        }
      }
    });
    res.send(response);
  } else {
    response[ticker] = {
      occurence: 0,
      upVotes: 0,
      downvotes: 0,
    };
    result.forEach((doc) => {
      if (Object.keys(doc).includes(ticker)) {
        response[ticker].occurence++;
        response[ticker].upVotes += doc[ticker][0];
        response[ticker].downvotes += doc[ticker][1];
      }
    });
    res.send(response);
  }
});

app.post("/add_ticker", async (req, res) => {
  const { Symbol, Name_1, Exchange, Country, Sector, Industry } = req.body;
  const collection = await db.collection("tickers");
  try {
    await collection.insertOne({
      _id: Symbol,
      Name_1,
      Exchange,
      Country,
      Sector,
      Industry,
    });
    res.send({ inserted: 1 });
  } catch (ex) {
    res.send({ inserted: 0 });
  }
});

app.post("/delete_ticker", async (req, res) => {
  const { Symbol } = req.body;
  const collection = await db.collection("tickers");
  try {
    await collection.deleteOne({ _id: Symbol });
    res.send({ deleted: 1 });
  } catch (ex) {
    res.send({ deleted: 0 });
  }
});

app.listen(8080, async () => {
  console.log("Server Started");
  await client.connect();
  db = client.db("Stock2021ape");
  console.log("Connected to the Database");
});
