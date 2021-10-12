import { useState, useEffect } from "react";
import Banner from "../banner/Banner";
import CompaniesList from "../companiesList/CompaniesList";
import SearchBar from "../searchBar/SearchBar";
import { getCompanies, filterCompanies } from "../../utilities.js";

const Main = () => {
  const [companies, setCompanies] = useState([]);
  const [filterWord, setFilterWord] = useState("");

  useEffect(() => {
    getCompanies(setCompanies);
  }, []);

  return (
    <main className="main">
      <Banner />
      <SearchBar filterWord={filterWord} setFilterWord={setFilterWord} />
      <CompaniesList companies={filterCompanies(companies, filterWord, 3)} />
    </main>
  );
};

export default Main;
