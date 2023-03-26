import { useState } from "react"

const CreateNewFriend = () => {
    const [ contact, setContact] = useState("");

    return (
        <>
            <h1>Add a new contact!</h1>
            <form>
                <input type="text" name="contact" value={contact}  onChange={e => setContact(e.target.value)} />
                <input type="submit" name="submit" value="Submit new contact" />
            </form>
        </>
    )
}

export default CreateNewFriend