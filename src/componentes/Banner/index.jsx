import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import { Typewriter } from 'react-simple-typewriter'

AOS.init();

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        
        <h1 className={styles.titulo}>Olá, Mundo!</h1>
        <p>
          <Typewriter
          words={["Boas vindas ao meu espaço pessoal! Eu sou o Bruno Machado, Desenvolvedor Front-end Jr. Aqui compartilho vários conhecimentos que venho aprendendo ao longo do curso. "]}
          
          typeSpeed={18}/>
        </p>
      </div>

      <div
        className={styles.imagens}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="900"
      >
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />

        <img className={styles.minhaFoto} src={minhaFoto} alt="Minha foto" />
      </div>
    </div>
  );
}
