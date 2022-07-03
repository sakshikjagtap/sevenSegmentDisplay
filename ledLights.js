const numbers = [
  ["1", "2", "3", "5", "6", "7"],
  ["3", "5"],
  ["1", "3", "4", "6", "7"],
  ["1", "3", "4", "5", "7"],
  ["2", "3", "4", "5"],
  ["1", "2", "4", "5", "7"],
  ["1", "2", "4", "5", "6", "7"],
  ["1", "3", "5"],
  ["1", "2", "3", "4", "5", "6", "7"],
  ["1", "2", "3", "4", "5", "7"],
];

const reset = () => {
  Array(7).fill(1).map((id, index) => {
    const element = document.getElementById(index + id + "");
    element.style.backgroundColor = 'rgb(241, 215, 219)';
  });
}

const displayNumber = (event) => {
  const number = event.key;
  reset();
  numbers[number].map((id) => {
    console.log(number);
    const element = document.getElementById(id);
    element.style.backgroundColor = 'red';
  });
}

window.onload = () => {
  document.addEventListener('keypress', displayNumber);
}
