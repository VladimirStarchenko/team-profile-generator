const fs = require("fs");

function htmlContent(data) {
  let cards = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {
      cards = cards + managerCard(data[i]);
    } else if (data[i].getRole() === "Engineer") {
      cards = cards + engineerCard(data[i]);
    } else {
      cards = cards + internCard(data[i]);
    }
  }
  function managerCard(manager) {
    return `
  <div class="card mr-1 mt-5 bg-light">
    <div class="card-header bg-primary">
      <h2 class="card-title text-light">${manager.getName()}</h2>
      <h3 class="card-title text-light bi bi-cup-fill">
        Manager <i class="fas fa-mug-hot"></i>
      </h3>
    </div>
    <div class="card-body">
      <p class="card">ID:${manager.getId()}</p>
      <p class="card">Email:${manager.getEmail()}</p>
      <p class="card">Office Number:${manager.getOfficeNumber()}</p>
    </div>
  </div>
`;
  }

  function engineerCard(engineer) {
    return `
  <div class="card mr-1 mt-5 bg-light">
    <div class="card-header bg-primary">
      <h2 class="card-title text-light">${engineer.getName()}</h2>
      <h3 class="card-title text-light bi bi-cup-fill">
        Engineer <i class="fas fa-glasses"></i>
      </h3>
    </div>
    <div class="card-body">
      <p class="card">ID:${engineer.getId()}</p>
      <p class="card">Email:${engineer.getEmail()}</p>
      <p class="card">Github:${engineer.getGithub()}</p>
    </div>
  </div>`;
  }

  function internCard(intern) {
    return `
  <div class="card mr-1 mt-5 bg-light">
    <div class="card-header bg-primary">
      <h2 class="card-title text-light">${intern.getName()}</h2>
      <h3 class="card-title text-light bi bi-cup-fill">
        Intern <i class="fas fa-user-graduate"></i>
      </h3>
    </div>
    <div class="card-body">
      <p class="card">ID:${intern.getId()}</p>
      <p class="card">Email:${intern.getEmail()}</p>
      <p class="card">School:${intern.getSchool()}</p>
    </div>
  </div>`;
  }
  return cards;
}

module.exports = (members) => {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <script
    src="https://kit.fontawesome.com/4cf7e7bf8a.js"
    crossorigin="anonymous"
  ></script>
  </head>
  <body>
    <div class="row justify-content-center h-100">
      <div class="col-12 bg-danger text-light">
        <h3 class="text-center">My Team</h3>
      </div>
    </div>
    <div class="d-flex justify-content-center flex-wrap">
    <div class="card-deck">
        ${htmlContent(members)}
        </div>
      </div>
</body>
</html>`;
};
