import Funny from "../images/left-icon1.png";
import Active from "../images/left-icon2.png";
import NonStop from "../images/left-icon3.png";
import Stick from "../images/stick.png";
import Continuous from "../images/right-icon1.png";
import Professionalism from "../images/right-icon2.png";
import Developed from "../images/right-icon3.png";

function Feature() {
  return (
    <section className="features up-and-down" id="features">
      <div className="box-container">
        <h3 className="title">Vì sao đứa trẻ yêu thích cô</h3>
        <div className="box">
          <img src={Funny} alt="" />
          <div className="info">
            <h3>funny conversations</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolor!
            </p>
          </div>
        </div>
        <div className="box">
          <img src={Active} alt="" />
          <div className="info">
            <h3>Many activities</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolor!
            </p>
          </div>
        </div>
        <div className="box">
          <img src={NonStop} alt="" />
          <div className="info">
            <h3>fun non-stop</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolor!
            </p>
          </div>
        </div>
      </div>
      <img className="stick" src={Stick} alt="" />
      <div className="box-container">
        <h3 className="title">Vì sao phụ huynh chọn cô gửi gắm</h3>
        <div className="box">
          <img src={Continuous} alt="" />
          <div className="info">
            <h3>Continuous monitoring</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolor!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={Professionalism} alt="" />
          <div className="info">
            <h3>Professionalism teachers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolor!
            </p>
          </div>
        </div>

        <div className="box">
          <img src={Developed} alt="" />
          <div className="info">
            <h3>Developed programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, dolor!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
