module.exports = function(app) {
  app.dataSources.mysqlDS.automigrate('voter', function(err) {
    if (err) throw err;

    app.models.voter.create([{
      email: "jon.smith@nope.com",
      userName: "jonSmith",
      password: "jon123@",
      ssn: "55555",
      dob: "2018-02-24T23:40:26.663Z",
      driversLicense: "js555123",
      status: "unregistered"
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
    }], function(err, administrators) {
      if (err) throw err;

      console.log('Manager models created: \n', administrators);
    });
  });
};
