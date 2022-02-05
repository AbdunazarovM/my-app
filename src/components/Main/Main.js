import Country from "./Country/Country";
import "./Main.css"

const Main = () => {
  return (
    <section class="countries">
      <Country countryName="Germany" population="81,770,9000" region="Europe" capital="Berlin" />
      <Country countryName="United States of America" population="323,947,000" region="Americas" capital="Washington, D.C." />
      <Country countryName="Brazil" population="206,135,893" region="Americas" capital="Brasília" />
      <Country countryName="Iceland" population="334.400" region="Europe" capital="Reykjavík" />
      <Country countryName="Afghanistan" population="27,657,145" region="Asia" capital="Kabul" />
      <Country countryName="Aland Islands" population="28,885" region="Europe" capital="Mariehamn" />
      <Country countryName="Albania" population="26,886,0026" region="Europe" capital="Tirana" />
      <Country countryName="Algeria" population="40,400,000" region="Africa" capital="Algiers" />
    </section>
  );
};

export default Main;
