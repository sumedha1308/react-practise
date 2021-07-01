/* eslint-disable no-unused-vars */
// Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression.
import React from 'react';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {/* {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>} */}
            {unreadMessages.length > 0 ? (
                <h2>You have {unreadMessages.length} unread messages.</h2>
            ) : (
                <h2>You have no messages</h2>
            )}
        </div>
    );
}
class Mailbox1 extends React.Component {
    render() {
        const unreadMessages = this.props.unreadMessages;
        return (
            <div>
                <h1>Hello!</h1>
                {/* {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>} */}
                {unreadMessages.length > 0 ? (
                    <h2>You have {unreadMessages.length} unread messages.</h2>
                ) : (
                    <h2>You have no messages</h2>
                )}
            </div>
        );
    }
}
export default Mailbox1;
