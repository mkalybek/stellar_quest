import "./methods.scss";
import "./method-descrs.scss";
import image1 from "./../../assets/exoplanets/methods-image1.webp";
import image2 from "./../../assets/exoplanets/exosky.webp";
import Dopler from "./../../assets/ways_to_find_a_planet/radial_velocity.mp4";
import Transit from "./../../assets/ways_to_find_a_planet/transit_method_double_planet.mp4";
import Grav from "./../../assets/ways_to_find_a_planet/gravitational_microlensing.mp4";
import DirI from "./../../assets/ways_to_find_a_planet/direct-imaging.mp4";
import Movem from "./../../assets/ways_to_find_a_planet/astometry.mp4";


const Methods = () => {
  return (
    <section id="methods">
      <div className="title methods-title">
        METHODS OF <br /> SEARCH
      </div>
      <div className="methods-content">
        <div className="methods-images">
          <img src={image1} alt="Kepler-186f" className="methods-image" />
          <img src={image2} alt="Space" className="methods-image" />
        </div>
        <div className="text methods-text">
          Люди давно начали думать, как можно открыть планеты у других звезд.
          Это трудно сделать по причине того, что сама планета маленькая, светит
          очень плохо и светит только отраженным светом. Заметить ее трудно. Еще
          труднее ее заметить, потому что она находится рядом с очень яркой
          звездой. Очень часто бывает так, что мы могли бы увидеть саму
          экзопланету, если бы она точно с таким же блеском была бы в пустом
          месте. Но яркий свет очень близко находящейся звезды мешает нам это
          сделать.
          <br />
          <br />
          <br />
          <br />
          Удивительно, что в те самые 80-е и 90-е годы одновременно несколько
          методов позволили открывать экзопланеты.
        </div>
      </div>
      <div className="title methods-list">
        <ul>
          <li>
            <a href="/#dopler">DOPLER'S EFFECT</a>
          </li>
          <li>
            <a href="/#transit">TRANSIT</a>
          </li>
          <li>
            <a href="/#microlensing">GRAVITATIONAL MICROLENSING</a>
          </li>
          <li>
            <a href="/#direct-imaging">DIRECT IMAGING</a>
          </li>
          <li>
            <a href="/#minuscule">MINUSCULE MOVEMENTS</a>
          </li>
        </ul>
      </div>
      <div id="dopler" className="method-description">
        <div className="left-side">
          <video className="method-description-image" autoplay="on" loop muted preload="auto">
            <source
              src={Dopler}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title right-side-title">DOPLER'S EFFECT</div>
          <div className="text">
            {" "}
            Мы часто не задумываемся над тем, что Земля притягивает нас, но мы
            притягиваем Землю с точно такой же силой. Так вот точно так же
            планета, вращаясь вокруг звезды, немножко заставляет звезду
            двигаться. И это можно заметить. Что хотелось наблюдать? Мы получаем
            спектр звезды с очень высокой точностью. Если звезда движется к нам,
            то все линии смещаются в синюю область спектра, если от нас, то в
            красную. Если бы мы смотрели на Солнечную систему издали, мы бы
            видели, что с периодом обращения Юпитера Солнце то приближается к
            далекому наблюдателю, то удаляется. И по строгой периодичности
            процесса мы смогли бы догадаться, что это действительно какой-то
            невидимый спутник, а не, например, пульсации Солнца. Нужно было
            научиться очень точно измерять эти скорости и, кроме того, делать
            это долгое время. в 95-м именно таким способом была открыта первая
            экзопланета.{" "}
          </div>
        </div>
      </div>
      <div id="transit" className="method-description">
        <div className="left-side">
          <video className="method-description-image" autoplay="on" loop muted preload="auto">
            <source
              src={Transit}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">TRANSIT</div>
          <div className="text">
            Представим, что в какой-то момент планета проходит точно между нами
            и звездой. Примерно так же, как, наблюдая Солнце, мы раз в довольно
            большое время видим, как Венера или Меркурий проходят по диску
            Солнца. Что при этом будет происходить? Мы не видим планету, мы не
            видим никакого темного пятна на звезде, но мы видим, что блеск
            звезды немножко уменьшился. Диск звезды яркий, а планета темная.
            Представим себе, что мы наблюдаем звезду и точно измеряем ее блеск.
            Мы не видим диск звезды, не видим никаких деталей, но измеряя блеск
            с высокой точностью, мы видим, что вдруг блеск немножечко падает.
            Действительно немножечко, это может быть одна десятитысячная или
            несколько десятитысячных. Если это происходит периодически, то
            единственная разумная причина — это прохождение планеты по диску
            звезды. Такие планеты называют транзитными. Сложность состоит только
            в том, что опять-таки нужно долго и очень точно измерять блеск, и на
            Земле нам начинает мешать атмосфера. Поэтому такие наблюдения обычно
            проводят из космоса. Именно таким способом спутник Кеплер уже открыл
            почти тысячу экзопланет достаточно надежно{" "}
          </div>
        </div>
      </div>
      <div id="microlensing" className="method-description">
        <div className="left-side">
        <video className="method-description-image" autoplay="on" loop muted preload="auto">
            <source
              src={Grav}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">GRAVITATIONAL MICROLENSING</div>
          <div className="text">
            Тяжелые тела искажают пространство вокруг себя, особенно наглядно
            изображают черные дыры, их рисуют в виде ямы на плоскости, на
            которой нарисована прямоугольная сетка. Свет, двигаясь по такому
            пространству, почувствует эту яму и будет отклоняться. Таким
            образом, любое тяжелое тело эффективно работает как собирающая
            линза. гравитационные линзы, способные существенно исказить
            изображение фонового объекта, представляют собой достаточно большие
            сосредоточения массы: галактики и скопления галактик. Обычно можно
            лишь заметить кратковременное увеличение яркости объекта-линзы в тот
            момент, когда линза пройдёт между Землей и фоновым объектом. События
            такого типа называются микролинзированием. Если источник света,
            массивный линзирующий объект и наблюдатель расположены на одной
            прямой, источник света будет виден как кольцо вокруг массивного
            объекта.
          </div>
        </div>
      </div>
      <div id="direct-imaging" className="method-description">
        <div className="left-side">
        <video className="method-description-image" autoplay="on" loop muted preload="auto">
            <source
              src={DirI}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">DIRECT IMAGING</div>
          <div className="text">
            прямая визуализация, также называемая высококонтрастной
            визуализацией (HCI), является единственным методом, способным
            улавливать фотоны, излучаемые непосредственно планетными телами.
            Этот инновационный метод особенно полезен для изучения зарождающихся
            планетных систем, где планеты ярко светятся и выделяют значительное
            количество тепла на начальных этапах своего развития.
          </div>
        </div>
      </div>
      <div id="minuscule" className="method-description">
        <div className="left-side">
        <video className="method-description-image" autoplay="on" loop muted preload="auto">
            <source
              src={Movem}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="right-side">
          <div className="title">MINUSCULE MOVEMENTS</div>
          <div className="text">
            Этот метод связан с наблюдением каких-нибудь периодических
            процессов. если есть какой-то периодический процесс в звездной
            системе, например, есть двойная звезда, две звезды крутятся друг
            вокруг друга, и происходит затмение, блеск периодически меняется.
            Это должен быть очень строго периодический процесс. Мы наблюдаем и
            видим, что иногда происходят сбои. Чем это объяснить? Каким-то
            лишним телом в системе. Вы можете промоделировать эту систему и
            определить массу этого лишнего мешающегося тела. Если она
            оказывается планетной, значит, вы открыли планету. И таким способом
            открывают довольно необычные планеты. Например, есть такая планета
            Пульсар. Вокруг него вращается белый карлик, а вокруг всей этой
            системы вращается планета. То есть по наблюдениям Пульсара удалось
            понять, что кроме невидимого белого карлика есть еще один лишний
            компонент планеты, которая крутится вокруг всей этой красивой пары.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
