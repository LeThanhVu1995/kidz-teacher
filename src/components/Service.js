import S1 from "../images/s1.jpg";
import S2 from "../images/s2.jpg";
import S3 from "../images/s3.jpg";
import S4 from "../images/s4.jpg";
import S5 from "../images/s5.jpg";
import S6 from "../images/s6.jpg";

export default function () {
  return (
    <section className="services up-and-down" id="services">
      <h1 className="heading"> what we teach your childrens </h1>

      <div className="box-container">
        <div className="box">
          <img src={S1} alt="" />
          <div className="info">
            <h3>words and letters teaching</h3>
          </div>
        </div>

        <div className="box">
          <img src={S2} alt="" />
          <div className="info">
            <h3>clay and crafting</h3>
          </div>
        </div>

        <div className="box">
          <img src={S3} alt="" />
          <div className="info">
            <h3>drawing classes</h3>
          </div>
        </div>

        <div className="box">
          <img src={S4} alt="" />
          <div className="info">
            <h3>english classes</h3>
          </div>
        </div>

        <div className="box">
          <img src={S5} alt="" />
          <div className="info">
            <h3>playground for childrens</h3>
          </div>
        </div>

        <div className="box">
          <img src={S6} alt="" />
          <div className="info">
            <h3>sports events</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
