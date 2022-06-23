import "./about.css";

const About = () => {
  return (
    <div>
      <section className="contacto" id="id_contacto">
        <div className="container">
          <div className="titulo-queremos-escucharte">
            <h2 data-text="¡Queremos escucharte!">¡Quienes Somos!</h2>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              
            </div>

            <div className="col-12 col-sm-6">
              <div className="mapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102220299916!2d-65.20939048511862!3d-26.836700883160386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1640649440667!5m2!1ses-419!2sar"
                  width="100%"
                  height="400px"
                  loading="lazy"
                ></iframe>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
