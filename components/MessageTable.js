const MessageTable = () => {

    const { Table } = ReactBootstrap;
    const myMessages = [
        { id: 0, name: "David", messageTxt: "Hello world" },
        { id: 1, name: "Paul", messageTxt: "Hi David" },
        { id: 2, name: "George", messageTxt: "I love writing messages to my imaginary friends" }];

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