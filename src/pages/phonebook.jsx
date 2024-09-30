import React, { useState } from "react";
import Layout from "../layout";

export const PhoneBook = () => {
  //  const [persons, setPersons] = useState([{name: 'John Don',number: '13'}])
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    //check if the user already exists

    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
  };

  //implement searchFilter 
  const handleFilter = () => {
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(newName.toLowerCase())
    );
    setPersons(filteredPersons);
  }

  return (
    <Layout>
      <h2 className="font-bold text-2xl">Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input
            type="text"
            className="border"
            onChange={(e) => setNewName(e.target.value)}
          />
          <br></br>
          <br></br>
          number:{" "}
          <input
            type=""
            className="border"
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="border p-2 rounded-md my-3">
            Add
          </button>
        </div>
        <h2 className="font-bold text-2xl">Numbers</h2>
        {persons.map((person, index) => (
          <div key={index}>
            <p>
              {person.name} {person.number}
            </p>
          </div>
        ))}
      </form>
    </Layout>
  );
};
