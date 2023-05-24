import { React } from "react";
import {Link} from "react-router-dom";

export const MatchDetails = ({match}) =>  {
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

    return (
        <div className="MatchDetails">
            <h3>Latest Matches</h3>
            <h1>
                <Link to={team1Route}>{match.team1}</Link> VS <Link to={team2Route}>{match.team2}</Link>
            </h1>
            <h2>{match.date}</h2>
            <h3> at {match.venue}</h3>
            <h3> {match.tossWinner} won the toss and elected to {match.tossDecision}.</h3>
            <h3>{match.matchWinner} {match.result} and won by {match.resultMargin} {res}. </h3>
        </div>
    );
}


