import { NavLink, Outlet, Route, Routes } from "react-router-dom"
import FriendsList from "../../components/Friends/FriendsList"
import FriendTab from "../../components/Friends/FriendTab"
import Header from "../../components/Header/Header"

const FriendsPage = () => {
    return (
        <>
            <Header/>
            <FriendTab/>
        </>
    )
}

export default FriendsPage