export interface Ballot {
  title: string;
  description: string;
  candidates: {
    name: string;
    party: string;
  }
}
