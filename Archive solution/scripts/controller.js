// Input from TextBox
let element = document.querySelector('#clickin');
// Call the model
element.addEventListener('click',compute);
// Print the result on span tag
function compute(){
    console.log('hello')
    let basicSalary = document.getElementById('salary').value;
    document.getElementById('hra').innerText =  hra(basicSalary);
    document.getElementById('da').innerText =  da(basicSalary);
}
