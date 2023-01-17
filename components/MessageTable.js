import Table from 'react-bootstrap/Table'
import ChatMessage from '../components/ChatMessage'

const MessageTable = ( {myMessages} ) => {


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {myMessages.map(msg => <ChatMessage key={msg.id} {...msg} />)}
            </tbody>
        </Table>
    );
}

export default MessageTable