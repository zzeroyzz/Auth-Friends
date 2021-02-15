import React, {useState, useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import NewFriendForm from "./NewFriendForm";
import Friends from "./Friends"
const FriendsPage = ({refresh,setRefresh}) =>{
    const [friendsList, setFriendsList]= useState([]);
    const [friend, setFriend] =useState({ name:"",age:"",email:""})

    useEffect(() =>{
        getFriendsList()
    },[])

    const getFriendsList = () =>{
        axiosWithAuth()
        .get("/api/friends")
        .then((res) =>{
            setFriendsList(res.data)
        })
        .catch((err) => console.log(err))
    }

    const handleChanges = (e) =>{
        setFriend({
            ...friend,
            [e.target.name]:e.target.value,
        })
    }

    const onSubmit = (e) =>{
        axiosWithAuth()
        .post("/api/friends",friend)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) => console.log(err));
        setFriend({ name:"",age:"",email:""})
        setRefresh(!refresh)
    }

    return(
        <div className="friends-list">
            <section>
            <NewFriendForm
            handleChanges={handleChanges}
            submit={onSubmit}
            friend={friend}
            />
            </section>
            <section>
                {friendsList.map((friend) =>{
                    return <Friends key={friend.id} friend={friend} setFriendsList={setFriendsList} />
                })}
            </section>
        </div>
    )
}
export default FriendsPage;