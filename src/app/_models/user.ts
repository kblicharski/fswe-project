import { Address } from './address';

export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  ssn: string;
  dob: Date;
  driversLicense: string;
  registrationStatus: 'registered' | 'unregistered';
  email: string;
  address: Address;
  role: 'voter' | 'manager' | 'administrator';
}
