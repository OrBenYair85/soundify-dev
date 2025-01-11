import { useState,useEffect } from "react"

export function Player(song) {


    const [currentTime, setCurrentTime] = useState(0)
    const [totalDuration, setTotalDuration] = useState(240)

    function setTime(ev){
        const time = Number(ev.target.value);
        setCurrentTime(time);
    }

    return (
    <section className="player-container">
        <section className="player-btn">
            <button className="prev-button">
                <img src="./src/assets/Soundify-files /Shafle.svg" />
            </button>
            
            <button className="shaf-button">
                <img src="./src/assets/Soundify-files /PrevSong.svg" />
            </button>

            <button className="play-button">
                PlayButton
            </button>

            <button className="next-button">
                <img src="./src/assets/Soundify-files /NextSong.svg" />
            </button>

            <button className="rep-button">
                <img src="./src/assets/Soundify-files /Repeat.svg" />
            </button>
            </section>
       

        <section className="time-line">
            <div>
                <input
                    type="range"
                    min={0}
                    max={totalDuration}
                    value={currentTime}
                    onChange={setTime}
                 />   
            </div>
        

        </section>
    </section>

)
}