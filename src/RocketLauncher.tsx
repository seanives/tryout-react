import React, {useEffect, useState} from 'react';
import Rocket from "./Rocket";

const Stars = ({stars}: { stars: JSX.Element[] }) => <div>{stars}</div>;

const Star = ({positionX}: { positionX: number; }) => {
    let starChoice: number = Math.random();
    if (starChoice <= .5) {
        return (
            <div style={{left: positionX, ...takeoffAnimation.stars}} className="star-wrapper">
                <svg className="star star1" viewBox="0 0 54 54">
                    <g>
                        <g>
                            <rect y="18" width="54" height="18" fill="#fff"/>
                            <rect x="18" width="18" height="54" fill="#fff"/>
                        </g>
                    </g>
                </svg>
            </div>
        );
    } else {
        return (
            <div style={{left: positionX, ...takeoffAnimation.stars}} className="star-wrapper">
                <svg className="star star2" viewBox="0 0 18 18">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Content">
                            <rect width="18" height="18" fill="#fff"/>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
};

const takeoffAnimation = {
    stars: {
        animation: "20s moveStars linear infinite"
    },
    sky: {
        animation: "8s earthLeave 5s forwards"
    },
    planet: {
        animation: "5s earthLeave 2s forwards"
    },
    rocket: {
        animation: "10s rocketTakeOff 2s forwards cubic-bezier(.97,.37,.26,.3)"
    },
};

const RocketLauncher = () => {
    const [stars, setStars] = useState(new Array<JSX.Element>());
    useEffect(() => {
        let starCount: number = stars.length;
        let starLoop = setInterval(function () {
            let x = Math.floor(window.innerWidth * Math.random());
            let newStar = <Star key={starCount++} positionX={x}/>;
            setStars(starArray => [...starArray, newStar]);
            if (starCount > 200) {
                clearInterval(starLoop);
            }
        }, 200);
        return () => clearInterval(starLoop);
    }, [stars]);
    return (
        <div>
            <div id="rocket-animation">
                <div id="rocket-takeoff-wrapper" style={takeoffAnimation.rocket}>
                    <Rocket/>
                </div>
                <svg id="planet" viewBox="0 0 2560 445" style={takeoffAnimation.planet}>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Content">
                            <path d="M0,445H2560V355.3C2211.6,133.3,1765,0,1278,0,792.9,0,347.8,132.3,0,352.8Z"
                                  fill="#ffa440"/>
                        </g>
                    </g>
                </svg>
                <div id="sky" style={takeoffAnimation.sky}/>
            </div>
            <Stars stars={stars}/>
        </div>
    );
};

export default RocketLauncher;
