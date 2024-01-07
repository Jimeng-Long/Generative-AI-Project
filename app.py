#Importing the required libraries
import os
import json
from flask import Flask, render_template, request, jsonify, session
from openai import OpenAI

#Setting OPen AI key
client = OpenAI(
    api_key= os.environ.get(".env"), # Ensure the environment variable is correctly named
)

#Setting up Flask Environment
app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SESSION_TYPE'] = 'filesystem'

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/message", methods=["POST"])
def message():
    # Importing the user message
    data = request.json
    user_message = data['message']
    

    # Load or initialize the conversation history
    conversation_history = session.get("conversation_history", [])

    # Add the user's message to the conversation history
    conversation_history.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        temperature=0.6,
        messages=[
            {"role": "system", "content": "Students will ask questions and you should answer the question and ask a question to make sure the user gives your hints. And then the user will answer your question, and you should tell the user whether their answer is correct or not. Give a concrete evaluation of their answer and follow it up with a question."}
        ] + conversation_history  # Include system message and conversation history
    )

    # Append bot's response to the conversation history
    bot_message = response.choices[0].message.content
    conversation_history.append({"role": "assistant", "content": bot_message})


    # Store the updated conversation history in the session
    session["conversation_history"] = conversation_history
    return jsonify({"response": bot_message})

if __name__ == "__main__":
    app.run(debug=True)
