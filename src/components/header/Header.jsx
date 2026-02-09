import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import S from "./Header.module.scss";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }
    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);
  return (
    <>
      <header className={S.header}>
        <Link to={"/"}>
          <img
            className={S.imgLogo}
            src={logo}
            alt="Imagem de logo do site connect sendo representada por uma mão segurando um coração, simbolizando apoio"
          />
        </Link>
        {!isMobile && (
          <nav className={S.nav}>
            <Link className={S.Link} to={"/doacao"}>
              Doação
            </Link>
            <Link className={S.Link} to={"/voluntariado"}>
              Voluntariado
            </Link>
            <Link className={S.Link} to={"/mentoria"}>
              Mentoria
            </Link>
            <Link className={S.Link} to={"/eventosEPalestras"}>
              Eventos
            </Link>
          </nav>
        )}
        <img
          className={S.imgUser}
          src="https://avatars.githubusercontent.com/u/105504483?v=4"
          alt="Imagem do usuário"
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? S.openedNavUser : S.closedNavUser}>
        <Link to={"/usuario"} onClick={() => setMenuAberto(false)}>
          Gabriel Santana
        </Link>
        <Link onClick={() => setMenuAberto(false)}>Meus Voluntariados</Link>
        <Link onClick={() => setMenuAberto(false)}>Configurações de Conta</Link>
        {isMobile && (
          <div>
            <Link to={"/doacao"} onClick={() => setMenuAberto(false)}>
              Doação
            </Link>
            <Link to={"/voluntariado"} onClick={() => setMenuAberto(false)}>
              Voluntariado
            </Link>
            <Link to={"/mentoria"} onClick={() => setMenuAberto(false)}>
              Mentoria
            </Link>
            <Link
              to={"/eventosEPalestras"}
              onClick={() => setMenuAberto(false)}
            >
              Eventos
            </Link>
          </div>
        )}
        <Link onClick={() => setMenuAberto(false)}>Sair</Link>
      </nav>
    </>
  );
};

export default Header;
