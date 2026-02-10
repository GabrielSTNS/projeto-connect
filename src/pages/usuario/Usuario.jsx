import s from "./Usuario.module.scss";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineCalendarToday } from "react-icons/md";
const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img
          src="https://avatars.githubusercontent.com/u/105504483?v=4"
          alt="Imagem do perfil do usuário."
        />
        <div className={s.div}>
          <h1>Gabriel Santana</h1>
          <h2>Voluntário Ativo</h2>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul>
            <li>
              <LuMapPin /> São Paulo, SP
            </li>
            <li>
              <MdOutlineEmail /> gabriel.santana@gmail.com
            </li>
            <li>
              <MdOutlineCalendarToday /> Membro desde Fevereiro 2026
            </li>
          </ul>

          <ul>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Usuario;
