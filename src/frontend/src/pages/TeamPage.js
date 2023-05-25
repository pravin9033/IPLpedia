import { React, useState, useEffect } from "react";
import {MatchDetails} from "../components/MatchDetails";
import {MatchDetailsSmall} from "../components/MatchDetailsSmall";
import {Link, useParams} from "react-router-dom";
import {PieChart} from "react-minimal-pie-chart";
import './TemPage.css';

export const TeamPage = () =>  {

    const [team, setTeam] = useState({matches: []});
    const {teamName} = useParams();
    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            };
            fetchTeam();
        },[teamName]
    );
    if(!team || !team.teamName) {
        return <h1> Error 404 : Team Not Found</h1>
    }
    return (
        <div className="TeamPage">
            <div className="team-name">
                <h1 className="team-name-header">{team.teamName}</h1>
            </div>
            <div className="win-loss">
                Wins /Losses
                <PieChart data={[
                    {title: 'Loss', value: team.totalMatches-team.totalWins, color: '#a34d5d'},
                    {title: 'Won', value: team.totalWins, color: '#4da375'},

                ]} />
            </div>
            <div className="match-details">
                <h3>Latest Matches</h3>
                <MatchDetails teamName={team.teamName} match = {team.matches[0]}/>
            </div>
            {team.matches.slice(1).map(match => <MatchDetailsSmall match = {match}/>)}


            <div className="more">
                <Link to={`/teams/${teamName}/matches/2022`}>More ></Link>
            </div>
        </div>
    );
}


