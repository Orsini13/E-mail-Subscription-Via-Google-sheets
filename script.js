const scriptURL = 'https://script.google.com/macros/s/AKfycbwXc5f_Cv-Y_LJ2VDTFwWppLTKihBIWNt-o50LZxqlGBIEqps5Cewz0XXd1R-Ox8HSMxw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
          msg.innerHTML = ""
        },500)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})



// this below is used to make a delivery message on the UI to disappear
//  and for the listener to go ack to default
// setTimeout(function(){
//   msg.innerHTML = ""
// },500)
// form.reset()


// this below is used to pass a message to the user
// msg.innerHTML = "Thank You For Subscribing!"


// const scriptURL = 'https://script.google.com/macros/s/AKfycbwXc5f_Cv-Y_LJ2VDTFwWppLTKihBIWNt-o50LZxqlGBIEqps5Cewz0XXd1R-Ox8HSMxw/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response =>{
//         msg.innerHTML = "Thank You For Subscribing!"
//         setTimeout(function(){
//           msg.innerHTML = ""
//         },500)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })