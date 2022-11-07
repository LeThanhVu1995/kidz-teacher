import Teacher1 from "../images/teacher-1.png";
import Teacher2 from "../images/teacher-2.png";
import Teacher3 from "../images/teacher-3.png";
import Teacher4 from "../images/teacher-4.png";

export default function () {
  return (
    <section className="teacher background" id="teacher">
      <h1 className="heading">our amazing teachers</h1>

      <div className="box-container">
        <div className="box">
          <img src={Teacher1} alt="" />
          <h3>john deo</h3>
          <span>teacher</span>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            molestiae ab soluta iste delectus facilis beatae earum reiciendis
            repellat, consequuntur sequi dolorem error, labore dolores ullam
            distinctio illo. Voluptas, molestias?
          </p>
        </div>

        <div className="box">
          <img src={Teacher2} alt="" />
          <h3>john deo</h3>
          <span>teacher</span>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            molestiae ab soluta iste delectus facilis beatae earum reiciendis
            repellat, consequuntur sequi dolorem error, labore dolores ullam
            distinctio illo. Voluptas, molestias?
          </p>
        </div>

        <div className="box">
          <img src={Teacher3} alt="" />
          <h3>john deo</h3>
          <span>teacher</span>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            molestiae ab soluta iste delectus facilis beatae earum reiciendis
            repellat, consequuntur sequi dolorem error, labore dolores ullam
            distinctio illo. Voluptas, molestias?
          </p>
        </div>

        <div className="box">
          <img src={Teacher4} alt="" />
          <h3>john deo</h3>
          <span>teacher</span>
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            molestiae ab soluta iste delectus facilis beatae earum reiciendis
            repellat, consequuntur sequi dolorem error, labore dolores ullam
            distinctio illo. Voluptas, molestias?
          </p>
        </div>
      </div>
    </section>
  );
}
