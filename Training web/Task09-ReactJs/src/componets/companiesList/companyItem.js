import { Fragment } from "react";
import certified from "../../images/certified.png";

const CompaniesList = props => {
  const { name, description, isCertified, image, hours, rate } = props;
  return (
    <li class="main__item">
      <div class="main__title-container">
        <h3 class="main__item-title">{name}</h3>
        {props.isCertified ? <img src={certified} /> : <Fragment />}
      </div>
      <hr />
      <img class="main__item-img" src={image} alt="Bodyguards" />
      <p class="main__item-description">{description}</p>
      <br />
      <div class="main__purchase-container">
        <p class="main__item-side-text">
          Desde ${rate} {hours} horas
        </p>
        <button class="main__item-btn main__item-btn--dark" type="button">
          Contratar
        </button>
      </div>
    </li>
  );
};

export default CompaniesList;
