import "./Navbar.css";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="section-form">
      <h2 className="visually-hidden">look for the country you need</h2>
      <form className="form">
        <label className="visually-hidden" for="search">
          Write the state you are looking for
        </label>
        <input
          id="search"
          className="form-search"
          type="search"
          name="searched country"
          placeholder="Search for a country…"
          required
        />

        <NavLink to="/Main">Country section A</NavLink>
        <NavLink to="/MainB">Country section B</NavLink>

        <select className="category " name="category-filter" id="category">
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </form>
    </div>
  );
};

export default Navbar;
