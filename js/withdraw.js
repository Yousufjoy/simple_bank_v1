function withdrawMoney() {
  //Step 1 :  Inputfield e jei value dicchi sheta age nicchi .value diye jehetu input field then convert kortesi parsfloat diye jehetu string thake

  const userCurrentWithdrawAmount = document.getElementById("withdraw-field");
  const userWithDrawAmount = userCurrentWithdrawAmount.value;
  const userWithdrawAmountConverted = parseFloat(userWithDrawAmount);

  // Step-2 : upore Jei balance show kortese Sheta nicchi innerText diye  jehetu input field na then convert kortesi
  const currentWithdrawAmount = document.getElementById("withdraw-input");

  const currentWithdrawAmountValue = currentWithdrawAmount.innerText;
  const currentWithdrawAmountValueConverted = parseFloat(
    currentWithdrawAmountValue
  );

  // Step-3 : User theke Withdraw amount + Upore display te jei withdraw amount ase oitar sathe jog kortesi
  const finalWithdrawAmount =
    userWithdrawAmountConverted + currentWithdrawAmountValueConverted;

  // Step-4 : InnerText er maddhome oita upore show kortesi!
  currentWithdrawAmount.innerText = finalWithdrawAmount;

  //  Step-5 : Current balance ta nicchi uporer then convert ....

  const currentBalance = document.getElementById("balance-total");

  const currentBalanceValue = currentBalance.innerText;
  const currentBalanceValueConverted = parseFloat(currentBalanceValue);

  // Step-6 : Withdraw amount ta minus (-) kore dicchi main balance theke
  const finalBalance =
    currentBalanceValueConverted - userWithdrawAmountConverted;

  // Step-7: Finally innerText er maddhome balance e ( - )kora withdraw amount balance theke (-) kore dekhacchi
  currentBalance.innerText = finalBalance;

  if (userWithdrawAmountConverted > currentBalanceValueConverted) {
    alert("You do not have enough money to make this transaction");
    return;
  }

  // Step-8: button click korar por input field er value empty string kore dicchi!
  userCurrentWithdrawAmount.value = "";
}

document
  .getElementById("btn-withdraw")
  .addEventListener("click", withdrawMoney);
