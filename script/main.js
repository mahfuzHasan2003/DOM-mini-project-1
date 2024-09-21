// input validation
const allInputs = [
  getElement("income", null),
  getElement("software", null),
  getElement("courses", null),
  getElement("internet", null),
  getElement("savings", null),
];
allInputs.forEach((inp) => {
  inp.addEventListener("input", () => {
    handleError(inp);
  });
});

// addevent to calculate BTN
getElement("calculate", null).addEventListener("click", () => {
  // updating result summary
  getElement("results", null).classList.remove("hidden");
  getElement("total-expenses", null).innerText = getTotalExpenses(
    getElement("software", "val"),
    getElement("courses", "val"),
    getElement("internet", "val")
  );
  getElement("balance", null).innerText = getBalance(
    getElement("income", "val"),
    getElement("total-expenses", "textVal")
  );

  // adding expense history
  getElement("history-list", null).innerHTML =
    `<div class="bg-white p-3 rounded-md shadow-sm
      border-l-2 border-blue-500"
      >
       <p class="text-xs text-gray-500"> ${new Date().toLocaleDateString()}</p>
       <p class="text-xs text-gray-500">Income : $${getElement(
         "income",
         "val"
       )}</p>
       <p class="text-xs text-gray-500"> Expenses : $${getElement(
         "total-expenses",
         "textVal"
       )} </p>
       <p class="text-xs text-gray-500"> Balance : $${getElement(
         "balance",
         "textVal"
       )} </p>
  </div>` + getElement("history-list", null).innerHTML;
});

// tab switching and updating content
getElement("history-tab", null).addEventListener("click", () => {
  getElement("expense-form", null).classList.add("hidden");
  getElement("history-section", null).classList.remove("hidden");
  getElement("assistant-tab", null).classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  getElement("history-tab", null).classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
});
getElement("assistant-tab", null).addEventListener("click", () => {
  getElement("expense-form", null).classList.remove("hidden");
  getElement("history-section", null).classList.add("hidden");
  getElement("history-tab", null).classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
  getElement("assistant-tab", null).classList.add(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600",
    "text-white"
  );
});
