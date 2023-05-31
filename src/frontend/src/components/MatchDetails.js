import { React } from "react";
import {Link} from "react-router-dom";
import './MatchDetails.css'
import Card from "./cards/Card";
import CardBody from "./cards/CardBody";
import Image from "./cards/Image";
import CardHeader from "./cards/CardHeader";
import CardDescription from "./cards/CardDescription";

export const MatchDetails = ({match,teamName}) =>  {
    if(!match) return null;
    var res = null;
    if(match.result === "chased") {
        res = "wickets";
    }
    else {
        res = "runs";
    }

    const team1Route = `/teams/${match.team1}`;
    const team2Route = `/teams/${match.team2}`;

    const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={"MatchDetails"}>
            <Card rounded>
                    <div className={"flex"}>
                        <Link to={`/teams/${match.team1}`}>
                            <Image src={require(`../images/${match.team1}.png`)} />
                        </Link>
                        <Link to={`/teams/${match.team2}`}>
                            <Image src={require(`../images/${match.team2}.png`)} />
                        </Link>
                    </div>
                <CardBody>
                    <CardDescription>
                        <h4 className="match-venue"> at {match.venue}</h4>
                        <h4 className="match-date">Match Date:{match.date}</h4>
                        <h4 className="match-decision"> {match.tossWinner} won the toss and elected to {match.tossDecision}.</h4>
                        <h4 className="match-result"> {match.matchWinner} {match.result} and won by {match.resultMargin} {res}. </h4>
                        <h4 className="player-of0match"> Man of the Match: {match.playerOfMatch}  </h4>
                    </CardDescription>
                </CardBody>
            </Card>
        </div>
    );
}


