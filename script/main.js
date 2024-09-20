// const income = document.getElementById("income");
// const software = document.getElementById("software");
// const courses = document.getElementById("courses");
// const internet = document.getElementById("internet");
// const savings = document.getElementById("savings");
// const totalExpenses = document.getElementById("total-expenses");
// const balance = document.getElementById("balance");
// const savingsAmount = document.getElementById("savings-amount");
// const remainingBalance = document.getElementById("remaining-balance");
const allInputs = [
  getElement("income", null),
  getElement("software", null),
  getElement("courses", null),
  getElement("internet", null),
  getElement("savings", null),
];
// input validation
allInputs.forEach((inp) => {
  inp.addEventListener("input", () => {
    handleError(inp);
  });
});

// updating Results Summary
getElement("calculate", null).addEventListener("click", () => {
  getElement("total-expenses", null).innerText = getTotalExpenses(
    getElement("software", "val"),
    getElement("courses", "val"),
    getElement("internet", "val")
  );
  getElement("balance", null).innerText = getBalance(
    getElement("income", "val"),
    getElement("total-expenses", "textVal")
  );
  //   getElementVal("balance", false).innerText =
});
