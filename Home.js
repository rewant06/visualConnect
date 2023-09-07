import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomID, setRoomID] = useState();
  const navigate = useNavigate();
  const handleJoin = () => {
    const p = document.getElementById("userinput").value;
    if(p ==='Hellobro'){
      navigate(`/room/${roomID}`);
    }else{
      document.getElementById("output").innerHTML ='Please Enter Valid Room Id'
    }
  };
  
  return (
      <div class="card text-center m-5" >
        <div class="card-header">VisualLink</div>
        <div class="card-body">
          <h5 class="card-title">RoomCode Access</h5>
          <input
            placeholder="Room Identifier"
            type="text"
            id="userinput"
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
          ></input>
<br></br>
          <button class="btn btn-primary my-3" onClick={handleJoin}>
          Enter Room
          </button>
          <p id="output"></p>
        </div>
       
      </div>
  );
}

export default Home;
