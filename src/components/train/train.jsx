import "./train.css";
import { useEffect, useState, useRef } from "react";

function Train({ start, onDone }) {
  const [phase, setPhase] = useState("hidden");

  const comeSound = useRef(null);
  const stopSound = useRef(null);
  const goSound = useRef(null);

  // ✅ Init sound sekali
  useEffect(() => {
    comeSound.current = new Audio("/assets/sound/tran-way.mp3");
    stopSound.current = new Audio("/assets/sound/kereta-stop.mp3");
    goSound.current = new Audio("/assets/sound/kereta-go.mp3"); // 🔈 Tambah suara pergi
  }, []);

  useEffect(() => {
    let comeTimer;
    let goTimer;

    if (start) {
      if (phase === "stay") {
        // 🔁 Kalau kereta di tengah → keluar lalu masuk lagi
        setPhase("go");
        goSound.current.currentTime = 0;
        goSound.current.play(); // 🔊 Putar suara saat pergi

        goTimer = setTimeout(() => {
          setPhase("come");
          comeSound.current.currentTime = 0;
          comeSound.current.play();

          comeTimer = setTimeout(() => {
            setPhase("stay");
            stopSound.current.currentTime = 0;
            stopSound.current.play();
            comeSound.current.pause();
            onDone();
          }, 2500);
        }, 2000);
      } else {
        // ▶ Pertama kali: langsung masuk
        setPhase("come");
        comeSound.current.currentTime = 0;
        comeSound.current.play();

        comeTimer = setTimeout(() => {
          setPhase("stay");
          stopSound.current.currentTime = 0;
          stopSound.current.play();
          comeSound.current.pause();
          onDone();
        }, 2500);
      }
    }

    return () => {
      clearTimeout(comeTimer);
      clearTimeout(goTimer);
    };
  }, [start]);

  return (
    <div className="overflow-hidden h-40">
      <div
        className={`flex w-full h-40 justify-center items-center ${
          phase === "come"
            ? "train_come"
            : phase === "go"
            ? "train_go"
            : phase === "stay"
            ? "train_stay"
            : "train_hidden"
        }`}
      >
        <div className="train_base"></div>
        <div className="window_train"></div>
        <div className="road_train"></div>
        <div className="ventilation_train"></div>
        <div className="list_train"></div>
        <div className="train_conection_1"></div>
        <div className="railcar_1">
          <div className="railcr_body"></div>
          <div className="window_railcar"></div>
          <div className="road_railcar"></div>
          <div className="ventilation_railcar"></div>
          <div className="list_railcar"></div>
        </div>
      </div>
    </div>
  );
}

export default Train;
