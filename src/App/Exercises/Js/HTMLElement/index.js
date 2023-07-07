let loginForm = document.getElementById('formID')
let div = document.getElementById('divID')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e, 'test czy działa to dziadostwo')
})

div.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e, 'event')
  e.target.innerHTML = 'Już mnie nie zmienisz, buahahaha'
  //   clientX
  // : 
  // 35
  // clientY
  // : 
  // 58

  const targetOfEvent = e.target

  targetOfEvent.style.borderBottom = '5px solid red'
  targetOfEvent.style.borderTop = '5px solid red'
  targetOfEvent.style.top = `${Math.floor(Math.random() * 100)}px`
  targetOfEvent.style.left = `${Math.floor(Math.random() * 100)}px`

  console.log(targetOfEvent.style.top, 'top')
  console.log(targetOfEvent.style.left, 'left')


  targetOfEvent.addEventListener('mousemove', (event) => {
    event.preventDefault()
    console.log('Teraz nie wyświetlisz nic!')
    event.target.style.top = `${Math.floor(Math.random() * 100)}px`
    event.target.style.left = `${Math.floor(Math.random() * 100)}px`
  })

  // 1 opcja
  // targetOfEvent.addEventListener('click', (event) => {
  //   event.preventDefault()
  //   console.log('Teraz nie wyświetlisz nic!')
  // })


  // 2 opcja
  // targetOfEvent.click = (event) => {
  //   event.preventDefault()
  //   console.log('Teraz nie wyświetlisz nic!')
  // }

})