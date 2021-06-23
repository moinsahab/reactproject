export const reducer = (state, action) => {
  switch (action.type) {
    case "DAILY":
      return { unit: "daily" };
    case "HOURLY":
      return { unit: "hourly" };
    case "WEEKLY":
      return { unit: "weekly" };
    default:
      return state;
  }
};
