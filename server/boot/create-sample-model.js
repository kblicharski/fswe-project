module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('voter', function(err) {
    if (err) throw err;

    app.models.voter.create([{
      email: "joseph.leiferman@gmail.com",
      username: "jonSmith",
      password: "jonSmith!",
      ssn: "55555",
      dob: "2018-02-24T23:40:26.663Z",
      driversLicense: "js555123",
      status: "unregistered",
      emailVerified: true

    }], function(err, voters) {
      if (err) throw err;

      console.log('Voter models created: \n', voters);
    });
  });
  app.dataSources.mysqlDS.automigrate('administrators', function(err) {
    if (err) throw err;

    app.models.administrators.create([{
      userName: "jDeer",
      password: "jD123@"
    }], function(err, administrators) {
      if (err) throw err;

      console.log('Administrator models created: \n', administrators);
    });
  });
  app.dataSources.mysqlDS.automigrate('manager', function(err) {
    if (err) throw err;

    app.models.manager.create([{
      userName: "jDoe",
      password: "jDoe123@"
    }], function(err, manager) {
      if (err) throw err;

      console.log('Manager models created: \n', manager);
    });
  });
  app.dataSources.mysqlDS.automigrate('vote', function(err) {
    if (err) throw err;

    app.models.vote.create([{
      ballotNumber: 1,
      candidate: "John Smith",
      voter: 1
    }], function(err, vote) {
      if (err) throw err;

      console.log('Vote models created: \n', vote);
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
