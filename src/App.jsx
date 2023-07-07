import { useState } from 'react'

import './App.css'

function App() {

  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(25);
  const handleToggle = () => {
    setIsLiked(!isLiked);
    isLiked ? setCount(count-1) : !isLiked ? setCount(count+1) : setCount(count);
  };
  

  return (
    <div className="post">
            
            <img
              className="noselect"
              src="https://avatars.dicebear.com/api/adventurer/mkmksdf.svg"
            />
            <div className="right-content">
              <div className="user-details">
                <span className="profile-name">Adnan Yangilic</span>
                <span className="profile-username">@AdnanYangilic</span>
                <span className="post-timeby">• 2h</span>
              </div>

              <div className="post-content-text">
                <p>
                  Hello from Istanbul
                </p>
              </div>

              <div className="content-buttons noselect">
                <i
                  className="icon-button icon-xlarge highlight-blue material-symbols-outlined icon-not-filled"
                  >chat_bubble</i>
                <i
                  className="icon-button icon-xlarge highlight-green material-symbols-outlined icon-not-filled"
                  >autorenew</i>
                <i
                 onClick={handleToggle}
                  className={`icon-button icon-xlarge like highlight-red material-symbols-outlined icon-not-filled ${isLiked ? "liked" : ""}`}
                  >favorite <span className="mininumber">{count}</span></i>
                <i
                  className="icon-button icon-xlarge highlight-blue material-symbols-outlined icon-not-filled"
                  >upload</i>
              </div>
            </div>
          </div>
  )
}

export default App
