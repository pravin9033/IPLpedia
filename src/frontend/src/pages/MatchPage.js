import { React, useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {MatchDetails} from "../components/MatchDetails";
import './MatchPage.css';
import {YearSelector} from "../components/YearSelector";

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
            <div className="year-selector">
                <YearSelector teamName={teamName} />
                <h1 className="page-heading bold">{teamName} matches in {year}</h1>
            </div>
            <div className={"card-display"}>
                {matches.map(match => <MatchDetails teamName={teamName} match={match} />)}
            </div>
        </div>
    );
}