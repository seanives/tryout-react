import React, {useEffect, useState} from 'react';
import Rocket from "./Rocket";
import LaunchCommands from "./LaunchCommands";
import RocketCommands from "./RocketCommands";

interface StarsProps {
    stars: JSX.Element[];
}

const Stars = ({stars}: StarsProps) => <div>{stars}</div>;

interface StarProps {
    positionX: number;
    launchState: LaunchCommands;
}

const Star = ({positionX, launchState}: StarProps) => {
    let starChoice: number = Math.random();
    if (starChoice <= .5) {
        return (
            <div style={launchState === LaunchCommands.TAKEOFF? {left: positionX, ...takeoffAnimation.stars} : {}} className="star-wrapper">
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
            <div style={launchState === LaunchCommands.TAKEOFF? {left: positionX, ...takeoffAnimation.stars} : {}} className="star-wrapper">
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

interface RocketLauncherProps {
    readonly command?: string;
}

const RocketLauncher = ({command = LaunchCommands.STANDBY}: RocketLauncherProps) => {
    const [stars, setStars] = useState(new Array<JSX.Element>());
    const [rocketState, setRocketState] = useState(RocketCommands.STANDBY);
    const [launchState, setLaunchState] = useState(LaunchCommands.STANDBY);
    switch (command) {
        case LaunchCommands.STANDBY:
            if (launchState === LaunchCommands.TAKEOFF) {
                console.log("Launch sequence error: Attempt to initiate STANDBY after TAKEOFF.");
            } else {
                if (launchState === LaunchCommands.IGNITION_START) {
                    setLaunchState(LaunchCommands.STANDBY);
                }
                if (rocketState === RocketCommands.IGNITION_START) {
                    setRocketState(RocketCommands.STANDBY);
                }
            }
            break;
        case LaunchCommands.IGNITION_START:
            if (launchState === LaunchCommands.STANDBY) {
                setLaunchState(LaunchCommands.IGNITION_START);
                setRocketState(RocketCommands.IGNITION_START);
            } else {
                if (launchState !== LaunchCommands.IGNITION_START) {
                    console.log("Launch sequence error: Attempt to initiate IGNITION after TAKEOFF.");
                }
            }
            break;
        case LaunchCommands.TAKEOFF:
            if (launchState === LaunchCommands.IGNITION_START) {
                setLaunchState(LaunchCommands.TAKEOFF);
            } else {
                if (launchState !== LaunchCommands.TAKEOFF) {
                    console.log("Launch sequence error: Attempt to initiate TAKEOFF before IGNITION_START.");
                }
            }
            break;
    }
    useEffect(() => {
        let starCount: number = stars.length;
        if (launchState === LaunchCommands.TAKEOFF) {
            let starLoop = setInterval(function () {
                let x = Math.floor(window.innerWidth * Math.random());
                let newStar = <Star key={starCount++} positionX={x} launchState={launchState}/>;
                setStars(starArray => [...starArray, newStar]);
                if (starCount > 200) {
                    clearInterval(starLoop);
                }
            }, 200);
            return () => clearInterval(starLoop)
        }
    }, [stars,launchState]);
    return (
        <div>
            <div id="rocket-animation">
                <div id="rocket-takeoff-wrapper" style={launchState === LaunchCommands.TAKEOFF? takeoffAnimation.rocket : {}}>
                    <Rocket command={rocketState}/>
                </div>
                <svg id="planet" viewBox="0 0 2560 445" style={launchState === LaunchCommands.TAKEOFF? takeoffAnimation.planet : {}}>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Content">
                            <path d="M0,445H2560V355.3C2211.6,133.3,1765,0,1278,0,792.9,0,347.8,132.3,0,352.8Z"
                                  fill="#ffa440"/>
                        </g>
                    </g>
                </svg>
                <div id="sky" style={launchState === LaunchCommands.TAKEOFF? takeoffAnimation.sky: {}}/>
            </div>
            <Stars stars={stars}/>
        </div>
    );
};

export default RocketLauncher;
