import { Address } from './address';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  ssn: string;
  dob: Date;
  driversLicense: string;
  registrationStatus: 'registered' | 'unregistered' | 'denied';
  votingStatus: 'idle' | 'requesting' | 'approved' | 'denied';
  email: string;
  address: Address;
  role: 'voter' | 'manager' | 'administrator';
  precinctId: number;
  emailVerified: boolean;
  demographics: {
    race: string,
    gender: string,
    party: string,
    age: number
  };
}
