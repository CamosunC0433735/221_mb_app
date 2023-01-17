const ChatMessage = ({ id, name, messageTxt, msgNum }) =>
        (
            <tr id={id}>
                <td>{msgNum}</td>
                <td>{name}</td>
                <td>{messageTxt}</td>
            </tr>
        )

export default ChatMessage