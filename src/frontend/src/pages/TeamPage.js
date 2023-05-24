import { React, useState, useEffect } from "react";
import {MatchDetails} from "../components/MatchDetails";
import {MatchDetailsSmall} from "../components/MatchDetailsSmall";

export const TeamPage = () =>  {

    const [team, setTeam] = useState({matches: []});

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch('http://localhost:8080/team/Rajasthan%20Royals');
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();


        },[]
    );

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>

            <MatchDetails match = {team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchDetailsSmall match = {match}/>)}

        </div>
    );
}


