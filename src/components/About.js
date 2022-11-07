import About from "../images/about-img.png";

export default function () {
  return (
    <section className="about background" id="about">
      <div className="image">
        <img src={About} alt="" />
      </div>

      <div className="content">
        <h3>a word about us</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nisi
          quod consequuntur dolor molestiae magnam magni veritatis? Tenetur
          optio excepturi harum eius quaerat labore cumque dolorem dignissimos
          alias. Perspiciatis, expedita.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit minima
          odio est unde nesciunt necessitatibus, fugiat laboriosam quidem magni?
          Maxime?
        </p>
        <a href="#" className="btn">
          learn more
        </a>
      </div>
    </section>
  );
}
