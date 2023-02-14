const ChatMessage = ({ id, name, msgText, msgNum }) =>
        (
            <tr id={id}>
                <td>{msgNum}</td>
                <td>{name}</td>
                <td>{msgText}</td>
            </tr>
        )

export default ChatMessage