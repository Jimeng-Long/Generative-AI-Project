
function sendMessage() {
    var input = document.getElementById("userInput");
    var message = input.value.trim();

    if (message !== "") {
        var messagesContainer = document.getElementById("chatbotMessages");
        var newMessage = document.createElement("div");
        
        var userLabel = document.createElement("span");
        userLabel.textContent = "You: ";
        userLabel.className = "user-label";  // Add a class name to the span

        // Append the userLabel span to newMessage
        newMessage.appendChild(userLabel);

        // Append the message text in a new text node
        newMessage.appendChild(document.createTextNode(message));
        
        newMessage.appendChild(document.createElement("br"));
        newMessage.appendChild(document.createElement("br"));
        
        messagesContainer.appendChild(newMessage);
        input.value = "";


        
        fetch('/message', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "message": message }),
        })
        .then(response => response.json())
        .then(data => {
            // Create a new div element for the message
            var newMessage = document.createElement("div");
        
            // Create a span element for "Bot:"
            var botLabel = document.createElement("span");
            botLabel.textContent = "Bot: ";
            botLabel.className = "bot-label";  // Add a class name for styling
        
            // Append the botLabel span to newMessage
            newMessage.appendChild(botLabel);
        

        
            // Append the bot's response text in a new text node
            newMessage.appendChild(document.createTextNode(data.response));
            
            newMessage.appendChild(document.createElement("br"));
            newMessage.appendChild(document.createElement("br"));

            // Append the new div to the messages container
            messagesContainer.appendChild(newMessage);
        
            // Clear the input field
            input.value = "";
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });

    }
}
