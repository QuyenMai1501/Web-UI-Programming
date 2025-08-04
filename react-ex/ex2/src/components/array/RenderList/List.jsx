import { useState } from "react";
import { people } from "./data.jsx";
import { getImageUrl } from "./ImageUrl.jsx";
import "./List.css";

function List() {
  const profession = [... new Set(people.map((person) => person.profession))];
  const [selectedProf, setSelectedProf] = useState(profession);

  const filterPeople = people.filter(
    (person) => person.profession === selectedProf
  );

  const listItems = filterPeople.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b> <span className="prof">{person.profession}</span>
      </p>
      <p>{person.biography}</p>
    </li>
  ));
  return (
    <div>
      <select value={selectedProf} onChange={(e) => setSelectedProf(e.target.value)}>
        {profession.map((prof) => (
          <option key={prof} value={prof}>{prof}</option>
        ))}
      </select>

      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
