import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card-bg">
          <iframe
            className="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102220299916!2d-65.20939048511862!3d-26.836700883160386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1640649440667!5m2!1ses-419!2sar"
            width="500px"
            height="450px"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">Sobre Nosotros</h1>
        <p className="a-desc">
          Como sanatorio polivalente tiene a la honestidad y calidad medica como
          objetivo principales. Su Comision Directiva tiene a cargo el control y
          destino de esta institucion. Dentro de un marco altamente competitivo,
          Clinica Rolling Code ha permanecido en la vanguardia de la atencion
          del enfermo y el cuidado de la salud, preservando los principios
          eticos y aceptando y participando del desafio permanente de la
          evolucion en medicina. Estos preceptos, fundamentan el prestigio de su
          nombre.Y en este cambio lo que esta en juego es la futura calidad de
          vida.
        </p>
      </div>
    </div>
  );
};

export default About;
