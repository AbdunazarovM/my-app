import "./Country.css";

const Country = (props) => {
  return (
    <div class="flag">
      <div class="info-country">
        <h3 class="name-country">{props.countryName}</h3>
        <p>
          <b>Population:</b> {props.population}
        </p>
        <p>
          <b>Region:</b> {props.region}
        </p>
        <p>
          <b>Capital:</b> {props.capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
