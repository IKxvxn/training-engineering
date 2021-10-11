import mobileLogo from "../../images/banner-mobile.png";
import largeLogo from "../../images/banner.png";

const Banner = () => {
  return (
    <div className="main__img-container">
      <picture>
        <source srcSet={largeLogo} media="(min-width: 768px)" />
        <img
          className="main__img main__img--cover"
          src={mobileLogo}
          alt="page-banner"
        />
      </picture>
    </div>
  );
};

export default Banner;
