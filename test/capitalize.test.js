import { capitalize } from "../src/capitalize.js";

if (capitalize("как дела") !== "Как дела") {
  throw new Error("Функция работает с ошибкой");
}

if (capitalize("") !== "") {
  throw new Error("Функция работает с ошибкой");
}

console.log("Тест пройден успешно!");
