# Frontend technical test

#### To launch the project :

##### Download packages

`npm install`

##### Run server

`npm run start-server`

##### Run app

`npm run dev`

---

#### What was expected :

We want to :

- Display a list of all the conversations
- Allow the user to select a conversation
  - Inside the conversation, there is a list of all the messages between these two users.
  - As a user, you can type and send new messages in this conversation

---

#### Packages used :

I used React Hooks for all project, with Context & Reducer to create a global state.

I downloaded and used these different packages :

- `React bootstrap` for responsive
- `Classnames` to dynamically add multiple class names
- `Axios` for requests
- `Luxon` to format dates

---

#### The rendering :

The application is divided into 2 parts
On the left, a sidebar with all the conversations.
On the right, the selected conversation with all the messages.

We can write a message, and it is added dynamically, and the date is updated
