import { React } from "react";
import {Link} from "react-router-dom";
import './MatchDetails.css'

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
        <div className={isMatchWon ? 'MatchDetails won-card' :'MatchDetails lost-card'}>

            <h1>
                <Link to={team1Route}>{match.team1}</Link> vs <Link to={team2Route}>{match.team2}</Link>
            </h1>
            <h3 className="match-venue"> at {match.venue}</h3>
            <h2 className="match-date"> {match.date}</h2>
            <h3 className="match-decision"> {match.tossWinner} won the toss and elected to {match.tossDecision}.</h3>
            <h3 className="match-result"> {match.matchWinner} {match.result} and won by {match.resultMargin} {res}. </h3>
            <h3 className="player-of0match"> Man of the Match: {match.playerOfMatch}  </h3>

        </div>
    );
}


