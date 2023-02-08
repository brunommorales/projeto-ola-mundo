import styles from "./NaoEncontrada.module.css";
import error404 from "assets/erro_404.png";
import BotaoPrincipal from "componentes/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

export default function NaoEncontrada() {
  const navegar = useNavigate();

  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>

        <p className={styles.paragrafo}>
          Tem certeza que era isso que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div
          className={styles.botaoContainer}
          onClick={() => navegar(-1)}
          // usei o useNavigate com a const navegar, e botei o -1 para voltar a pag que tava
        >
          <BotaoPrincipal tamanho="lg">
            Voltar
          </BotaoPrincipal>
          {/* passei uma props no componente de botao principal pra alterar o css dele */}
        </div>

        <img
          className={styles.imagemCachorro}
          src={error404}
          alt="Cachorro de Oculos e vestido como humano"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}