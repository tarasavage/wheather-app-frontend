export const convertTime = (time) => {
  let time_parts = time.split("T")[1].split(":").slice(0, 2);
  return time_parts.join(":");
};

export const getCurrentDay = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  let day = currentDate.getDate().toString().padStart(2, "0");
  let formattedDate = year + "-" + month + "-" + day;
  return formattedDate
};