module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('user', function(err) {
    if (err) throw err;

    app.models.user.create([
      {
      email: "jon.smith@gmail.com",
      username: "jonSmith",
      password: "jonSmith!",
      ssn: "55555",
      dob: "2018-02-24T23:40:26.663Z",
      driversLicense: "js555123",
      status: "unregistered",
      emailVerified: true,
      role: "voter",
      address: {
        street: "University Avenue",
        city: "Iowa City",
        state: "IA",
        zipCode: "52245"
      }
    },{
      email: "jon.Adams@gmail.com",
      username: "jonAdams",
      password: "jonAdams!",
      ssn: "66666",
      dob: "2018-02-25T23:40:26.663Z",
      driversLicense: "ja555123",
      status: "registered",
      emailVerified: true,
      role: "administrator",
      address: {
        street: "University Avenue",
        city: "Iowa City",
        state: "IA",
        zipCode: "52245"
      }
      },{
        email: "jon.Clancy@gmail.com",
        username: "jonClancy",
        password: "jonClancy!",
        ssn: "77777",
        dob: "2018-02-26T23:40:26.663Z",
        driversLicense: "jc555123",
        status: "registered",
        emailVerified: true,
        role: "manager",
        address: {
          street: "University Avenue",
          city: "Iowa City",
          state: "IA",
          zipCode: "52245"
        }
    }], function(err, voters) {
      if (err) throw err;

      console.log('User models created: \n', voters);
    });
  });
  app.dataSources.mysqlDS.automigrate('vote', function(err) {
    if (err) throw err;

    app.models.vote.create([{
      ballotNumber: 1,
      candidate:  "John Adams",
      voter: 1,
      time: new Date(2018,5,20)

    }], function(err, vote) {
      if (err) throw err;

      console.log('Vote models created: \n', vote);
    });
  });
  app.dataSources.mysqlDS.automigrate('ballot', function(err) {
    if (err) throw err;

    app.models.ballot.create([{
      ballotNumber: 1,
      candidates:  ["John Adams", "John Smith"],
      managers: ["Suzy Collins"],
      locations: ["Iowa City"],
      start: new Date(2018,5,20),
      end: new Date(2018,6,20)

  }], function(err, vote) {
      if (err) throw err;

      console.log('Ballot models created: \n', vote);
    });
  });
  app.dataSources.mysqlDS.automigrate('accessToken', function(err) {
    if (err) throw err;

    app.models.accessToken.create([{
      id: "Test",
      ttl : 1209600,
      scopes: [
        "Test"
      ],
      created : "2018-04-02T18:40:41.312Z"
    }], function(err, accessToken) {
      if (err) throw err;

      console.log('Access Token models created: \n', accessToken);
    });
  });
};
