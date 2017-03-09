import React, {Component} from 'react';
const str = /(https?:\/\/.*\.(?:png|jpg|gif))/i


class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let test = str.test(this.props.messagesInput)
    return (
        this.props.type === "incomingNotification" ?
          <div className="message system">
            {this.props.messagesInput}
          </div>
        :
          <div className="message">
            <span className="message-username" style={this.props.color}>{this.props.username}</span>
              {test ?
                <img className="chat-image" src={this.props.messagesInput}/>
              :
                <span className="message-content">{this.props.messagesInput}</span>
              }
          </div>
    );
  }
}
export default Message;


