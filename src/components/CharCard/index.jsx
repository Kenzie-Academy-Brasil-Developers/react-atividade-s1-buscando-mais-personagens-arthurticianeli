import "./style.css";

const CharCard = ({ element }) => {
  const setClass = element.status === "Alive" ? "alive" : "dead";

  return (
    <div
      className={`card ${setClass}`}
      style={{
        backgroundImage: "url(" + element.image + ")",
      }}
    >
      <div className="name">{element.name}</div>
      <div className="status"> Status: {element.status}</div>
      <div className="specie"> Specie: {element.species}</div>
    </div>
  );
};

export default CharCard;
