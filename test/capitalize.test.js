import { capitalize } from "../src/capitalize.js";
import { strict as assert } from "node:assert";

// if (capitalize("как дела") !== "Как дела") {
//   throw new Error("Функция работает с ошибкой");
// }

// if (capitalize("") !== "") {
//   throw new Error("Функция работает с ошибкой");
// }

assert.deepEqual(capitalize(""), "");
assert.equal(capitalize("как дела"), "Как дела");

console.log("Тест пройден успешно!");
