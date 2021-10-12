import CompanyItem from "./CompanyItem";

const CompaniesList = props => {
  return (
    <ul className="main__grid-list main__grid-list--no-bullet">
      {props.companies.map((company, i) => (
        <CompanyItem key={i} {...company} />
      ))}
    </ul>
  );
};

export default CompaniesList;
