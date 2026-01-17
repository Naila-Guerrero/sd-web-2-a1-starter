"use strict";

// sample data - expanded Star Wars characters with varied ages
const characters = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Iterate through the characters array and output each character's name to the console using console.log(). 
// Then, dynamically create <li> elements for each character name and append them to the HTML unordered list element with the id "names-list".

characters.forEach(character => {
  console.log(character.name);

  const li = document.createElement("li");
  li.textContent = character.name;

  const ul = document.getElementById("names-list");
  if (ul) {
    ul.appendChild(li);
  }
});


// 2. Filter the characters array to find only those characters whose age property is less than 40. Log each filtered character's
//  name to the console. Then, dynamically create <li> elements for each filtered character and append them to the HTML unordered list 
// element with the id "young-characters-list".
characters.forEach(character => {
   if (character.age < 40) {

    console.log(character.name)
      const li = document.createElement("li");
  li.textContent = character.name;

  const ul = document.getElementById("young-characters-list");
  if (ul) {
    ul.appendChild(li)
   }
  }
});


// 3. Build a reusable function that accepts an array of character objects as a parameter. 
// Inside the function, 
// iterate through the array and extract each character's name property. 
// Dynamically generate <li> elements for each name and append them 
// to a target HTML list element. 
// Call this function with the characters array and render the results in the unordered list with id "function-list".

function reusableList(array){
  const ul = document.getElementById("function-list");
    array.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    ul.appendChild(li);
  });
}

reusableList(characters);


// 4. Write a function that accepts two parameters: an array of character objects and a numeric age threshold. Inside the function, filter 
// the array to include only characters whose age is below the threshold value. For each filtered character, create an <li> element with their 
// name and append it to the target list. Call this function and render the results in the unordered list with id "age-filter-list".

function ageFilter(array, ageThreshold){
  const ul = document.getElementById("age-filter-list");
  array.forEach(item => { 
    if (item.age < ageThreshold) {
      const li = document.createElement("li");
      li.textContent = item.name;
      ul.appendChild(li);
    }});}

ageFilter(characters, 40);


// 5. Enhance your rendering functions from exercises 3 and 4 with error handling logic. Before accessing the name property of each 
// character object, check whether the "name" property exists. If a character object is missing the name property, use console.error() 
// to log a descriptive error message to the console, and dynamically create and display the error message in the HTML div element with 
// id "error-messages".

function safeListRender(array, ulID, errorDivID) {
  const ul = document.getElementById(ulID);
  const errorDiv = document.getElementById(errorDivID);


  array.forEach((item) => {
    if (!item.name) {
       console.error(`Error: Character with id ${item.id} is missing a name`);

      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error-message");
        errorMsg.textContent = `Error: Character with id ${item.id} is missing a name`;
      errorDiv.appendChild(errorMsg);
    } else {
      const li = document.createElement("li");
      li.textContent = item.name;
      ul.appendChild(li);
    }
  });
}

// Example usage for Exercise 5
safeListRender(characters, "error-handling-list", "error-messages");


// 6. Create a second array called "brokenCharacters" that intentionally contains objects with missing name properties 
// (e.g., objects with only id and age). Pass this broken array to your error-handling functions from exercise 5. 
// Verify that your error handling correctly identifies the missing name properties, logs appropriate error messages to the console, 
// and displays those error messages in the HTML div element with id "broken-array-errors".
// Reusable function from Exercise 5 with error handling

const brokenCharacters = [
  { id: 1, name: "", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },]

function safeListRender(array, ulID, errorDivID) {
  const ul = document.getElementById(ulID);
  const errorDiv = document.getElementById(errorDivID);

  array.forEach((item) => {
    if (!item.name) {
      console.error(`Error: Character with id ${item.id} is missing a name`);

      // Show error in HTML
      const errorMsg = document.createElement("p");
      errorMsg.classList.add("error-message");
      errorMsg.textContent = `Error: Character with id ${item.id} is missing a name`;
      errorDiv.appendChild(errorMsg);
    } else {
      // Create li for valid character
      const li = document.createElement("li");
      li.textContent = item.name;
      ul.appendChild(li);
    }
  });
}

safeListRender(brokenCharacters, "broken-array-list", "broken-array-errors");