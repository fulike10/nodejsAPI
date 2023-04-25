const sqlite3 = require("sqlite3").verbose();
const fs = require('fs');

fs.open('autok.db', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

const db = new sqlite3.Database("./autok.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
  
    console.log("sikeres csatlakozas");
  });
  
db.run('CREATE TABLE autok(id INTEGER PRIMARY KEY AUTOINCREMENT, gyarto TEXT NOT NULL, tipus TEXT UNIQUE NOT NULL, szin TEXT NOT NULL,ajtok_szama TEXT NOT NULL)');

/*
const sql ='INSERT INTO autok(name, email, address) VALUES(?,?,?)';
db.run(sql, ["mike","asd@gmail.com", "aaaaaa aaaa"], (err)=>{
    if(err) return console.error(err.message);

    console.log("A new row added!");
});
*/
