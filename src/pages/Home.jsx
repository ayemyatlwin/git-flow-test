import React from "react";
import Header from "../components/Header";
import { produce } from "immer";

const Home = () => {
  const obj = {
    name: "brownie",
    age: 20,
    hobbies: ["singing", "watching movies", "drawing"],
    isActive: true,
    address: {
      homeNumber: 123,
      street: 20,
      city: "Turbo",
      country: "Kite",
    },
  };
  console.log("Initial Object", obj);

  const objFromImmer = produce(obj, (draft) => {
    draft.hobbies[1] = "dancing";
    draft.name = "Jo Jo";
    draft.isActive = false;
  });
  console.log("Edited Object", objFromImmer);


  
  return (
    <>
      <Header />
      <h1>this is sidebar</h1>
      <h1>first time release</h1>
      <button>Click here</button>
    </>
  );
};

export default Home;
