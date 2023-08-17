// step-1 : Add event listener to the deposit button

document.getElementById("btn-deposit").addEventListener("click", function () {
  // Step-2 : Get the deposit amount from the deposit input field
  // For input field use .value to get the value
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step-3 : get the current deposit total
  // For non-input elements (elements other than input, textarea), use InnerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step 4: Add numbers to set the total depositCalculate the current deposit total
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  // Update the deposit total element
  depositTotalElement.innerText = currentDepositTotal;

  // Step 5: get balance current total

  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previoustBalanceTotal = parseFloat(previousBalanceString);

  // Step 6: calculate Current total balance

  const currentBalanceTotal = previoustBalanceTotal + newDepositAmount;

  // Set the balance total

  balanceTotalElement.innerHTML = currentBalanceTotal;

  // Step-7 : Clear the deposit field
  depositField.value = "";
});
