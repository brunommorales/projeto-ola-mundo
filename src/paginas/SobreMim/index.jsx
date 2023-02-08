import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo
     fotoCapa={fotoCapa} 
     titulo="Sobre mim"
     >
      {/* passei as props do Componente PostModelo dentro da Tag de PostModelo e passei oq queria nela */}
      <h3 className="styles.subtitulo">
        Olá, eu sou o Bruno!
      </h3>

      <img 
        src={fotoSobreMim}
        alt="imagem do Bruno"
        className={styles.fotoSobreMim}
       />

       <p className={styles.paragrafo}>Oi, tudo bem? Eu sou o Bruno Machado, sou aluno de ADS e também sigo a trilha de Front-End da Alura. Atualmente estou me aprofundando em HTML5, CSS3, SASS, JAVASCRIPT, REACT e TAILWIND.
       </p>
       <p className={styles.paragrafo}> Sempre fui apaixonado com tecnologia e tive meu primeiro contato quando tentava modificar packs em jogos digitais.</p>
       <p className={styles.paragrafo}>
        Estou usando esse curso como exemplo e também para usar outras tecnologias que tenho conhecimento e que venho me aperfeiçoando.
       </p>
       {/* os p que estão dentro da tag PostModelo estão dinamicos, sendo criados aqui */}
    </PostModelo>
  );
}
