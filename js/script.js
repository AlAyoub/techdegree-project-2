// Alan Ayoub
// Treehouse Techdegree
// FSJS project 2 - List Filter and Pagination

// global variables for student list and items per page
const studentListItems = document.querySelectorAll('.student-item');
const maxPerPage = 10;

// function to hide all students in the list except for 10 students
const showPage = (list, button) => {

   // variable to create a blank div
   const div = document.createElement('div');

   // hide all student list items
   for (let i = 0; i < studentListItems.length; i++) {
      studentListItems[i].style.display = 'none';
   }
   // if student list is empty, display an empty div
   // else determine which 10 students to display
   if (list.length === 0) {
      div.style.display = 'block';
      div.innerHTML += 'There are no students to display';
   } else {
      let indexStart = ((button - 1) * maxPerPage);
      let indexEnd = (indexStart + maxPerPage);
      for (let i = indexStart; i < indexEnd && i < list.length; i++) {
         list[i].style.display = 'block';
      }
      div.style.display = 'none';
   }
}
// function to create our page buttons and function
const appendPageLinks = (studentList) => {

   // determine the number of pages
   let numberOfStudents = studentList.length;
   let numberOfPages = Math.ceil(numberOfStudents / maxPerPage);
   // create a ul & div element variable for our buttons
   const divForButtons = document.createElement('div');
   const ulForButtons = document.createElement('ul');
   // Select the page class in a vriable page and declare active button
   const page = document.querySelector('.page');
   let activePageButton = 1;

   // give the buttons div the pagination class and append it to .page div
   divForButtons.className = 'pagination';
   page.appendChild(divForButtons);
   // Add unordered list buttons to our div for page links
   divForButtons.appendChild(ulForButtons);

   // Loop to create li and a tags with text for each button
   for (let i = 0; i < numberOfPages; i++) {
      let liButton = document.createElement('li');
      let anchorButton = document.createElement('a');
      anchorButton.href = '#';
      if (i === 0) {
         anchorButton.className = 'active';
      }
      anchorButton.textContent = i + 1;
      liButton.appendChild(anchorButton);
      ulForButtons.appendChild(liButton);
   }
   // When a new button is clicked, it becomes the active button
   ulForButtons.addEventListener('click', (e) => {
      let previousButton = document.querySelector('.active');
      previousButton.className = '';
      activePageButton = e.target.textContent;
      e.target.className = 'active';
      showPage(studentList, activePageButton)
   });
   showPage(studentList, activePageButton)
};
appendPageLinks(studentListItems);