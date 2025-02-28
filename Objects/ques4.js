// Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following 
// properties:
// Name, gender, address, education, profession, 
// Enter all records one by one. 
// Hint: 
//  use select box for education and profession, 
//  use radio box for gender
// Bonus : use can use localStorage to save records

function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

function saveRecord(person) {
  var records = JSON.parse(localStorage.getItem('populationRecords')) || [];

  records.push(person);

  localStorage.setItem('populationRecords', JSON.stringify(records));
}

function displayRecords() {
  var recordList = document.getElementById('recordList');
  recordList.innerHTML = ''; // Clear the list before displaying updated records

  var records = JSON.parse(localStorage.getItem('populationRecords')) || [];

  records.forEach((record) => {
    var li = document.createElement('li');
    li.textContent = `Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
    recordList.appendChild(li);
  });
}

document.getElementById('personForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
  var address = document.getElementById('address').value;
  var education = document.getElementById('education').value;
  var profession = document.getElementById('profession').value;

  var person = new Person(name, gender, address, education, profession);

  saveRecord(person);

  displayRecords();

  document.getElementById('personForm').reset();
});

window.onload = displayRecords;
