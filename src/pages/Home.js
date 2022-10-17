import React from "react";
import {v4 as uuidV4} from 'uuid'
const Home = () => {
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();

    }
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className = "homePageLogo" src="/code-sync.png" alt="hi" />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputbox" placeholder="ROOM ID" />
          <input type="text" className="inputbox" placeholder="USERNAME" />
          <button className="btn joinBtn">Join</button>
          <span className="createInfo">
            If you dont have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
             
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
            Built By Gautam
        </h4>
      </footer>
    </div>
  );
};

export default Home;
