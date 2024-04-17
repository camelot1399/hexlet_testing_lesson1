import { format } from "date-fns";

export const getFormatDate = (date) => {
  return format(date, "MMMM");
};
