// Arrays for Akan names based on day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getAkanName() {
    //Get user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate inputs
    if (isNaN(day) || day < 1 || day > 31) {
        alert("Please enter a valid day between 1 and 31.");
        return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid month between 1 and 12.");
        return;
    }

    if (isNaN(year) || year < 1) {
        alert("Please enter a valid year.");
        return;
    }

    if (gender === "") {
        alert("Please select a gender.");
        return;
    }



   // Calculate the day of the week using the given formula
  const CC = parseInt(String(year).slice(0, 2));
  const YY = parseInt(String(year).slice(2, 4));
  const MM = month;
  const DD = day;

  let d = ((4 * CC - 2 * CC - 1) + (45 * YY) + (10*26 * (MM + 1)) + DD) % 7;
  d = Math.floor(d);

  // Make sure d is not negative
  if (d < 0) {
    d = d + 7;
  }
  

  // Pick name based on gender
    let akanName = "";
  if (gender === "male") {
    akanName = maleNames[d];
  } else {
    akanName = femaleNames[d];
  }

  // Show the Result
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = "Your Akan name is: <strong>" + akanName + "</strong>";
 
  //Form Reset
  document.getElementById("day").value = "";
  document.getElementById("month").value = "";
  document.getElementById("year").value = "";
  document.getElementById("gender").value = "";
}