// Sample data in JSON format
const levelsData = [
    {
        title: 'Level 1 - Basic',
        items: ['Check 1', 'Check 2', 'Check 3']
    },
    {
        title: 'Level 2 - Middle',
        items: ['Binary Hex', 'Money', 'Multi Word']
    },
    {
        title: 'Level 3 - Middle',
        items: ['Binary Hex', 'Multi Word']
    },
    {
        title: 'Level 4 - Middle',
        items: ['Binary Hex']
    },
    {
        title: 'Level 5 - Middle',
        items: ['Multi Word']
    },
]

// Function to generate the HTML structure
function generateHTML(data) {
    const container = document.getElementById('container');

    data.forEach(level => {
        const levelDiv = document.createElement('div');
        levelDiv.classList.add('col-6', 'mt-2');
    
        const nestedDiv = document.createElement('div');
        nestedDiv.classList.add('editchapter', 'px-2', 'pb-2');
        
        const borderDiv = document.createElement('div');
        borderDiv.classList.add('ps-3')
        
        const titleP = document.createElement('p');
        titleP.textContent = level.title;
        borderDiv.appendChild(titleP);
        
        level.items.forEach(itemText => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('form-check', 'mt-2');
            
            const checkboxInput = document.createElement('input');
            checkboxInput.classList.add('form-check-input');
            checkboxInput.type = 'checkbox';
            itemDiv.appendChild(checkboxInput);
            
            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.textContent = itemText;
            itemDiv.appendChild(label);
            
            const viewButton = document.createElement('button');
            viewButton.classList.add('btn-view');
            viewButton.textContent = 'View';
            // Adding an event listener to the View button
        viewButton.addEventListener('click', function() {
            // Code to perform when the View button is clicked
            console.log('View button clicked for item:', itemText);
            // You can replace the console.log with your desired actions
        });
            itemDiv.appendChild(viewButton);
            
            borderDiv.appendChild(itemDiv);
        });
        
        nestedDiv.appendChild(borderDiv);
        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('justify-content-end', 'gap-1', 'd-flex');
        
        const updateButton = document.createElement('button');
        updateButton.classList.add('btn', 'btn-primary', 'btn-common');
        updateButton.textContent = 'Update';
        buttonsDiv.appendChild(updateButton);
        
        const addLabButton = document.createElement('button');
        addLabButton.classList.add('btn-addlab');
        
        const editIcon = document.createElement('img');
        editIcon.src = '../public/imgs/add.png';
        editIcon.alt = 'Edit Icon';
        addLabButton.appendChild(editIcon);
        
        const addLabText = document.createTextNode('Add Lab');
        addLabButton.appendChild(addLabText);
        
        buttonsDiv.appendChild(addLabButton);
        
        nestedDiv.appendChild(buttonsDiv);
        
        levelDiv.appendChild(nestedDiv);
        
        container.appendChild(levelDiv);
    });
}

// Call the function to generate the HTML structure using the provided data
generateHTML(levelsData);