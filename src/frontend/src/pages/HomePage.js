import { React, useState, useEffect } from "react";
import './HomePage.css';
import  Card   from "../components/cards/Card";
import Image from "../components/cards/Image";
import CardBody from "../components/cards/CardBody";
import CardHeader from "../components/cards/CardHeader";
import CardDescription from "../components/cards/CardDescription";

import {Link} from "react-router-dom";

export const HomePage = ({teamName}) =>  {

    const [teams, setTeams] = useState([]);
    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`http://localhost:8080/team`);
                const data = await response.json();
                setTeams(data);
            };
            fetchAllTeams();
        },[]
    );
    return (
        <div className="HomePage ">
            <div className="Header-Section">
                <h1 className="app-name">Indian Premier League Dashboard</h1>
            </div>
            <div className="team-grid ">
                {/*{teams.map(team => <TeamTile teamName ={team.teamName}/>)}*/}
                {teams.map(team =>
                    <Card rounded>
                        <Image className={"image"} src={require(`../images/${team.teamName}.png`)}/>
                        <CardBody >
                            <CardHeader>
                                <Link to={`/teams/${team.teamName}`}>
                                    {team.teamName}
                                </Link>
                            </CardHeader>
                            <CardDescription>
                               Total Matches: {team.totalMatches} Total Wins: {team.totalWins}
                            </CardDescription>
                        </CardBody>
                    </Card>
                )}
            </div>
        </div>
    );
}


