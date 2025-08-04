import { useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    firstName: "Harry",
    lastName: "Porter",
    email: "hp@hgwarts.edu.uk",
  });

  function handleFirstNameChange(e) {
    setPerson({
        ...person,
        firstName: e.target.value
    });
    
  }
  function handleLastNameChange(e) {
    setPerson({
        ...person,
        lastName: e.target.value
    });
  }
  function handleEmailChange(e) {
    setPerson({
        ...person,
        email: e.target.value
    });
  }

  return (
    <div>
      <label>
        First Name:
        <input type="text" onChange={handleFirstNameChange} />
      </label>
      <label>
        Last Name:
        <input type="text" onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input type="text" onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} {person.email}
      </p>
    </div>
  );
}

export default Form;
