import s from "./InfoCard.module.scss";
const InfoCard = (props) => {
  return (
    <article className={s.article}>
      <img src={props.img} alt={props.alt} />
      <h2>{props.subtitulo}</h2>
      <p>{props.paragrafo1}</p>
      <p>{props.paragrafo2}</p>
      <button>{props.btn}</button>
    </article>
  );
};

export default InfoCard;
