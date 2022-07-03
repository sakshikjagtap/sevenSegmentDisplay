(() => {

  const numbers = [
    ["block-1", "block-2", "block-3", "block-5", "block-6", "block-7"],
    ["block-3", "block-5"],
    ["block-1", "block-3", "block-4", "block-6", "block-7"],
    ["block-1", "block-3", "block-4", "block-5", "block-7"],
    ["block-2", "block-3", "block-4", "block-5"],
    ["block-1", "block-2", "block-4", "block-5", "block-7"],
    ["block-1", "block-2", "block-4", "block-5", "block-6", "block-7"],
    ["block-1", "block-3", "block-5"],
    ["block-1", "block-2", "block-3", "block-4", "block-5", "block-6", "block-7"],
    ["block-1", "block-2", "block-3", "block-4", "block-5", "block-7"],
  ];

  const reset = () => {
    Array(7).fill(1).map((id, index) => {
      const element = document.getElementById('block-' + (index + 1));
      element.style.backgroundColor = 'rgb(241, 215, 219)';
    });
  };

  const displayNumber = (event) => {
    const number = event.key;
    reset();
    numbers[number].map((id) => {
      const element = document.getElementById(id);
      element.style.backgroundColor = 'red';
    });
  };

  window.onload = () => {
    document.addEventListener('keypress', displayNumber);
  }
})();