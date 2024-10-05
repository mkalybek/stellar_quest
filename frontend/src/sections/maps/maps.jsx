import "./maps.scss";
import MapsImage from "./../../assets/exoplanets/exoplanets-maps.webp";

const Maps = () => {
  return (
    <section id="maps">
      <div className="title maps-title">MAPS OF EXOPLANETS</div>
      <div className="text maps-text">
        спутнику Спитцер удалось зарегистрировать инфракрасное излучение от
        экзопланет. за счет того, что мы не просто видим планету то перед
        звездой, то за звездой, Мы видим процесс, как планета уходит за звезду,
        и в ходе этого процесса получаем измерение. Звезда как бы сканирует
        планету, и мы можем получить распределение температуры по поверхности.
        Такие измерения помогают больше узнать о структуре этих объектов,
        уточнить модели. Наконец, совсем в уникальном случае удалось, как пишут,
        построить карту экзопланеты. Вот это наблюдение иллюстрирует, наверное,
        предел современных технических возможностей.{" "}
      </div>
      <div className="maps-image-box">
        <img src={MapsImage} alt="maps" className="maps-image" />
      </div>
    </section>
  );
};

export default Maps;
