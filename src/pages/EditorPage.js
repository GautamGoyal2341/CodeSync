import React, { useEffect, useRef } from "react";
import ACTIONS from "../Actions";
import Client from "../Components/Client";
import Editor from "../Components/Editor";
import { initSocket } from "../socket";
import { useLocation } from "react-router-dom";
import { useNavigate, Navigate, useParams} from "react-router-dom";
import toast from "react-hot-toast";

const EditorPage = () => {
  const [clients, setClients] = React.useState([]);
  const { roomId } = useParams();
  const reactNavigator = useNavigate();

  const socketRef = useRef(null);

  const location = useLocation();


  useEffect(() => {
    const init = async () => {
        socketRef.current = await initSocket();
        socketRef.current.on('connect_error', (err) => handleErrors(err));
        socketRef.current.on('connect_failed', (err) => handleErrors(err));

        function handleErrors(e) {
            console.log('socket error', e);
            toast.error('Socket connection failed, try again later.');
            reactNavigator('/');
        }

        socketRef.current.emit(ACTIONS.JOIN, {
            roomId,
            username: location.state?.username,
        });

        // Listening for joined event
        socketRef.current.on(
          ACTIONS.JOINED,
          ({ clients, username, socketId }) => {
              if (username !== location.state?.username) {
                  toast.success(`${username} joined the room.`);
                  console.log(`${username} joined`);
              }
              setClients(clients);
              // socketRef.current.emit(ACTIONS.SYNC_CODE, {
              //     // code: codeRef.current,
              //     socketId,
              // });
          }
      );
       

        // Listening for disconnected
        socketRef.current.on(
            ACTIONS.DISCONNECTED,
            ({ socketId, username }) => {
                toast.success(`${username} left the room.`);
                setClients((prev) => {
                    return prev.filter(
                        (client) => client.socketId !== socketId
                    );
                });
            }
        );
    };
    init();
    // return () => {
    //     // socketRef.current.disconnect();
    //     // socketRef.current.off(ACTIONS.JOINED);
    //     // socketRef.current.off(ACTIONS.DISCONNECTED);
    // };
}, []);

  if (!location.state) {
    return <Navigate to="/" />;
  }
  return (
    <div className="mainWrap">
        <div className="aside">
            <div className="asideInner">
                <div className="logo">
                    <img
                        className="logoImage"
                        src="/code-sync.png"
                        alt="logo"
                    />
                </div>
                <h3>Connected</h3>
                <div className="clientsList">
                    {clients.map((client) => (
                        <Client
                            key={client.socketId}
                            username={client.username}
                        />
                    ))}
                </div>
            </div>
            <button className="btn copyBtn" >
                Copy ROOM ID
            </button>
            <button className="btn leaveBtn" >
                Leave
            </button>
        </div>
        <div className="editorWrap">
            <Editor
              socketRef={socketRef}
              roomId = {roomId}
            
            />
        </div>
    </div>
);
};

export default EditorPage;
