let isInvalid = true;
const handleError = (inpElement) => {
  const errElement = getElement(
    inpElement.getAttribute("data-details") + "-error",
    null
  );
  //   console.log(errElement);
  if (
    isNaN(inpElement.value) ||
    parseFloat(inpElement.value) < 0 ||
    inpElement.value === ""
  ) {
    errElement.classList.remove("hidden");
    isInvalid = false;
  } else {
    errElement.classList.add("hidden");
    isInvalid = true;
  }
};
// get element/input value
const getElement = (ID, what) => {
  if (what === "val") {
    return parseFloat(document.getElementById(ID).value);
  } else if (what === "textVal") {
    return parseFloat(document.getElementById(ID).innerText);
  }
  return document.getElementById(ID);
};
// get total expenses
const getTotalExpenses = (s, c, int) => {
  return s + c + int;
};
// get balance
const getBalance = (inc, e) => {
  return inc - e;
};
// console.log(inputs);
