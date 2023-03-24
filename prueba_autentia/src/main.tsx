import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import users from './data/users.json'
import shared_bills from './data/shared_bills.json'
import friends from './data/friends.json'
import friends_group from './data/friend_group.json'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

localStorage.setItem('users', JSON.stringify(users))