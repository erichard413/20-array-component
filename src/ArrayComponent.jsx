import React, { useState } from "react";

function ArrayComponent() {
  const initialInput = {
    letter: "",
    index: "0",
  };
  const initialArr = ["A", "B", "C"];
  const [array, setArray] = useState(initialArr);
  const [input, setInput] = useState(initialInput);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value[0] || "" });
  };

  const removeFirst = e => {
    e.preventDefault();
    let arrCopy = [...array];
    arrCopy.shift();
    setArray(arrCopy);
  };

  const removeLetter = e => {
    e.preventDefault();
    setArray(arr =>
      arr.filter(letter => letter.toUpperCase() !== input.letter.toUpperCase())
    );
  };

  const unshiftLetter = e => {
    e.preventDefault();
    let arrCopy = [...array];
    arrCopy.unshift(input.letter.toUpperCase());
    setArray(arrCopy);
  };

  const pushLetter = e => {
    e.preventDefault();
    let arrCopy = [...array];
    arrCopy.push(input.letter.toUpperCase());
    setArray(arrCopy);
  };

  const clearArr = e => {
    e.preventDefault();
    setArray([]);
  };

  const resetArr = e => {
    e.preventDefault();
    setArray(initialArr);
  };

  const replaceAtoH = e => {
    e.preventDefault();
    let newArr = [];
    array.map(letter => {
      if (letter === "A") {
        newArr.push("H");
      } else {
        newArr.push(letter);
      }
    });
    setArray(newArr);
  };

  const addElementAtIdx = e => {
    e.preventDefault();
    let arrCopy = [...array];
    arrCopy.splice(+input.index, 0, input.letter.toUpperCase());

    setArray(arrCopy);
  };

  return (
    <div className="ArrayComponent">
      <h1>Unit 20: Array Component Exercise</h1>
      <h3>Functionality to Create</h3>
      <ol>
        <li>
          Create state that stores an array with the initial value of ["A", "B",
          "C"]
        </li>
        <li>Add the ability to remove the first element from the array</li>
        <li>Add the ability to remove a specific letter from the array</li>
        <li>Add the ability to add a new element to the start of the array</li>
        <li>Add the ability to add a new element to the end of the array</li>
        <li>Add the ability to clear the array</li>
        <li>Add the ability to reset the array to the initial value</li>
      </ol>
      <h3>Bonus Functionality</h3>
      <ol>
        <li>Add the ability to update all A elements in the array to H</li>
        <li>
          Add an input that is connected to state and a button that will add the
          input value to the start of the array
        </li>
        <li>Add the ability to add a new element at any index in the array</li>
      </ol>
      <h2>Array is: {array.join() || "empty"}</h2>
      <div>
        <form>
          <input
            type="text"
            name="letter"
            onChange={handleInputChange}
            value={input.letter}
            placeholder="Letter Input"
          />
        </form>
        <button onClick={removeFirst}>Remove first element from array</button>
        <button onClick={removeLetter}>Remove letter</button>
        <button onClick={unshiftLetter}>Add letter to begining</button>
        <button onClick={pushLetter}>Add letter to end</button>
        <button onClick={clearArr}>Clear Array</button>
        <button onClick={resetArr}>Reset Array</button>
      </div>
      <div>
        <h4>BONUS</h4>
        <form>
          <input
            type="text"
            name="index"
            onChange={handleInputChange}
            value={input.index}
            placeholder="Index Input"
          />
        </form>
        <button onClick={replaceAtoH}>Update all A's to H's</button>
        <button onClick={addElementAtIdx}>Add letter to index</button>
      </div>
    </div>
  );
}

export default ArrayComponent;
