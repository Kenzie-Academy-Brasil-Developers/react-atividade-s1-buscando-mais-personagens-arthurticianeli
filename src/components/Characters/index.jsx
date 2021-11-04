import CharCard from "../CharCard";
import "./style.css";

const Characters = ({ characterList }) => {
  return (
    <div className="container">
      {characterList.map((e) => (
        <CharCard key={e.id} element={e} />
      ))}
    </div>
  );
};

export default Characters;
