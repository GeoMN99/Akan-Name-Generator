// Arrays for Akan names based on day of the week
const maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getAkanName() {
    //Get user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const month = parseInt(document.getElementById("year").value);
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
}


// Calculate the day of the week using provided formula
const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = day;

let d = (Math.floor((4 * CC - 2 * -1) + (45 * YY) + (1026 * (MM +1)) + DD)) % 7;

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

  