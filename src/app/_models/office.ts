import { Candidate } from './candidate';

export interface Office {
  title: string;
  description: string;
  candidates: Candidate[];
}
