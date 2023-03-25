import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import users from './data/users.json'
import shared_bills from './data/shared_bills.json'
import friends from './data/friends.json'
import friends_group from './data/friend_group.json'
import ExpensesPage from './pages/Expenses/ExpensesPage';
import FriendsPage from './pages/Friends/FriendsPage';
import ErrorPage from './pages/ErrorPage';
import BalancePage from './pages/BalancePage';
import SignInPage from './pages/SignInPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/signIn",
    element: <SignInPage/>
  },
  {
    path: "/expenses",
    element: <ExpensesPage/>
  },
  {
    path: "/friends",
    element: <FriendsPage/>
  },
  {
    path: "/balance",
    element: <BalancePage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

