export interface Vote {
  electionId: number;
  voter: number;
  time: Date;
  votesCast: {
    ballotId: number;
    candidateId: number;
  };
}
