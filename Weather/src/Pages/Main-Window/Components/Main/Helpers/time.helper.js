export const convertTime = (time) => {
     let time_parts = time.split("T")[1].split(":").slice(0, 2);
     return time_parts.join(":");
}