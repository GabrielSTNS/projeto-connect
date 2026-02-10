import s from "../Style.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";
import imgMentoria from "../../assets/images/imgMentoria.png";
import imgExp from "../../assets/images/imgExp.png";
import imgAcomp from "../../assets/images/imgAcomp.png";

const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <InfoCard
            img={imgMentoria}
            alt="Imagem com as mãos de três pessoas em uma mesa."
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo1="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            btn="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={imgExp}
            alt="Imagem com cinco pessoas compartilhando experiências."
            subtitulo="Compartilhe Experiência"
            paragrafo1="Oriente jovens e profissionais iniciantes em sua área."
            btn="Quero Participar"
          />
        </article>
        <article>
          <InfoCard
            img={imgAcomp}
            alt="Imagem com duas mulheres fazendo acompanhamento."
            subtitulo="Acompanhamento"
            paragrafo1="Participe como guia em jornadas de aprendizado e desenvolvimento."
            btn="Quero Participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Mentoria;
