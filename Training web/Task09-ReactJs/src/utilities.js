export const getCompanies = setData => {
  fetch("https://my-json-server.typicode.com/IKxvxn/fake-server/companies", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(r => r.json())
    .then(data => {
      setData(data);
    })
    .catch(e => console.error(e));
};

export const filterCompanies = (companies, filterWord, minTrigger) => {
  if (filterWord.length < minTrigger) {
    return companies;
  }
  return companies.filter(company => {
    const { name, description } = company;
    console.log(name, description, filterWord);
    const lowerCaseFilterWord = filterWord.toLowerCase();

    if (
      name.toLowerCase().includes(lowerCaseFilterWord) ||
      description.toLowerCase().includes(lowerCaseFilterWord)
    ) {
      return company;
    }
  });
};
