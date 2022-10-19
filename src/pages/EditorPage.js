import React from "react";
import Client from "../Components/Client";
const EditorPage = () => {
    const [clients , setClients] = React.useState([
        {socketId:1 , username : 'Rakesh k '},
        {socketId:2 , username : 'RJo R '}

    
    ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img src="/code-sync.png" className="logoImage" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {
                clients.map((clients) => (
                    <Client key={clients.socketId} username={clients.username}/>
                ))
            }
          </div>
        </div>
      </div>
      <div className="editorwrap"></div>
    </div>
  );
};

export default EditorPage;
