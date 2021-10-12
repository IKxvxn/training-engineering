import { defaultData } from "./data.js";

export const loadCompanies = () => {
  let element = document.getElementById("item-template").innerHTML;
  let template = Handlebars.compile(element);
  let final = template(defaultData);

  document.getElementById("items-container").innerHTML += final;
};
