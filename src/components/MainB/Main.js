import Country from "./Country/Country";
import "./Main.css"

const MainB = () => {
  return (
    <section class="countries">
      <Country countryName="Afghanistan" population="27,657,145" region="Asia" capital="Kabul" />
      <Country countryName="Aland Islands" population="28,885" region="Europe" capital="Mariehamn" />
      <Country countryName="Albania" population="26,886,0026" region="Europe" capital="Tirana" />
      <Country countryName="Algeria" population="40,400,000" region="Africa" capital="Algiers" />
    </section>
  );
};

export default MainB;
