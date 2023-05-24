import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {MatchDetails} from "../components/MatchDetails";

export const MatchPage = () =>  {
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            };
            fetchMatches();
        },[teamName,year]
    );
    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {matches.map(match => <MatchDetails teamName={teamName} match={match} />)}
        </div>
    );
}