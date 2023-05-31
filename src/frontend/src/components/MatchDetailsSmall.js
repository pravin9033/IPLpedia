import { React } from "react";
import {Link} from "react-router-dom";
import './MatchDetailsSmall.css'
import Image from "./cards/Image";
import CardBody from "./cards/CardBody";
import CardDescription from "./cards/CardDescription";
import Card from "./cards/Card";

export const MatchDetailsSmall = ({match, teamName}) =>  {
    var res = "";
    if(match.result === "chased") {
        res = "wickets";
    }
    else {
        res = "runs";
    }
    const team1Route = `/teams/${match.team1}`;
    const team2Route = `/teams/${match.team2}`;


    return (
        <div className="MatchDetailsSmall">
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
                        <h4 className="match-result"> {match.matchWinner} {match.result} and won by {match.resultMargin} {res}. </h4>
                    </CardDescription>
                </CardBody>
            </Card>
        </div>
    );
}


