db.createUser(
    {
      user: "liga",
      pwd: "liga",
      roles: [
         { role: "dbOwner", db: "liga" }
      ]
    }
);
db.createCollection("liga");
