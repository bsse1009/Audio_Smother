import React, { useState, useContext, useEffect } from "react";
import { FileContext } from './fileContext';


var audioPlayObject;
const AudioPlay = () => {
    const [buttonName, setButtonName] = useState("Play");
    const { fileURL, setFileURL } = useContext(FileContext);

    useEffect(() => {
        if (audioPlayObject) {
            audioPlayObject.pause();
            audioPlayObject = null;
            setButtonName("Play");
        }
        if (fileURL) {
            audioPlayObject = new Audio(fileURL);
            audioPlayObject.onended = () => {
                setButtonName("Play");
            };
        }
    }, [fileURL]);

    const handleClick = () => {
        if (buttonName === "Play") {
            audioPlayObject.play();
            setButtonName("Pause");
        } else {
            audioPlayObject.pause();
            setButtonName("Play");
        }
    };

    return (
        <div className='upload-audio'>
            <i
                style={{ color: '#531A65' }}
                className='material-icons audio-icon'>
                library_music
            </i>
            <button className='upload-btn' onClick={handleClick}>{buttonName}
            </button>
        </div>
    );
};

export default AudioPlay;