import { useState, useEffect } from "react";
import Banner from "../banner/banner";
import CompaniesList from "../companiesList/companiesList";
import SearchBar from "../searchBar/searchBar";

const Main = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const getCompanies = () => {
    fetch("https://my-json-server.typicode.com/IKxvxn/fake-server/companies", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(r => r.json())
      .then(data => {
        setCompanies(data);
        setFilteredCompanies(data);
      })
      .catch(e => console.error(e));
  };

  useEffect(() => {
    getCompanies();
  });

  return (
    <main className="main">
      <Banner />
      <SearchBar />
      <CompaniesList filteredCompanies={filteredCompanies} />
    </main>
  );
};

export default Main;
