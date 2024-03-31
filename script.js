function toggleStyle(textId, styleProp, value) {
  const element = document.getElementById(`text-${textId}`);
  if (element.style[styleProp] === value) {
    element.style[styleProp] = 'none'; 
  } else {
    element.style[styleProp] = value; 
  }
}

function setFontSize(textId, fontSize) {
  const element = document.getElementById(`text-${textId}`);
  element.style.fontSize = `${fontSize}px`;
}

function setColor(textId, color) {
  const element = document.getElementById(`text-${textId}`);
  element.style.color = color;
}

document.querySelectorAll('.bold-btn').forEach(button => {
  button.addEventListener('click', () => {
    toggleStyle(button.getAttribute('data-text-id'), 'fontWeight', 'bold');
  });
});

document.querySelectorAll('.italic-btn').forEach(button => {
  button.addEventListener('click', () => {
    toggleStyle(button.getAttribute('data-text-id'), 'fontStyle', 'italic');
  });
});

document.querySelectorAll('.underline-btn').forEach(button => {
  button.addEventListener('click', () => {
    toggleStyle(button.getAttribute('data-text-id'), 'textDecoration', 'underline');
  });
});

document.querySelectorAll('.font-size-input').forEach(input => {
  input.addEventListener('change', () => {
    setFontSize(input.getAttribute('data-text-id'), input.value);
  });
});

document.querySelectorAll('.color-input').forEach(input => {
  input.addEventListener('change', () => {
    setColor(input.getAttribute('data-text-id'), input.value);
  });
});
