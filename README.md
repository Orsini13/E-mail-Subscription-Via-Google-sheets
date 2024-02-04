 this below is used to make a delivery message on the UI to disappear
  and for the listener to go ack to default
 setTimeout(function(){
   msg.innerHTML = ""
 },500)
 form.reset()


 this below is used to pass a message to the user
 msg.innerHTML = "Thank You For Subscribing!"
