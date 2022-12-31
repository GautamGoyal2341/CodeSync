import React from "react";
import { v4 as uuidV4 } from "uuid";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
  const [roomId, setRommId] = React.useState("");
  const [username, setUserName] = React.useState("");
  const createNewRoom = (e) => {
    e.preventDefault();

    const id = uuidV4();
    setRommId(id);
    toast.success('Created a new room');
  };

   const joinRoom = () => {
    if(!roomId || !username)
    {
        toast.error("ROOM ID & USERNAME IS REQUIRED");
        return;
    }

    navigate(`/editor/${roomId}`,{
        state:{
            username
        },
    })
      


   }

   const handelInputEnter = (e) => {
          if(e.code === 'Enter')
          {
            joinRoom();
          }
   }

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/code-sync.png" alt="hi" />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputbox"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => setRommId(e.target.value)}
            onKeyUp = {handelInputEnter}
          />
          <input
            type="text"
            className="inputbox"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            onKeyUp = {handelInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a
                            onClick={createNewRoom}
                        
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
        </div>
      </div>
      <footer>
        {/* <h4>Built By Gautam</h4> */}
      </footer>
    </div>
  );
};

export default Home;
