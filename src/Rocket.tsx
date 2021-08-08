import React from 'react';
import RocketCommands from "./RocketCommands";

const ignitionAnimation = {
    thruster: {
        animation: "500ms fadein 1s forwards"
    },
    flames: {
        animation: "flicker 600ms ease-in infinite"
    },
};

interface RocketProps {
    command: RocketCommands;
}

const Rocket = ({command}: RocketProps) => (
        <div id="rocket-wrapper">
            <svg id="rocket" viewBox="0 0 251.5 396">
                <path id="Right_Fin" data-name="Right Fin" d="M1328.2,674.1s78.2,0,78.2,31.3S1422,846,1422,846s-46.9-156.3-93.8-125S1312.6,689.7,1328.2,674.1Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
                <path id="Left_Fin" data-name="Left Fin" d="M1264.2,674.1s-78.1,0-78.1,31.3S1170.5,846,1170.5,846s46.9-156.3,93.7-125S1279.9,689.7,1264.2,674.1Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
                <g id="Base_Rocket" data-name="Base RocketLauncher">
                    <path d="M1339.7,792c45.4-104.1,92.6-274.3-43.8-342-136.5,67.7-89.2,237.9-43.8,342Z" transform="translate(-1170.5 -450)" fill="#578476"/>
                </g>
                <g id="Shaded_Rocket" data-name="Shaded RocketLauncher">
                    <path d="M1296,450h-.2c-136.3,67.7-89.1,237.9-43.7,342H1296Z" transform="translate(-1170.5 -450)" fill="#04665a"/>
                </g>
                <g id="Bottom_Ring" data-name="Bottom Ring">
                    <path d="M1227.7,727.9c2.5,7.6,5.1,15.2,7.8,22.6a334.4,334.4,0,0,0,120.8,0c2.7-7.3,5.3-14.9,7.8-22.6-18.6,6.3-42.3,10.1-68.1,10.1S1246.3,734.2,1227.7,727.9Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
                </g>
                <g id="Top_Ring" data-name="Top Ring">
                    <path d="M1296,498c19,0,36.2-4.9,49.1-12.9a156.4,156.4,0,0,0-12.5-11.8c-8.8,7.8-22,12.7-36.6,12.7s-27.9-5-36.7-12.8a156.4,156.4,0,0,0-12.5,11.8C1259.7,493.1,1277,498,1296,498Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
                </g>
                <circle id="Window" cx="125.5" cy="126" r="36" fill="#314d51" stroke="#f9f9f9" strokeMiterlimit={10} strokeWidth={10}/>
                <path id="Middle_Fin" data-name="Middle Fin" d="M1312.4,679.8c0-7.6-7.4-13.8-16.4-13.8s-16.4,6.2-16.4,13.8S1296,846,1296,846,1312.4,687.5,1312.4,679.8Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
                <path d="M1260,792" transform="translate(-1170.5 -450)" fill="#314d51"/>
            </svg>
            <div className="thruster" style={command === RocketCommands.IGNITION_START? ignitionAnimation.thruster : {}}>
                <div className="flame-wrapper" style={command === RocketCommands.IGNITION_START? ignitionAnimation.flames : {}}>
                    <div className="flame red"></div>
                    <div className="flame orange"></div>
                    <div className="flame gold"></div>
                    <div className="flame white"></div>
                </div>
            </div>
        </div>
    );


export default Rocket;
