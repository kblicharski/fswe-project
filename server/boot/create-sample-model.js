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

      console.log('Models created: \n', voters);
    });
  });
};
