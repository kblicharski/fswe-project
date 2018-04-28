export interface Vote {
  id: number;
  electionId: number;
  voter: number;
  time: Date;
  votesCast: {
    ballotId: number;
    candidateId: number;
  };
}
