let sampleData = []

function addTableRow(data, element) {
  if (!data) {
    return
  }

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
    element.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Sample data
  sampleData = [
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

  // Get the reference to the groupsList element
  const groupsList = document.getElementById("group-list");

  // Call the function to add the table row
  addTableRow(sampleData, groupsList);
});

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

function handleCheckedAll(event) {
  const changedElement = event.target;
  const form = event.currentTarget;

  if (changedElement.type === 'checkbox') {
    const isChecked = changedElement.checked;
    const value = changedElement.value;
    const checkboxes = form.querySelectorAll("input[type='checkbox']");
    const allCheckbox = form.querySelector("input[type='checkbox'][value='all']");

    // If the 'All' checkbox was changed
    if (value === 'all') {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = isChecked;
      });
    } else {
      // Count the number of checked checkboxes other than 'All'
      const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked && checkbox.value !== 'all').length;

      // If all other checkboxes are checked, check the 'All' checkbox
      if (checkedCount === checkboxes.length - 1) {
        allCheckbox.checked = true;
      } else {
        // If any single checkbox is unchecked, uncheck the 'All' checkbox
        allCheckbox.checked = false;
      }
    }
  }
}

