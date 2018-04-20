export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  ssn: string;
  dob: Date;
  driversLicense: string;
  status: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  type: 'voter' | 'manager' | 'administrator';
}
