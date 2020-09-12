let inputPalidrome = document.getElementById('inputPalidrome')
let buttonSubmit = document.getElementById('buttonSubmit')

// buttonSubmit.addEventListener('click', checkPalidrome)
buttonSubmit.addEventListener('click', checkPalidrome)
// document.querySelector('#clickMe').addEventListener('click', makeReq)
console.log("hi im working");
function checkPalidrome() {
    string = document.getElementById("inputPalidrome").value;
    fetch(`/api?word=${string}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            console.log(data.result)
            if (data.result === "yes") {
                document.querySelector('p').innerHTML = `${string} is  a Palindrome`
            } else {
                document.querySelector('p').innerHTML = `${string} is not a Palindrome`
            }
        });
}









// function checkPalidrome(){
//   console.log();
//   let string = inputPalidrome.value
//
//   let reverse = string.split('').reverse('').join('')
//
//   if (string===reverse) {
//     document.querySelector('p').innerHTML = `${string} is a palidrome `
//
//
//   }
//   else {
//     document.querySelector('p').innerHTML = `${string} is not a palidrome `
//
//   }
// }
// buttonSubmit.addEventListener('click', checkPalidrome)
