while (true) {
  let userInput = prompt("Iltimos, son kiriting:");
  if (userInput === "" || isNaN(userInput)) {
      alert("Iltimos, son kiriting.");
  } else {
      let number = prompt(userInput);
      if (number % 2 === 0) {
          alert("Bu juft son.");
      } else {
          alert("Bu toq son.");
      }
  }
}