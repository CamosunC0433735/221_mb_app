import NewMessageForm from '../components/NewMessageForm'
import MessageTable from '../components/MessageTable'
import { useState } from 'react';
import axios from 'axios';


const MessageBoard = ({ jsonData }) => {

    const [myMessages, setMessages] = useState(jsonData);

    useState()

    const addNewMessage = async (values) => {

        let msg = {"name": values.name, "messageTxt": values.messageTxt};
        console.log(msg);

        try{
            axios.post('http://10.21.75.113:3004/api/messages', msg)
            .then(
                function(res){
                    console.log(res);
                    setMessages([values, ...myMessages]);
                }).catch(function (error) {
                    console.log(error);
                });

        } catch(err){

        }
        
    }

    return(
        <>
            <NewMessageForm addNewMessage={addNewMessage}/>
            <MessageTable myMessages={myMessages} />
        </>
    );
}

export default MessageBoard