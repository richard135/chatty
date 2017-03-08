import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
    }, 3000);
  }

  handleMessage(content) {
    let messages = this.state.messages.concat({username: this.state.currentUser.name, content: content});
    this.setState({messages:messages})
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} newMessage={this.newMessage}/>
        <ChatBar currentUser={this.state.currentUser.name} handleMessage={this.handleMessage.bind(this)}/>
      </div>
    );
  }
}
export default App;
