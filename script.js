// Arrays for Akan names based on day of the week
var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getAkanName() {
    //Get user input
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var month = parseInt(document.getElementById("year").value);
    var gender = document.getElementById("gender").value;

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
