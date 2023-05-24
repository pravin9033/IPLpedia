import { React } from "react";

export const MatchDetailsSmall = ({match}) =>  {
    return (
        <div className="MatchDetailsSmall">

            <p>{match.team1} VS {match.team2}</p>
        </div>
    );
}


