import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.closeSocket = () => {};
    this.socket = new WebSocket("ws://localhost:3001");

    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log("Got connected to server.");
    }
    this.socket.onmessage = (event) => {
      let data = JSON.parse(event.data);
      switch(data.type){
        case "incomingMessage":
          let messages = this.state.messages.concat(data);
          this.setState({messages:messages});
          break;
        case "incomingNotification":
          let notification = this.state.messages.concat(data);
          this.setState({messages:notification});
          break;
        default:
      }
    }
  }


  handleMessage(content) {
    let msgToServer = {
      content:content,
      currentUser:this.state.currentUser.name,
      type: "postMessage"
    }
    this.socket.send(JSON.stringify(msgToServer));
  }

  handleUserChange(user){
    let userChangeToServer = {
      type:"postNotification",
      content:`${this.state.currentUser.name} to ${user}`,
      user: user
    }
    this.setState({currentUser:{name:user}});
    this.socket.send(JSON.stringify(userChangeToServer));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name}
        handleMessage={this.handleMessage.bind(this)} handleUserChange={this.handleUserChange.bind(this)}/>
      </div>
    );
  }
}
export default App;
