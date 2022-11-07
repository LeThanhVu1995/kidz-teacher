import homeImg from "./../images/home-img.png";

function Hero() {
  return (
    <section className="home background" id="home">
      <div className="content">
        <h1>welcome to kidzies</h1>
        <h3>making education more fun.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          accusamus eum, dolore officiis facilis fugiat sint. Animi unde
          blanditiis, ab quibusdam illum minus exercitationem dolore expedita
          asperiores odit, consectetur iusto.
        </p>
        <a href="#" className="btn">
          learn more
        </a>
      </div>

      <div className="image">
        <img src={homeImg} alt="" />
      </div>
    </section>
  );
}

export default Hero;
