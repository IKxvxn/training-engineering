import CompanyItem from "./companyItem";

const CompaniesList = props => {
  return (
    <ul className="main__grid-list main__grid-list--no-bullet">
      {props.filteredCompanies.map(company => (
        <CompanyItem {...company} />
      ))}
    </ul>
  );
};

export default CompaniesList;
