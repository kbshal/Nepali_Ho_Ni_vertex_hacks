const chatIcon = document.querySelector('.chat-icon');
const chatBox = document.querySelector('.chat-box');
const closeChat = document.querySelector('.close-chat');

// close chat box 
closeChat.addEventListener('click', () => {
    chatBox.classList.toggle("chat-box-hide");
});

// open chat box 
chatIcon.addEventListener('click', () => {
    chatBox.classList.remove("chat-box-hide");
});


function print_bot_response(botResponse) {
    /**
    same as print_user_input but does for bot side
    */
    let botHtml = `<span class="received-msg" > ${botResponse}</span>`;
    $("#chat-body").append(botHtml);
    var chatbox = document.getElementById('chat-body')
    chatbox.scrollTop = chatbox.scrollHeight
}


function print_user_input(userText) {
    /**
    adds the given userText to the website on user's side
    */
    let userHtml = '<span class="sent-msg">' + userText + '</span>';
    $("#chat-body").append(userHtml);
    var chatbox = document.getElementById('chat-body')
    chatbox.scrollTop = chatbox.scrollHeight
}