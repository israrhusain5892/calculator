// let buttons = document.querySelectorAll(".btn");
let buttons=document.querySelectorAll('.btn');
// console.log(buttons);
let string = "";


for (let button of buttons) {
    button.addEventListener('click', (event) => {
        event.preventDefault();
       

        if (event.target.innerHTML == '=') {
            string = eval(string);
            string.style = "color:white";
            document.querySelector('.input').value = string;
        }

        else if (event.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else {
            let res = event.target.innerHTML;
            console.log(res);

            string = string + res;

            document.querySelector('.input').value = string;
        }
    })
}
