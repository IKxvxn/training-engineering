const loadCompanies = () => {
  let element = document.getElementById("item-template").innerHTML;
  let template = Handlebars.compile(element);

  fetch("https://my-json-server.typicode.com/IKxvxn/fake-server/companies", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(r => r.json())
    .then(data => {
      let final = template(data);
      document.getElementById("items-container").innerHTML += final;
    })
    .catch(e => console.error(e));
};

const filterCompaniesList = () => {
  value = document.getElementById("companies-search-input").value.toLowerCase();
  items = document.getElementsByClassName("main__item");

  for (let item of items) {
    if (
      item.childNodes[1].childNodes[1].innerHTML.toLowerCase().includes(value)
    ) {
      item.classList.remove("main__item--hidden");
    } else {
      item.classList.add("main__item--hidden");
    }
  }
};
