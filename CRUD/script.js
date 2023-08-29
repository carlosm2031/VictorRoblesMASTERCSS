// script.js

const form = document.getElementById('crud-form');
const dataTable = document.querySelector('#data-table tbody');
const data = [];

function renderData() {
    dataTable.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>
                <button onclick="updateData(${index})">Update</button>
                <button onclick="deleteData(${index})">Delete</button>
            </td>
        `;
        dataTable.appendChild(row);
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    data.push({ name, email });
    renderData();
    form.reset();
});

function deleteData(index) {
    data.splice(index, 1);
    renderData();
}

function updateData(index) {
    const newName = prompt('Enter new name:', data[index].name);
    const newEmail = prompt('Enter new email:', data[index].email);
    if (newName !== null && newEmail !== null) {
        data[index].name = newName;
        data[index].email = newEmail;
        renderData();
    }
}

// Initial rendering of data
renderData();
