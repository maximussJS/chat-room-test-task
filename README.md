#Test task
### About:
Public-chat-room test task<br>

### Link:
Application, hosted on Heroku https://public-chat-room.herokuapp.com/

### Used:
![](https://res.cloudinary.com/hk6omwzwc/image/upload/w_140/v1543516170/1280px-Node.js_logo.svg.png)
![](https://res.cloudinary.com/hk6omwzwc/image/upload/w_220/v1543516169/zfY6lL7eFa-3000x3000.png)
![](https://res.cloudinary.com/hk6omwzwc/image/upload/w_280/v1543517043/1_Ce0gUe0LbnhL7ebnDGTp5w.png)

###Task
Node.js application - public chat room(only RESTful API).
Unauthenticated users can post messages in chat so others can read them.
Messages need to be saved to the database.

Basic requirements:
- Koa/Express, MongoDB
- The message must contain author(unauthenticated user) email and text, create date and update date.
- Email validation (regex to check if that is real email)
- Message validation (regex to check if message is not empty string, and length < 100)

API methods:
- GET method for getting all messages with pagination by 10 messages per request.
e.g.
/api/messages/list/0 will return first 10 messages
/api/messages/list/1 will return second 10 messages
etc
- GET method for getting single message by unique identifier
e.g.
/api/messages/single/59f7303c2f60e5d7e6167dd1
- POST method for creating a new message
Body accepts email and text.
- Add request validators
- API documentation(preferably with sandbox for sending requests)
- Deploy to Heroku

Advanced requirements:
- Continuous integration CircleCI / TravisCI
- Deploy to AWS / DigitalOcean from Docker Cloud
### Start:
- clone this repository : git clone https://github.com/maximussJS/chat-room-test-task
- Install command: npm install.
- Write .env file by .env.example
- Run command: npm start.
