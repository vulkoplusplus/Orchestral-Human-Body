import React, { useState, useRef, useEffect } from "react";
import "./Demo.css";
import play from "../assets/play.svg";
import stop from "../assets/stop.svg";
import melody0 from "../assets/sound/melody0.wav";
import melody1 from "../assets/sound/melody1.wav";
import melody2 from "../assets/sound/melody2.wav";

const Demo = () => {
  const [isDemo1Playing, setIsDemo1Playing] = useState(false);
  const [isDemo2Playing, setIsDemo2Playing] = useState(false);
  const [isDemo3Playing, setIsDemo3Playing] = useState(false);

  const musicHandler = (event) => {
    const { id, action } = event;
    console.log(id, action, isDemo1Playing);

    // Stop all audio elements
    const stopAll = () => {
      [audioRef1, audioRef2, audioRef3].forEach((ref) => {
        if (ref.current) {
          console.log(ref.current);
          ref.current.pause();
          ref.current.currentTime = 0;
        }
      });
      setIsDemo1Playing(false);
      setIsDemo2Playing(false);
      setIsDemo3Playing(false);
    };

    if (action === "stop") {
      stopAll();
      return;
    }

    switch (id) {
      case "demo1":
        stopAll();
        audioRef1.current.play();
        setIsDemo1Playing(true);
        break;
      case "demo2":
        stopAll();
        audioRef2.current.play();
        setIsDemo2Playing(true);
        break;
      case "demo3":
        stopAll();
        audioRef3.current.play();
        setIsDemo3Playing(true);
        break;
    }
  };

  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  useEffect(() => {
    // Create and set the audio elements to the refs
    audioRef1.current = new Audio(melody0);
    audioRef2.current = new Audio(melody1);
    audioRef3.current = new Audio(melody2);

    // Define the function to handle the end of the audio
    const handleAudioEnd = (id) => {
      // Logic to handle the end of the audio
      console.log(`${id} finished playing`);
      // Set the appropriate playing state to false
      if (id === "demo1") setIsDemo1Playing(false);
      if (id === "demo2") setIsDemo2Playing(false);
      if (id === "demo3") setIsDemo3Playing(false);
    };

    // Attach 'ended' event listeners to the audio elements
    const refs = [audioRef1, audioRef2, audioRef3];
    refs.forEach((ref, index) => {
      ref.current.addEventListener("ended", () =>
        handleAudioEnd(`demo${index + 1}`)
      );
    });

    // Cleanup function to remove the event listeners
    return () => {
      refs.forEach((ref) => {
        ref.current.removeEventListener("ended", () =>
          handleAudioEnd(`demo${index + 1}`)
        );
      });
    };
  }, []);
  return (
    <div className="demo-container" id="demo-container">
      <div className="demo demo1">
        <img
          onClick={() => {
            musicHandler({
              id: "demo1",
              action: isDemo1Playing ? "stop" : "start",
            });
          }}
          src={isDemo1Playing ? stop : play}
          alt="play-button"
        />
        <p>A Six-Month Heartbeat Journey Through COVID</p>
      </div>
      <div className="demo demo2">
        <img
          onClick={() => {
            musicHandler({
              id: "demo2",
              action: isDemo2Playing ? "stop" : "start",
            });
          }}
          src={isDemo2Playing ? stop : play}
          alt="play-button"
        />
        <p>Lorem ipsum dolor sit</p>
      </div>
      <div className="demo demo3">
        <img
          onClick={() => {
            musicHandler({
              id: "demo3",
              action: isDemo3Playing ? "stop" : "start",
            });
          }}
          src={isDemo3Playing ? stop : play}
          alt="play-button"
        />
        <p>Lorem ipsum dolor sit </p>
      </div>
    </div>
  );
};

export default Demo;
