import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
    { id:1, name: "Димыч"},
    { id:2, name: "Макс" },
    { id:3, name: "Витя" },
    { id:4, name: "Саша" },
    { id:5, name: "Валера" },
]
const messages = [
    {id:1, message:"Привет"},
    {id:2, message:"Как твои дела?"},
    {id:3, message:"Отлично"},
]
const posts = [
    {id:1, message:"Привет. Как твои дела", likesCount: 12  },
    {id:2, message:"Отлично", likesCount: 11},
    {id:3, message:"Какие планы?", likesCount: 15},
    {id:4, message:"Буду отдыхать", likesCount: 17},
    {id:5, message:"Понятно", likesCount: 19},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
