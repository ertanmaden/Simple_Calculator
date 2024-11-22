function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
/*Option 2*/
  // let toplama = document.getElementById("toplama").checked;
  // let cikartma = document.getElementById("cikartma").checked;
  // let carpma = document.getElementById("carpma").checked;
  // let bolme = document.getElementById("bolme").checked;
  let result = 0;
  let print = document.getElementById("print");
/* Option 2 */
  // if (toplama) {
  //   result = num1 + num2;
  // } else if (cikartma == true) {
  //   result = num1 - num2;
  // } else if (carpma) {
  //   result = num1 * num2;
  // } else if (bolme) {
  //   if (num2 !== 0) {
  //     result = num1 / num2;
  //   } else {
  //     alert("Sayıyı sıfıra bölemezsiniz!");
  //     return;
  //   }
  // } else {
  //   alert("Lütfen işlem seçimi yapınız.");
  //   return;
  // }

  const islem = document.querySelector('input[name="cal"]:checked');
  switch (islem.value) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) { 
        alert("Can't divide by zero!");
            return;
      }
      result = num1 / num2;
      break;
    default:
      break;
  }
  print.innerHTML = result.toFixed(2);
}


document.getElementById('calculate').addEventListener('click', calculate);
