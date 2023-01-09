import { createContext, useContext, useState } from "react";
import { animals as initialAnimals } from "../data/dummyAnimals";

const AnimalContext = createContext();

const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState(initialAnimals);

  const addNewAnimal = (animal) => {
    animal.id = Math.floor(Math.random() * 99999);
    setAnimals((prevAnimals) => [...prevAnimals, animal]);
  };

  const removeAnimal = (id) => {
    const newList = animals.filter((card) => card.id !== id);
    setAnimals(newList);
  };

  const editAnimalByIdandName = (id, name, age) => {
    const animalsCopy = [...animals];
    const indexByAnimalsId = animalsCopy.findIndex(
      (animal) => animal.id === id
    );
    const animalToEdit = animalsCopy[indexByAnimalsId];
    animalsCopy[indexByAnimalsId] = {
      ...animalToEdit,
      name,
      age,
    };
    setAnimals(animalsCopy);
  };

  return (
    <AnimalContext.Provider
      value={{ animals, addNewAnimal, removeAnimal, editAnimalByIdandName }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimals = () => {
  return useContext(AnimalContext);
};

export default AnimalProvider;
