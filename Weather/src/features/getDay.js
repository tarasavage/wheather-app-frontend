export const getDayFromDate = (d) => {
  let date = new Date(d.slice(0, 10));

  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("ua-UA", options).format(date).slice(0, 3);
};
