import { getFormatDate } from "../src/helpers.js";

test("getFormatDate", () => {
  expect(getFormatDate(new Date(2024, 2, 10))).toEqual("March");
});
