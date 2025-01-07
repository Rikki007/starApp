import { zodiacItemCreate } from "./zodiacItemCreate.js";
import main from "../main/main.js";

export const zodiacDescriptionCreate = () => {
  main.innerHTML += `
    <section class="description-section">${zodiacItemCreate()}</section>
  `
}