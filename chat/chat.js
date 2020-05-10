class ChatUI {
  constructor() {
    this.chatWindow = document.getElementById("chat__window");
  }

  sendMessage(message) {
    if ((message.length === 0 || !message.trim()))
      alert("Введите сообщение");
    else {
      var messageRow = document.createElement("div");
      var messageBox = document.createElement("div");

      messageRow.classList.add("chat__row");
      messageBox.classList.add("chat__box", "right");

      messageBox.innerText = message;
      messageRow.appendChild(messageBox);
      this.chatWindow.appendChild(messageRow);
    }
  }

}

var chatModule = new ChatUI();

onload = function() {
  var textArea = this.document.getElementsByName("your-message")[0];

  document.getElementsByName("send")[0].onclick = function() {
    chatModule.sendMessage(textArea.value);
    textArea.value = "";
  }
}