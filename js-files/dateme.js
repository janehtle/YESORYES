const firstYes = document.getElementById("firstYes");
const secondYes = document.getElementById("secondYes");
const label = document.getElementById("label");

function proceed() {
    if(firstYes.checked) {
        window.location.href = "lunch.html";
    }
    else if(secondYes.checked) {
        window.location.href = "lunch.html";
    }
    else {
        label.textContent = "Select a choice";
    }
}