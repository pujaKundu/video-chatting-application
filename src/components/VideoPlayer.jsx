import React, { useContext, useRef, useEffect } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const myVideoRef = useRef();
  const userVideoRef = useRef();

  useEffect(() => {
    if (stream && myVideoRef.current) {
      myVideoRef.current.srcObject = stream;
    }
    if (callAccepted && call.stream && userVideoRef.current) {
      userVideoRef.current.srcObject = call.stream;
    }
  }, [stream, callAccepted, call.stream]);

  return (
    <div className="grid lg:grid-cols-2">
      {/* my video */}
      {stream && (
        <div className="bg-slate-100 rounded border border-slate-200 mx-5 my-10">
          <p>{name || "Name"}</p>
          <video playsInline muted ref={myVideoRef} autoPlay></video>
        </div>
      )}
      {/* user video */}
      {callAccepted && !callEnded && (
        <div className="bg-slate-100 rounded border border-slate-200 mx-5 my-10">
          <p>{call.name || "Name"}</p>
          <video playsInline muted ref={userVideoRef} autoPlay></video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
