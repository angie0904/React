
import Botton from './Botton';
import css from './Card.module.css';

const Card = ({titulo,img,content,estilo}) => {
  return (
    <>
    <div className={css.card}>
        <img src={img} alt="" />
        <h2>{titulo}</h2>
        <p>{content}</p>
        <Botton titulo="me gusta" estilo={estilo}></Botton>
    </div>
    </>
  )
}

export default Card

