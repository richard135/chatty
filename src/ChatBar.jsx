import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }



  handleChatInput(event) {
    if(event.key === "Enter") {
      this.props.handleMessage(event.target.value);
      document.querySelector(".chatbar-message").value = "";
    }
  }

  handleUserInput(event){
    if(event.key === "Enter") {
      this.props.handleUserChange(event.target.value);
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username"placeholder="Your Name (Optional)" defaultValue={this.props.currentUser}
        onKeyPress ={this.handleUserInput.bind(this)}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER"
        onKeyPress ={this.handleChatInput.bind(this)}/>
      </footer>
    );
  }
}
export default ChatBar;
