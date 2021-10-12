import { Fragment } from "react";
import certified from "../../images/certified.png";

const CompaniesList = props => {
  const { name, description, isCertified, image, hours, rate, key } = props;
  return (
    <li className="main__item" key={key}>
      <div className="main__title-container">
        <h3 className="main__item-title">{name}</h3>
        {isCertified ? (
          <img className="main__certified" src={certified} />
        ) : (
          <Fragment />
        )}
      </div>
      <hr />
      <img className="main__item-img" src={image} alt="Bodyguards" />
      <p className="main__item-description">{description}</p>
      <br />
      <div className="main__purchase-container">
        <p className="main__item-side-text">
          Desde ${rate} {hours} horas
        </p>
        <button className="main__item-btn main__item-btn--dark" type="button">
          Contratar
        </button>
      </div>
    </li>
  );
};

export default CompaniesList;
