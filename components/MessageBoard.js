import NewMessageForm from '../components/NewMessageForm'
import MessageTable from '../components/MessageTable'
import { useState } from 'react';
import axios from 'axios';


const MessageBoard = ({ jsonData }) => {

    const [myMessages, setMessages] = useState(jsonData);

    useState()

    const addNewMessage = async (values) => {
        try {
            const { data } = await axios.post('http://10.21.75.113:3004/api/messages', values);
            setMessages([data, ...myMessages]);
        } catch(e) { console.error(e) }
    }

    return(
        <>
            <NewMessageForm addNewMessage={addNewMessage}/>
            <MessageTable myMessages={myMessages} />
        </>
    );
}

export default MessageBoard