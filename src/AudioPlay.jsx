import React, { useState, useEffect } from "react";

var audioPlayObject;
const AudioPlay = () => {
  const [buttonName, setButtonName] = useState("Play");

  const [audio, setAudio] = useState();

  useEffect(() => {
    if (audioPlayObject) {
      audioPlayObject.pause();
      audioPlayObject = null;
      setButtonName("Play");
    }
    if (audio) {
      audioPlayObject = new Audio(audio);
      audioPlayObject.onended = () => {
        setButtonName("Play");
      };
    }
  }, [audio]);

  const handleClick = () => {
    if (buttonName === "Play") {
      audioPlayObject.play();
      setButtonName("Pause");
    } else {
      audioPlayObject.pause();
      setButtonName("Play");
    }
  };

  const addFile = (e) => {
    if (e.target.files[0]) {
      setAudio(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <input type="file" onChange={addFile} />
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
};

export default AudioPlay;