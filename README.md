# Virtual-Flashcards

## Authors
* [Mohammed Usama Jasnak](https://github.com/UsamaJasnak/) 
* [Jimeng Long](https://github.com/Jimeng-Long) 

## Project Summary
Virtual Flashcards is an innovative, interactive learning chatbot designed to aid students in their studies through a question-and-answer format. Utilizing OpenAI APIs, this chatbot not only presents educational content but also provides immediate feedback, enhancing the learning experience. It serves as a dynamic tool for students seeking an engaging and responsive way to reinforce their knowledge.

## Prequisite Libraries
Package                       Version
----------------------------- ---------------
Flask                         2.2.2 <br>
openai                        1.6.1

## Installation
pip install Flask <br>
pip install openai

## Case Scenarios of our project

* <em>Scenario 1:</em> Asking a Question <br>
Description: When the user poses a question, the chatbot will provide a concise and accurate response. Subsequently, the chatbot will ask a related follow-up question to encourage further exploration and learning.

Example:<br>
![image](https://github.com/GenerativeAIHack/Virtual-Flashcards/assets/103351624/2e7cc01e-5262-42b4-96df-444b0762a8f6)



* <em>Scenario 2:</em> Correct Answer <br>
Description: If the user provides a correct answer, the chatbot will acknowledge the answer with positive feedback and present a follow-up question to deepen the user's understanding or to explore related topics.

Example:<br>
![image](https://github.com/GenerativeAIHack/Virtual-Flashcards/assets/103351624/9be0ba29-c1c2-4b6f-a5f7-88b71bf07bb8)


* <em>Scenario 3:</em> Wrong Answer <br>
Description: In cases where the user's answer is incorrect, the chatbot will gently correct the mistake and provide the right answer. This will be followed by another question to maintain engagement and reinforce learning.

Example:<br>
![image](https://github.com/GenerativeAIHack/Virtual-Flashcards/assets/103351624/6f3f345d-f4f1-42fd-916f-1006f9e0096f)


* <em>Scenario 4:</em> Don't Know the Answer <br>
Description: If the user is unable to answer, the chatbot will offer encouraging feedback and then supply the correct answer. This is followed by an additional question, ensuring the conversation and learning process continues.

Example:<br>
![image](https://github.com/GenerativeAIHack/Virtual-Flashcards/assets/103351624/58ae63fe-2034-47d1-b9fc-5493e950d87a)
