import "./exomoons.scss";
import Exo1 from "./../../assets/exoplanets/exomoons1.webp";
import Exo2 from "./../../assets/exoplanets/exomoons2.jpg";

const Exomoons = () => {
  return (
    <section id="exomoons" className="section">
      <div className="first-description">
        <div className="title exomoons-title">EXOMOONS</div>
        <div className="text exomoons-text">
          Конечно ученые хотели бы открывать и спутники экзопланет. Спутники
          меньше планет и поэтому технически обнаружить спутник достаточно
          сложно <br />
          <br />
          Как их можно открыть? В принципе, способы открытия спутников похожи на
          способы открытия планет. Практически все способы, которые
          задействованы для планет, можно распространить и на спутники
          <br />
          <br />
          <br />
          Одним из самых интересных вопросов в этой сфере на данный момент
          является потенциальная обитаемость спутников. Есть ли жизнь на этих
          планетах? Ключевую роль в этом вопросе играет Зона Златовласки
        </div>
      </div>

      <div className="goldilocks">
        <div className="goldilocks-description">
          <div className="title">GOLDILOCKS ZONE OR HABITABLE ZONE</div>
          <div className="text goldilocks-description-text">
            зона Златовласки это такой особый регион вокруг звезды, где средняя
            температура экзопланеты позволяет существовать жидкой воде. Это
            зависит от расстояния до звезды, количества вырабатываемой энергии и
            атмосферы экзопланеты.{" "}
          </div>
        </div>
        <div className="goldilocks-image">
          <div className="image-container">
            <img
              src={Exo1}
              alt="goldilocks"
              className="goldilocks-image-actual"
            />
            <img
              src={Exo2}
              alt="goldilocks"
              className="goldilocks-image-actual"
            />
          </div>
          <div className="text goldilocks-image-text">
            Например Венера и Марс находятся в потенциально обитаемой зоне
            Солнечной системы. Если улучшить атмосферы этих планет, на них
            вполне можно будет жить.
          </div>
        </div>
      </div>
      <div className="examples">
        <div className="example">
          <img src={Exo1} alt="" className="goldilocks-image-actual" />
          <div className="text">
            TOI-700 d — первая обнаруженная экзопланета земной группы,
            находящаяся в обитаемой зоне своей звезды. Открыта транзитным
            методом телескопом TESS.
          </div>
        </div>
        <div className="example">
          <img src={Exo2} alt="" className="goldilocks-image-actual" />
          <div className="text">
            22 февраля 2017 года NASA заявило, что обнаружило сразу семь
            экзопланет около ультрахолодного звезды-карлика TRAPPIST-1, три из
            которых имеют размеры, сравнимые с Землёй, и находятся в «обитаемой
            зоне» с возможностью наличия жидкой воды.
          </div>
        </div>
      </div>
      <div className="text ending">
        После уточнения космическим телескопом Gaia данных о расстоянии до 130
        млн звёзд и их светимости, из 30 землеподобных и потенциально обитаемых
        экзопланет, найденных телескопом Kepler, статус земплеподобных миров,
        находящихся в зоне обитаемости, в 2018 году сохранили 12 планет (по
        оптимистичным оценкам) или 2 планеты (по самым пессимистичным оценкам)
      </div>
      <div className="text ending end">
        Это совершенно ключевой шаг, поскольку в ближайшие годы, наверное,
        единственный способ продвинуться в понимании того, есть ли жизнь на
        других планетах.
      </div>
    </section>
  );
};

export default Exomoons;
