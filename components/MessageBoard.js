import NewMessageForm from '../components/NewMessageForm'
import MessageTable from '../components/MessageTable'
import LoginForm from './LoginForm';
import jwt_decode from 'jwt-decode';
import { useState, useRef } from 'react';
import axios from 'axios';



const MessageBoard = ({ jsonData }) => {

    const usernameRef = useRef(null);
    const [myMessages, setMessages] = useState(jsonData);
    const [userAuthenticated, setUserAuthenticated] = useState(false);

    useState()

    const addNewMessage = async (values) => {

        values.name = usernameRef.current;

        // configuration for axios, use bearer token auth
        const axiosReqConfig = {
            url: `${process.env.NEXT_PUBLIC_HOST}/api/messages`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            },
            data: values
        }

        try {
            const { data } = await axios(axiosReqConfig);
            setMessages([data, ...myMessages]);
        } catch (e) { console.error(e) }
    }

    const logInUser = async (values) => {
        try {
            const { data } = await axios.post('http://10.21.75.113:3004/api/login', values);

            sessionStorage.setItem('token', data.token);
            const decodedToken = jwt_decode(data.token);
            usernameRef.current = decodedToken.username;

            setUserAuthenticated(true); // unsure if this is correct
            // could this pass the try{}catch{}, but fail the login?

        } catch (e) { console.error(e) }
    }

    return (
        <>
            {userAuthenticated ? 
                <>
                    <NewMessageForm addNewMessage={addNewMessage} /> 
                    <MessageTable myMessages={myMessages} />

                </>
                : <LoginForm logInUser={logInUser} />}
        </>
    );
}

export default MessageBoard;