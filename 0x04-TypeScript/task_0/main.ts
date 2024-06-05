interface student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const student1: student = {
	firstName: 'kawtar',
	lastName: 'nabirha',
	age: 20,
	location: 'Eljadida'
};
const student2: student ={
	firstName: 'wissam',
	lastName: 'nabirha',
	age: 27,
	location: 'lille'
};

const studentsList: student[] = [student1, student2];
const table = document.createElement('table');
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();

const firstNameHeader = document.createElement('th');
firstNameHeader.textContent = 'First Name';
headerRow.appendChild(firstNameHeader);

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';
headerRow.appendChild(locationHeader);

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
