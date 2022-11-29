import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created a new room");
    // console.log(id);
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("ROOM ID & username is required!");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <div className="formLogo">
          <img className="logo" src="/logo.png" alt="Realtime Code Editor" />
          <div className="logoInner">
            <h2>Real-Time</h2>
            <span>Code Editor</span>
          </div>
        </div>
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="inputBox"
            placeholder="ROOM ID"
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create&nbsp;
            <a onClick={createNewRoom} href="" className="createNewBtn">
              New Room
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          Built with 🚀 by <a href="https://github.com/ronakptl996">RNK PTL</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
