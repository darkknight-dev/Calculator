
var buttons = document.querySelectorAll(".num");
console.log(buttons);

for (const button of buttons) {
    button.addEventListener('click', function (event) {

        console.log(button.textContent);

        if (button.textContent === "C") {

            document.getElementById("demo").value = '';
        }

        else if (button.textContent === "=") {
            document.getElementById("demo").value = eval(document.getElementById("demo").value);
        }
        else {
            document.getElementById("demo").value += button.textContent;
        }


    })
}
