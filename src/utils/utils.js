export const addLeadingZero = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const removeNode = (element) => {
  if (element && element.parentNode && element.parentNode.removeChild) {
    element.parentNode.removeChild(element);
  }
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};
