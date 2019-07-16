// Alan Ayoub
// Treehouse Techdegree
// FSJS project 2 - List Filter and Pagination


// global variables
const studentListItems = document.querySelectorAll('.student-item');
const maxPerPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

const  showPage =  ( studentListItems, page ) =>  { /*
   Loop over items in the list parameter
   -- If the index of a list item is  >=  the index of the first item that should be shown on the page
   --  &&  the list item index is  <=  the index of the last item that should be shown on the page, show it
   */
   }




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const  appendPageLinks =  (studentListItems)    =>  {  
   let numberOfStudents = studentListItems.length;
   let numberOfPages = Math.ceil(numberOfStudents/maxPerPage);
   let activePage = 1;
   return console.log(numberOfPages);
    

    /*
   2.  Create a div,  give it the “pagination” class, and append it to the .page div 
   3.  Add a ul  to the “pagination” div to store the pagination links
   4.  for  every page, add li and a tags with the page number text */
   showPage(studentListItems, activePage)
   /*
   6. Loop over pagination links to remove active class from all links
   7. Add the active class to the link that was just clicked. You can identify that
   clicked link using  event.target  */
   }


appendPageLinks(studentListItems);
