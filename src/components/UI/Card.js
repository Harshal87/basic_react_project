import "../UI/Card.css";

const Card = (props) => {
  const card = `${props.className} card`;
  return <div className={card}> {props.children}</div>;
};

export default Card;
