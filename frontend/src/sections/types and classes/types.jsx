import "./types.scss";

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
          <img src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg" alt="Earth type exoplanet" className="main-type-image" />
          <div className="main-type-title">ЗЕМНОГО ТИПА</div>
          <div className="text main-type-description">
            масса меньше 7 масс Земли. Состоят в основном из силикатов (скальная
            компонента) и железа. Средняя плотность 3.5-6 г/куб.см. Радиус
            меньше 2 радиусов Земли.
          </div>
        </div>
        <div className="main-type">
          <img src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg" alt="Giant type exoplanet" className="main-type-image" />
          <div className="main-type-title">ГИГАНТЫ</div>
          <div className="text main-type-description">
            масса в интервале от 0.19 до 60 масс Юпитера. состоят в основном из
            водорода и гелия. Быстро вращаются. Из-за колоссального давления в
            недрах планеты водород переходит в металлическую фазу. имеют сильное
            магнитное поле, усиливающееся с ростом массы планеты.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Types;
