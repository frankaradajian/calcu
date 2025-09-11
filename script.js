<button class="btn number" data-value="1">1</button>
<button class="btn number" data-value="2">2</button>
...
<button class="btn operator" data-value="+">+</button>
<button class="btn operator" data-value="-">−</button>
<button class="btn operator" data-value="*">×</button>
<button class="btn operator" data-value="/">÷</button>
<button id="equals">=</button>
<button id="clear">C</button>
<div id="display"></div>
let currentInput = '';
let display = document.getElementById('display');

// Handle number and operator buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    currentInput += value;
    display.innerText = currentInput;
  });
});

// Handle equals
document.getElementById('equals').addEventListener('click', () => {
  try {
    const result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString(); // allow chaining
  } catch (error) {
    display.innerText = 'Error';
    currentInput = '';
  }
});

// Handle clear
document.getElementById('clear').addEventListener('click', () => {
  currentInput = '';
  display.innerText = '';
});
<script src="script.js"></script>

