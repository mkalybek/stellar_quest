import "./types.scss";
import Simulator from "./../../components/mainClasses/mainClasses.jsx";
import Earth from "./../../assets/exoplanets/exoplanet-earthType.jpg";
import GasG from "./../../assets/exoplanets/exoplanet-gasGiants.webp";
import ColdP from "./../../assets/exoplanets/exoplanet-coldPlanet.jpg";
import Main1 from "./../../assets/exoplanets/mainType1.jpeg";
import Main2 from "./../../assets/exoplanets/mainType2.webp";

const Types = () => {
  return (
    <section id="types">
      <div className="main-description">
        <div className="title main-description-title">TYPES</div>
        <div className="text main-description-text">
          Ещё Джордан Бруно считал, что вокруг других звёзд должны существовать
          планеты. И вот спустя сотни лет экзопланеты начали открывать. В чём же
          такое значительное открытие открытие? Открывая экзопланеты, ученые
          увидели устройство планет, которому физически невозможно образоваться
          в нашей солнечной системе.
          <br />
          <br />
          <br />
          <br />
          <br />
          Что мы измеряем, изучая экзопланеты и на основе чего их
          классифицируем? Как мы можем узнать состав планеты? обычно у нас есть
          всего две величины - Это масса и радиус планеты. Значит мы можем
          определить среднюю плотность. Но дальше ситуация упрощается тем, что
          мы примерно знаем, из чего планеты могут состоять, так как мы примерно
          знаем состав вещества в галактике.
        </div>
      </div>
      <div className="main-types">
        <div className="title main-types-title">
          TWO MAIN TYPES DEPENDING ON MASS
        </div>
        <div className="main-type">
          <img
            src={Main1}
            alt="Earth type exoplanet"
            className="main-type-image"
          />
          <div className="main-type-title">ЗЕМНОГО ТИПА</div>
          <div className="text main-type-description">
            масса меньше 7 масс Земли. Состоят в основном из силикатов (скальная
            компонента) и железа. Средняя плотность 3.5-6 г/куб.см. Радиус
            меньше 2 радиусов Земли.
          </div>
        </div>
        <div className="main-type">
          <img
            src={Main2}
            alt="Giant type exoplanet"
            className="main-type-image"
          />
          <div className="main-type-title">ГИГАНТЫ</div>
          <div className="text main-type-description">
            масса в интервале от 0.19 до 60 масс Юпитера. состоят в основном из
            водорода и гелия. Быстро вращаются. Из-за колоссального давления в
            недрах планеты водород переходит в металлическую фазу. имеют сильное
            магнитное поле, усиливающееся с ростом массы планеты.
          </div>
        </div>
      </div>
      <div className="main-classes">
        <Simulator
          title="ЗЕМНОГО ТИПА"
          image={Earth}
          list={[
            "суперземля",
            "мегаземля",
            "миниземля",
            "планета-океан",
            "железная планета",
            "углеродная планета",
            "планета, покрытая лавой",
          ]}
          altWord="Earth type exoplanet"
        />
        <Simulator
          title="ГАЗОВЫЕ ГИГАНТЫ"
          image={GasG}
          list={[
            "холодный юпитер",
            "горячий юпитер",
            "горячий сатурн",
            "горячий нептун",
            "водный гигант",
          ]}
          altWord={"Gas Giant type exoplanet"}
        ></Simulator>
      </div>
      <div className="main-classes">
        <Simulator
          title="ЛЕДЯНЫЕ ГИГАНТЫ ИЛИ ХОЛОДНЫЕ НЕПТУНЫ"
          image={ColdP}
          list={[]}
          altWord={"Ice giants / cold Neptunes"}
        ></Simulator>
      </div>
    </section>
  );
};

export default Types;
