package com.example.iplhistory.controller;

import com.example.iplhistory.model.Match;
import com.example.iplhistory.model.Team;
import com.example.iplhistory.repository.MatchRepository;
import com.example.iplhistory.repository.TeamRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }


    @GetMapping("/team")
    public Iterable<Team> getAllTeam() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName,4));

        return team;
    }

//    @GetMapping("/team/{teamName}/matches")
//    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
//        LocalDate startDate = LocalDate.of(year, 1, 1);
//        LocalDate endDate = LocalDate.of(year + 1, 1, 1);
//        return this.matchRepository.getMatchesByTeamBetweenDates(
//                teamName,
//                startDate,
//                endDate
//        );
//    }
}
