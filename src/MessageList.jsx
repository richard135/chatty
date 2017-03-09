import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <main className="messages">
        {this.props.messages.map((msg, index)=> {
          console.log(msg)
          return <Message username={msg.currentUser} messagesInput={msg.content} key={index} type={msg.type}/>
        })}
      </main>
    );
  }
}
export default MessageList;



