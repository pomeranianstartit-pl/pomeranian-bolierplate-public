let loginForm = document.getElementById('formID');
let div = document.getElementById('divID')

loginfForm.addEventListener('submit', (e)=>{
    e.preventDefault()
console.log(e, 'test')
e.target.innerHTML = 'submit'

})

loginfForm.addEventListener('click', (e)=>{
    e.preventDefault()
console.log(e, 'Div został kliknięty')
e.target.innerHTML = '1234'

})