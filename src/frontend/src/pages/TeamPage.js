import { React, useState, useEffect } from "react";
import {MatchDetails} from "../components/MatchDetails";
import {MatchDetailsSmall} from "../components/MatchDetailsSmall";
import {useParams} from "react-router-dom";

export const TeamPage = () =>  {

    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchMatches();
        },[teamName]
    );
    if(!team || !team.teamName) {
        return <h1> Error 404 : Team Not Found</h1>
    }
    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>

            <MatchDetails match = {team.matches[0]}/>
            {team.matches.slice(1).map(match => <MatchDetailsSmall match = {match}/>)}

        </div>
    );
}


