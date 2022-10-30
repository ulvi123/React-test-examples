import "./styles.css";
// import { useSate } from "react";
import React from "react";

export default function App() {
  // const thingsArray = ["Things 1", "Things 2"];
  // const mappedItems = thingsArray.map((item) => <p key={item}>{item}</p>);
  //Example 1
  // function addElementToDom() {
  //   const newThing = `Thing ${thingsArray.length + 1}`;
  //   thingsArray.push(newThing);
  //   console.log(thingsArray);
  // }
  // // function greeting(name) {
  // //   const date = new Date();
  // //   const hours = date.getHours();
  // //   let timeOfDay;
  // //   if (hours >= 4 && hours < 12) {
  // //     timeOfDay = "Morning";
  // //   } else if (hours >= 12 && hours < 17) {
  // //     timeOfDay = "afternoon";
  // //   } else if (hours >= 17 && hours < 20) {
  // //     timeOfDay = "evening";
  // //   } else {
  // //     timeOfDay = "night";
  // //   }
  // //   return `Good ${timeOfDay},${name}`;
  // // }
  // // console.log(greeting("Ulvi"));
  //Example 2
  // return (
  //   <div className="App">
  //     <button onClick={addElementToDom}>Add Item</button>
  //     {mappedItems}
  //   </div>
  // );
  // const [isImportant, setIsImportant] = React.useState("Yes");
  // function handleClick() {
  //   setIsImportant("No");
  // }
  // return (
  //   <div className="App">
  //     <div className="container">
  //       <h1>Is state important to you?</h1>
  //       <div className="state--value" onClick={handleClick}>
  //         <h1>{isImportant}</h1>
  //       </div>
  //     </div>
  //   </div>
  // );
  //Example 3
  // const [count, setCount] = React.useState(0);
  // function countUp() {
  //   setCount(function (prevCount) {
  //     return prevCount + 1;
  //   });
  // }
  // function countDown() {
  //   setCount(function (prevCount) {
  //     return prevCount - 1;
  //   });
  // }
  // return (
  //   <div className="counter">
  //     <button className="counter--down" onClick={countDown}>
  //       -
  //     </button>
  //     <div className="counter--count">
  //       <h1 className="count--text">{count}</h1>
  //     </div>
  //     <button className="counter--up" onClick={countUp}>
  //       +
  //     </button>
  //   </div>
  // );
  //Example 4
  // const [isGoingOut, setIsGoingOut] = React.useState(true);
  // function changeMind() {
  //   setIsGoingOut((prevState) => !prevState);
  // }
  // return (
  //   <div className="App">
  //     <div className="container">
  //       <h1>Am I an experienced developer?</h1>
  //       <div className="state--value" onClick={changeMind}>
  //         <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
  //       </div>
  //     </div>
  //   </div>
  // );
  //Example 5
  // const [thingsArray, setThingsArray] = React.useState([
  //   "things 1",
  //   "things 2"
  // ]);
  // function addItem() {
  //   setThingsArray((prevThingsArray) => {
  //     return [...prevThingsArray, `thing ${prevThingsArray.length + 1}`];
  //   });
  // }
  // const mappedItems = thingsArray.map((item) => <p key={item}>{item}</p>);
  // return (
  //   <div className="App">
  //     <button onClick={addItem}>Add elements</button>
  //     {mappedItems}
  //   </div>
  // );
  //Example 6
  // const [fruitsArray, setFruitsArray] = React.useState([
  //   "Fruit 1",
  //   "Fruit 2",
  //   "Fruit 3",
  //   "Fruit 4"
  // ]);
  // function addItem() {
  //   setFruitsArray(function (prevFruitsArray) {
  //     return [...prevFruitsArray, `Fruit ${prevFruitsArray.length + 1}`];
  //   });
  // }
  // const mappedFruitArray = fruitsArray.map((fruit) => (
  //   <p key={fruit}>{fruit}</p>
  // ));
  // return (
  //   <div>
  //     <button onClick={addItem}>Add Item</button>
  //     {mappedFruitArray}
  //   </div>
  // );

  //Example 7

  const [contact, setContact] = React.useState({
    firstName: "Ulvi",
    lastName: "Nasibli",
    phone: "+37253767672",
    email: "email@gmail.com",
    isFavorite: false
  });

  let myStarIcon =
    contact.isFavorite === true
      ? "https://i.pinimg.com/736x/1e/26/44/1e26444b739863fdf4b0ad49d163ff95.jpg"
      : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F13%2F13595.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fempty-star_13595&tbnid=wivQWqw8k94skM&vet=12ahUKEwi1k5vq34f7AhXWUXcKHeuwCFwQMygAegUIARDIAQ..i&docid=UiOo8nGOAI-K0M&w=512&h=512&q=empty%20star%20icon&safe=active&ved=2ahUKEwi1k5vq34f7AhXWUXcKHeuwCFwQMygAegUIARDIAQ";

  function toggleIcon() {
    setContact(function (prevContact) {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hans-Zimmer-profile_%28cropped%29.jpg/220px-Hans-Zimmer-profile_%28cropped%29.jpg"
          className="card-img"
          alt="star-filled"
        />
        <div className="card-info">
          <img
            src={myStarIcon}
            className="card--favorite"
            onClick={toggleIcon}
            alt="star-empty"
          />
        </div>
      </article>
    </main>
  );
}
