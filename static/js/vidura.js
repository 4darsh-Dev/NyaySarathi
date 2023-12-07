// console.log("I am working fine!");
// const AUTHOR = "Adarsh Maurya";
// console.log(`Author ${AUTHOR}`);

// For Error message displaying and closing it 

let crossBtn = document.getElementById("cross-btn");
let errorMsgElem = document.getElementById("error-message");

crossBtn.addEventListener("click", function () {
    errorMsgElem.style.display = "none";

})

document.addEventListener("DOMContentLoaded", function () {

    // Setting timeout for n Seconds
    setTimeout(() => {
        if (errorMsgElem) {
            errorMsgElem.style.display = "none";
        }
    }, 5000);


})



const messagesList = document.querySelector('.messages-list');
const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-input');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = messageInput.value.trim();
    if (message.length === 0) {
        return;
    }

    const messageItem = document.createElement('li');
    messageItem.classList.add('message', 'sent');
    messageItem.innerHTML = `
      <div class="message-text">
          <div class="message-sender">
              <b>You</b>
          </div>
          <div class="message-content">
              ${message}
          </div>
      </div>`;
    messagesList.appendChild(messageItem);

    messageInput.value = '';

    fetch('/vidura/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: new URLSearchParams({
            'csrfmiddlewaretoken': document.querySelector('[name=csrfmiddlewaretoken]').value,
            'message': message
        })
    })
        .then(response => response.json())
        .then(data => {
            const response = data.response;
            const messageItem = document.createElement('li');
            messageItem.classList.add('message', 'received');
            messageItem.innerHTML = `
      <div class="message-text">
          <div class="message-sender">
            <b>Vidura AI</b>
          </div>
          <div class="message-content">
              ${response}
          </div>
      </div>
        `;
            messagesList.appendChild(messageItem);
        });
});



// function mSubmitInput() {
//     
//     mForm.submit();
// }


let inputSubmit = document.getElementById("mess-btn");
inputSubmit.addEventListener("click", function(){
    let mForm = document.getElementById("chat-form");
    mForm.submit();
    console.log("Submitted Successfully!");

})

console.log("Vidura is loadin! ");

