export interface Election {
  id: number;
  managers: number[];
  start: Date;
  end: Date;
  precincts: number[];
  offices: number[];
  description: string;
  type: 'local' | 'state' | 'national';
}
