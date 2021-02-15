import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

const Friends = (props) =>{
    const [editToggle, setEditToggle]= useState(false);
    const [editFriends,setEditFriends] = useState({
        name:props.friend.name,
        age:props.friend.age,
        email:props.friend.email,
    })

    const deleteFriend = (e) =>{
        axiosWithAuth()
        .delete(`/friends/${props.friend.id}`)
        .then((res) =>{
            props.setFriendsList(res.data)
        })
        .catch((err) => console.log(err))
    }

    const editChangess = (e) =>{
        e.preventDefault();
        setEditFriends({
            ...editFriends,
            [e.target.name]:e.target.value,
        })
    }

    const editFriends = (e) =>{
        e.preventDefault()
        setEditToggle(true)
    }

    const submitEdit = (e) =>{
        axiosWithAuth()
        .put(`/api/friends/${props.friend.id}`,setEditFriends)
        .then((res) =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }

    const cancelEdit = (e) =>{
        setEditToggle(false);
    }
    return(
        <section>
            {editToggle ? (
                <div className="friends-section">
                    <form>
                        <label>Name:&nbsp;</label>
                        <input
                        type="text"
                        name="name"
                        value={setEditFriends.name}
                        onChange={editChanges}
                        />
                        <label>Age:&nbsp;</label>
                        <input
                        type="text"
                        name="age"
                        value={setEditFriends.age}
                        onChange={editChanges}
                        />
                        <label>Email:&nbsp;</label>
                        <input
                        type="text"
                        name="email"
                        value={setEditFriends.email}
                        onChange={editChanges}
                        />
                        <button onClick={cancelEdit}>Cancel Edit</button>
                        <button onClick={submitEdit}>Submit Edit</button>
                    </form>
                </div>
            ) : (
                <div className ="new-friends">
                    <p>Name:&nbsp;{props.friend.name}</p>
                    <p>Age:&nbsp;{props.friend.age}</p>
                    <p>Email:&nbsp;{props.friend.email}</p>
                    <button onClick={deleteFriend}>Delete</button>
                    <button onClick={editFriends}>Edit</button>


                </div>
            )}
        </section>
    )
}
export default Friends;