const ChatMessage = ({ id, name, messageTxt }) =>
        (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{messageTxt}</td>
            </tr>
        )

export default ChatMessage