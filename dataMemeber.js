const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "Member.json"
);

// utility Function
const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Person {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  save() {
    getProductsFromFile(member => {
      member.push(this);
      fs.writeFile(p, JSON.stringify(member), (err, fileContent) => {
        if (err) console.log(err);
      });
    });
  }
};
