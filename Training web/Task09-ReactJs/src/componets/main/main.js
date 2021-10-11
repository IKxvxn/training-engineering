import mobileLogo from "../../images/banner-mobile.png";
import largeLogo from "../../images/banner.png";

const main = () => {
  return (
    <main className="main">
      <div className="main__img-container">
        <picture>
          <source srcset={largeLogo} media="(min-width: 768px)" />
          <img
            className="main__img main__img--cover"
            src={mobileLogo}
            alt="page-banner"
          />
        </picture>
      </div>
      <div className="main__welcome-container">
        <h2 className="main__title">Los mejores agentes de seguridad</h2>
        <div className="main__search-container">
          <input
            id="companies-search-input"
            className="main__search-input"
            placeholder="Buscar por Ubicación"
            type="search"
          />
          <button
            className="main__search-btn icon-search"
            type="button"
            onclick="filterCompaniesList()"
          />
        </div>
      </div>
      <ul
        id="items-container"
        className="main__grid-list main__grid-list--no-bullet"
      />
    </main>
  );
};

export default main;
