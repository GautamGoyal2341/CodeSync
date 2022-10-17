import React from "react";

const Home = () => {
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
            <a href="" className="createNewBtn">
             
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
