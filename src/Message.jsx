import React, {Component} from 'react';
const str = /(https?:\/\/.*\.(?:png|jpg|gif))/i

class Message extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let test = this.props.messagesInput.match(str)
    return (
        this.props.type === "incomingNotification" ?
          <div className="message system">
            {this.props.messagesInput}
          </div>
        :
          <div className="message">
            <span className="message-username" style={this.props.color}>{this.props.username}</span>
              {test ?
                <span className="message-content">
                  <p>{this.props.messagesInput.replace(str,"")}</p>
                  <img className="chat-image" src={test[0]}/>
                </span>
              :
                <span className="message-content">{this.props.messagesInput}</span>
              }
          </div>
    );
  }
}
export default Message;


