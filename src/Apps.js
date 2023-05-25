import logo from './logo.svg';
import './App.css';
import './normal.css';
import avatar from '../src/assets/logo.png';

function App() {
  return (
    <div className="App">
      <aside className='sidemenu'>
       <div className='side-menu-button'>
        <span>+</span>
          New Chat
       </div>
      </aside>
      <section className='Chatbox'>
        <div className='chat-log'>
          <div className='chat-message'>
            <div className="chat-message-center">
              <div className='avatar'>

              </div>
              <div className='message'>
                Hello you are you?
              </div>
            </div>
          </div>
          <div className='chat-message ares'>
            <div className="chat-message-center">
              <div className='avatar ares'>
              <img className='img' src={avatar} alt="ares-logo" width="30px"/>
              </div>
              <div className='message'>
                I'm a Artificial intelligence Bot. j'ai ete concu pour assiste l'homme dans ses taches journaliers en l'aidant a repondre a certains questions,. a debuger des programmes et bien d'autres
              </div>
            </div>
          </div>
          <div className='chat-messaged ares'>
            <div className='chat-message-center'>
              
            </div>
          </div>
        </div>
        <div className='chat-input-holder'>
          <textarea
          rows="1"
          className='chat-input-textarea' placeholder='Write your request here ...'
          ></textarea>

        </div>
      </section>
    </div>
  );
}

export default App;
