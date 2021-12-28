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
}
