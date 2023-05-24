import { React } from "react";
import {Link} from "react-router-dom";

export const MatchDetailsSmall = ({match}) =>  {
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
            <h3>
                <Link to={team1Route}>{match.team1}</Link> VS <Link to={team2Route}>{match.team2}</Link>
            </h3>
            <p>{match.matchWinner} {match.result} and won by {match.resultMargin} {res}. </p>
        </div>
    );
}


