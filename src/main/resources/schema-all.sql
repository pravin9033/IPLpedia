DROP TABLE match IF EXISTS;
CREATE TABLE match (id BIGINT IDENTITY NOT NULL PRIMARY KEY, city VARCHAR(250), date date,player_of_match VARCHAR(250),venue VARCHAR(250),team1 VARCHAR(250),team2 VARCHAR(250),toss_winner VARCHAR(250),toss_decision VARCHAR(250),match_winner VARCHAR(250),result VARCHAR(250),result_margin VARCHAR(250),umpire1 VARCHAR(250),umpire2 VARCHAR(250));

-- private long id;
-- private String city;
-- private LocalDate date;
-- private String playerOfMatch
-- private String venue;
-- private String team1;
-- private String team2;
-- private String tossWinner;
-- private String tossDecision;
-- private String matchWinner;
-- private String result;
-- private String resultMargin;
-- private String umpire1;
-- private String umpire2;
