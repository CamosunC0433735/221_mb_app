import NewMessageForm from '../components/NewMessageForm'
import MessageTable from '../components/MessageTable'
import { useState } from 'react';


const MessageBoard = ({ }) => {

    const [myMessages, setMessages] = useState(
        [
            { id: 0, name: "David", messageTxt: "Hello world" },
            { id: 1, name: "Paul", messageTxt: "Hi David" },
            { id: 2, name: "George", messageTxt: "I love writing messages to my imaginary friends" }
        ]);

    useState()

    const addNewMessage = (values) => {
        values.id = myMessages.length;
        console.log(values);
        setMessages([values, ...myMessages]);
    }

    return(
        <>
            <NewMessageForm addNewMessage={addNewMessage}/>
            <MessageTable myMessages={myMessages} />
        </>
    );
}

export default MessageBoard