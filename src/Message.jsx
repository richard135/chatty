import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        this.props.type === "incomingNotification" ?
          <div className="message system">
            {this.props.messagesInput}
          </div>
        :
          <div className="message">
            <span className="message-username">{this.props.username}</span>
            <span className="message-content">{this.props.messagesInput}</span>
          </div>
    );
  }
}
export default Message;

