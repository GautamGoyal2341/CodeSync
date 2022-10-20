import React from "react";
import Client from "../Components/Client";
import Editor from "../Components/Editor";
const EditorPage = () => {
  const [clients, setClients] = React.useState([
    { socketId: 1, username: "Rakesh k " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },
    { socketId: 2, username: "RJo R " },

  ]);
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/code-sync.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy ROOM ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
      <Editor/>
      </div>
    </div>
  );
};

export default EditorPage;
