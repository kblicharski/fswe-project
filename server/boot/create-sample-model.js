module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('user', function(err) {
    if (err) throw err;

    app.models.user.create([{
      email: "jon.smith@nope.com",
      userName: "jonSmith",
      password: "joN123@",
      ssn: "55555",
      dob: "2018-02-24T23:40:26.663Z",
      driversLicense: "js555123",
      status: "unregistered"
    }], function(err, users) {
      if (err) throw err;

      console.log('User models created: \n', users);
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
};
