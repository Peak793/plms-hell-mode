// Get the reference to the groupsList element
const groupsList = document.getElementById("group-list");

function addTableRow(data) {
  // Create an instance of the table-row component
  data.forEach(data => {
    const row = document.createElement('table-row');

    // Set the attributes for the table-row component
    row.setAttribute('group-id', data.groupId);
    row.setAttribute('group', data.group);
    row.setAttribute('year', data.year);
    row.setAttribute('semester', data.semester);
    row.setAttribute('class-date', data.classDate);
    row.setAttribute('students', data.students);
    row.setAttribute('instructor', data.instructor);

    // Append the table-row component to the groupsList
    groupsList.appendChild(row);
  })
}

// Sample data
const sampleData = [
  {
    groupId: '22020401',
    group: '404',
    year: '2022',
    semester: '1',
    classDate: 'พฤหัสบดี, 09:00:00 - 12:00:00',
    students: '45',
    instructor: 'ชรินดา สนธิดี'
  },
  {
    groupId: '22020401',
    group: '404',
    year: '2022',
    semester: '1',
    classDate: 'อาทิตย์, 09:00:00 - 12:00:00',
    students: '45',
    instructor: 'ชรินดา สนธิดี'
  },
  {
    groupId: '22020401',
    group: '404',
    year: '2022',
    semester: '1',
    classDate: 'ศุกร์, 09:00:00 - 12:00:00',
    students: '45',
    instructor: 'ชรินดา สนธิดี'
  },
];

// Call the function to add the table row
addTableRow(sampleData);

function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
  if (document.getElementById(id).classList.contains("show")) {
    document.querySelector(".backdrop").style.display = "block"
  } else {
    document.querySelector(".backdrop").style.display = "none"
  }
}

function closeDropdown() {
  console.log("backdrop")
  document.querySelectorAll(".dropdown-content").forEach(e => e.classList.remove("show"))
  document.querySelector(".backdrop").style.display = "none"
}

