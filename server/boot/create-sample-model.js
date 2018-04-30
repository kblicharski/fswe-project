module.exports = function (app) {
  app.dataSources.mysqlDS.automigrate('user', function (err) {
    if (err) throw err;

    app.models.user.create([
      {
        email: "jon.smith@gmail.com",
        username: "jonSmith",
        password: "jonSmith!",
        firstName: "Jon",
        lastName: "Smith",
        ssn: "55555",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "js5551231",
        registrationStatus: "registered",
        emailVerified: true,
        votingStatus: "idle",
        role: "voter",
        precinctId: 200,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "White",
          party: "Republican",
          age: 21
        }
      },{
        email: "kate.clay@gmail.com",
        username: "kateClay",
        password: "kateClay!",
        firstName: "Kate",
        lastName: "Clay",
        ssn: "33333",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "kc5551231",
        registrationStatus: "registered",
        emailVerified: true,
        votingStatus: "approved",
        role: "voter",
        precinctId: 200,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "F",
          race: "Black",
          party: "Democrat",
          age: 43
        }
      },{
        email: "li.zhang@gmail.com",
        username: "liZhang",
        password: "liZhang!",
        firstName: "Li",
        lastName: "Zhang",
        ssn: "99999",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "lz5551231",
        registrationStatus: "registered",
        emailVerified: true,
        votingStatus: "approved",
        role: "voter",
        precinctId: 200,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "Asian",
          party: "Democrat",
          age: 25
        }
      },{
        email: "charles.tea@gmail.com",
        username: "charlesTea",
        password: "charlesTea!",
        firstName: "Charles",
        lastName: "Tea",
        ssn: "99999",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "lz5551231",
        registrationStatus: "registered",
        emailVerified: true,
        votingStatus: "approved",
        role: "voter",
        precinctId: 200,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "Hispanic",
          party: "Democrat",
          age: 63
        }
      },
      {
        email: "patricia.bloom@gmail.com",
        username: "patriciaBloom",
        password: "patriciaBloom!",
        firstName: "Patricia",
        lastName: "Bloom",
        ssn: "99999",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "lz5551231",
        registrationStatus: "registered",
        emailVerified: true,
        votingStatus: "approved",
        role: "voter",
        precinctId: 200,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "F",
          race: "White",
          party: "Independent",
          age: 81
        }
      },
      {
        email: "tom.smith@gmail.com",
        username: "tomSmith",
        password: "tomSmith!",
        firstName: "Tom",
        lastName: "Smith",
        ssn: "55555",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "js55512311",
        registrationStatus: "unregistered",
        emailVerified: true,
        votingStatus: "requesting",
        precinctId: 1,
        role: "voter",
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "White",
          party: "Republican",
          age: 21
        }
      },{
        email: "alex.jones@gmail.com",
        username: "alexJones",
        password: "alexJones!",
        firstName: "Alex",
        lastName: "Jones",
        ssn: "55555",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "js55512311",
        registrationStatus: "unregistered",
        emailVerified: true,
        votingStatus: "requesting",
        precinctId: 1,
        role: "voter",
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "White",
          party: "Republican",
          age: 21
        }
      }, {
        email: "jon.Adams@gmail.com",
        username: "jonAdams",
        password: "jonAdams!",
        firstName: "Jon",
        lastName: "Adams",
        ssn: "66666",
        dob: "2018-02-25T23:40:26.663Z",
        driversLicense: "ja55512311",
        registrationStatus: "registered",
        votingStatus: "approved",
        emailVerified: true,
        role: "administrator",
        precinctId: 1,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "other",
          party: "Republican",
          age: 56
        }
      }, {
        email: "jane.smith@gmail.com",
        username: "janeSmith",
        password: "janeSmith!",
        firstName: "Jane",
        lastName: "Smith",
        ssn: "55555",
        dob: "2018-02-24T23:40:26.663Z",
        driversLicense: "js555122113",
        registrationStatus: "unregistered",
        emailVerified: true,
        votingStatus: "requesting",
        role: "voter",
        precinctId: 1,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "White",
          party: "Republican",
          age: 21
        }
      }, {
        email: "jon.Clancy@gmail.com",
        username: "jonClancy",
        password: "jonClancy!",
        firstName: "Jon",
        lastName: "Clancy",
        ssn: "77777",
        dob: "2018-02-26T23:40:26.663Z",
        driversLicense: "jc555121233",
        registrationStatus: "registered",
        votingStatus: "approved",
        emailVerified: true,
        role: "manager",
        precinctId: 1,
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "Iowa",
          zipCode: "52245"
        },
        demographics: {
          gender: "M",
          race: "White",
          party: "Republican",
          age: 21
        }
      }], function (err, users) {
      if (err) throw err;

      console.log('User models created: \n', users);
    });
  });
  app.dataSources.mysqlDS.automigrate('vote', function (err) {
    if (err) throw err;

    app.models.vote.create([{
      electionId: 1,
      votesCast: {"ballotId": 1, "candidateId": 1},
      voter: 1,
      time: new Date(2018, 5, 20)

    }], function (err, vote) {
      if (err) throw err;

      console.log('Vote models created: \n', vote);
    });
  });
  app.dataSources.mysqlDS.automigrate('office', function (err) {
    if (err) throw err;

    app.models.office.create([{
      title: "Iowa City Election",
      candidates: [1, 2],
      description: "2018 Iowa City Mayor's Elections",

    }], function (err, office) {
      if (err) throw err;

      console.log('Office models created: \n', office);
    });
  });
  app.dataSources.mysqlDS.automigrate('candidate', function (err) {
    if (err) throw err;

    app.models.candidate.create([{
      name: "John Smith",
      party: "Democrat"



    }, {
      name: "John Adams",
      party: "Republican"


    }], function (err, candidate) {
      if (err) throw err;

      console.log('Candidate models created: \n', candidate);
    });
  });
  app.dataSources.mysqlDS.automigrate('election', function (err) {
    if (err) throw err;

    app.models.election.create([{
      offices: [1],
      managers: [4],
      precincts: [200, 201],
      locations: ["Iowa City"],
      start: new Date(2018, 3, 20),
      end: new Date(2018, 10, 20),
      description: "Iowa City Election"

    }, {
      offices: [1],
      managers: [4],
      precincts: [200],
      locations: ["Iowa City"],
      type: 'state',
      start: new Date(2018, 3, 20),
      end: new Date(2018, 7, 20),
      description: "Iowa Election"

    }, {
      offices: [1],
      managers: [4],
      precincts: [200],
      locations: ["Iowa City"],
      type: 'local',
      start: new Date(2018, 3, 20),
      end: new Date(2018, 7, 20),
      description: "Iowa Election"

    }, {
      offices: [1],
      managers: [4],
      precincts: [200],
      locations: ["Iowa City"],
      type: 'national',
      start: new Date(2018, 3, 20),
      end: new Date(2018, 10, 21),
      description: "Iowa Election"

    }, {
      offices: [1],
      managers: [4],
      precincts: [200],
      locations: ["USA"],
      type: 'national',
      start: new Date(2018, 3, 20),
      end: new Date(2018, 7, 20),
      description: "Presidential Election"

    }
    ], function (err, election) {
      if (err) throw err;

      console.log('Elections models created: \n', election);
    });
  });
  app.dataSources.mysqlDS.automigrate('accessToken', function (err) {
    if (err) throw err;

    app.models.accessToken.create([{
      id: "Test",
      ttl: 1209600,
      scopes: [
        "Test"
      ],
      created: "2018-04-02T18:40:41.312Z"
    }], function (err, accessToken) {
      if (err) throw err;

      console.log('Access Token models created: \n', accessToken);
    });
  });
  app.dataSources.mysqlDS.automigrate('audit', function (err) {
    if (err) throw err;

    app.models.audit.create([{
      action: "System created",
      time: new Date()
    }], function (err, audit) {
      if (err) throw err;

      console.log('Audit models created: \n', audit);
    });
  });
};
