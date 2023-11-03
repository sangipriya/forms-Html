// functionality after clicking the submit button
let foodCount = 0;
let genderCount = 0;
function display() {
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;
  let Address = document.querySelector("#address").value;
  let pin_code = document.getElementById("Pincode").value;
  let State = document.getElementById("state").value;
  let Country = document.getElementById("country").value;

  let x = "";
  let y = "";
  let Male = document.getElementById("gender");
  if (Male.checked == true) {
    x = Male.value;
    genderCount++;
  }

  let Female = document.getElementById("female");
  if (Female.checked == true) {
    y = Female.value;
    genderCount++;
  }

  let a = "";
  let b = "";
  let c = "";
  let d = "";
  let e = "";

  let Idli = document.getElementById("idli");
  if (Idli.checked == true) {
    a = Idli.value;
    foodCount++;
  }

  let Dosa = document.getElementById("dosa");
  if (Dosa.checked == true) {
    b = Dosa.value;
    foodCount++;
  }

  let Pizza = document.getElementById("pizza");
  if (Pizza.checked == true) {
    c = Pizza.value;
    foodCount++;
  }

  let Sandwitch = document.getElementById("sandwitch");
  if (Sandwitch.checked == true) {
    d = Sandwitch.value;
    foodCount++;
  }

  let Burger = document.getElementById("burger");
  if (Burger.checked == true) {
    e = Burger.value;
    foodCount++;
  }

  let display_table = document.getElementById("display_result");

  if (foodCount < 2 && genderCount < 1) {
    if (foodCount < 2) {
      alert("minimum two foods shoukd be checked");
    }

    if (genderCount < 1) {
      alert("Pleas select your gender");
    }
    document.getElementById("form").reset();
  } else {
    display_table.innerHTML += `<tr>
<td>${fname}</td>
<td>${lname}</td>
<td>${Address}</td>
<td>${pin_code}</td>
<td>${x}${y}</td>
<td>${a}  ${b}  ${c}  ${d}  ${e}</td>
<td>${State}</td>
<td>${Country}</td>
</tr>
`;

    document.getElementById("form").reset();
  }
}