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
  }


  handleMessage(content) {
    let msgToServer = {content:content, currentUser:this.state.currentUser.name}
    this.socket.send(JSON.stringify(msgToServer));

    this.socket.onmessage = (event) => {
      console.log(event.data);
    let msgFromServer = JSON.parse(event.data);
    let messages = this.state.messages.concat(msgFromServer);
    this.setState({messages:messages});
    }
  }

  handleUserChange(user){
    this.setState({currentUser:{name:user}})
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} newMessage={this.newMessage}/>
        <ChatBar currentUser={this.state.currentUser.name}
        handleMessage={this.handleMessage.bind(this)} handleUserChange={this.handleUserChange.bind(this)}/>
      </div>
    );
  }
}
export default App;
