# 2018 Fundamentals of Software Engineering Final Project
Our final project was an electronic voting application which could be used to manage elections. We used [Loopback](https://loopback.io/) for our backend and [Angular](https://angular.io/) for our frontend. Our final product is a single-page web application which fulfills all of the project criteria while being intuitive and elegantly designed.

## Links
- [Video Demo](https://www.youtube.com/watch?v=VQDdzFb79hA)
- [Documentation](https://github.com/kblicharski/fswe-project/blob/master/Documentation%20of%20System.pdf)
- [Project View Snapshots & Descriptions](https://github.com/kblicharski/fswe-project/tree/master/Snapshots%20fswe)

## Group Responsibilities
- **[Kevin Blicharski](https://github.com/kblicharski)**: Frontend development, design, project management

- **[Joseph Leiferman](https://github.com/josephLeiferman)**: Backend development, database management, documentation

- **[Logan Brown](https://github.com/logan-brown8520)**: Some frontend and some backend development, documentation, quality assurance

## Running the Application

### Requirements
This project requires Node.js. In order to get Node, you have two options:

#### Option 1: Using nvm
Follow the instructions in the [nvm repository README](https://github.com/creationix/nvm). After installing nvm, run `nvm install node`.

#### Option 2: Downloading Node from the official website
Go to the [Node.js downloads page](https://nodejs.org/en/download/) and choose the version appropriate for your system.


### Setting Up The Project
Clone the project by running `git clone https://github.com/kblicharski/fswe-project.git`. Change directories using `cd fswe-project`. Install project dependencies by running `npm install`. Install the Angular CLI by running `npm install -g @angular/cli`. Once that finishes, you are set to run the application locally.

#### Loopback Development Server
Run `node server/server.js`. Feel free to explorer the backend API at `http://localhost:3000/explorer/`.

#### Angular Development Server
Run `ng serve --open`. Your default browser should open the application at `http://localhost:4200/`.

#### Running Unit Tests
Run `ng test --code-coverage` to execute the unit tests using [Karma](https://karma-runner.github.io). In order to view code coverage, open `index.html` in the generated `coverage/` directory.

### System Description
There are three tiers of users: voters, managers, and administrators. In order to see what each is capable of, sample credentials are provided that are created on server start.

#### Voter
- Username: jonSmith
- Password: jonSmith!

#### Manager
- Username: jonClancy
- Password: jonClancy!

#### Administrator
- Username: jonAdams
- Password: jonAdams!

