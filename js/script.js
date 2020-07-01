const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

/***
 * ShowPage function finds the:
 * start index of an item based on page number entered
 * end of the index based on page number
 * returns the amount of list items with a total of 10 based on the page number entered
 ***/

const showPage = (list, page) => {
   const startIndex = parseInt((page * 10) - 10);
   const endIndex = parseInt(page * 10) - 1;

   for (let i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i <= endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}
showPage(studentList, 1);

/***
   appendPAgeLinks:
   finds Max Number of pages based on how many items are in the list of data
   creates the Elements to display the pagination links
***/

const appendPageLinks = (list) => {
   const maxPages = Math.floor(list.length / studentsPerPage) + 1;
   const parentDiv = document.querySelector('.page');
   const pagDiv = document.createElement('div')
   pagDiv.id = 'pagination';
   pagDiv.className = 'pagination';
   const div = document.getElementById('pagination');
   const newList = document.createElement('ul');

   /**
    * remove previous pagination links if they exist
    * Add new pagination links
    * 
    **/
   parentDiv.appendChild(pagDiv)
   newList.className = 'pagParent';
   pagDiv.appendChild(newList);

   for (let h = 0; h < maxPages; h++) {
      const newListItem = document.createElement('li');
      newList.appendChild(newListItem);
      newListItem.innerHTML = `<a href="#">${h + 1}</a>`;
   }
   const paginationLinks = document.getElementsByTagName('a');
   paginationLinks[0].className = 'active';

   //Add event listener on previously created buttons to show new page when new button is clicked and add CSS styles to active button/page.

   pagDiv.addEventListener('click', (event) => {
      let pageNumber = parseInt(event.target.innerHTML);
      showPage(studentList, pageNumber);
      for (let j = 0; j < paginationLinks.length; j++) {
         paginationLinks[j].classList.remove('active');
      }
      event.target.className = 'active';
      event.preventDefault();
   });

}
appendPageLinks(studentList);

/*** Plan on adding this later on as I struggled with it a ton. Code is below and commented out:
 * Search Bar Functionality:
 * Create nodes/elements to create the search bar
 * Add event listener to search button to filter the contents
 * add keyup to input to filter contents in real time
 *
 ***/

// const searchBar = (list) => {
//    const parentDiv = document.querySelector('.page-header');
//    const pagDiv = document.createElement('div');
//    parentDiv.appendChild(pagDiv).className = 'student-search';
//    const newInput = document.createElement('input');
//    newInput.placeholder = 'Search...';
//    const searchBut = document.createElement('button');
//    searchBut.innerHTML = 'Reset';
//    pagDiv.appendChild(newInput);
//    pagDiv.appendChild(searchBut);
//    const noMatches = document.createElement('h3');

//    /**
//     * Event listener for submit button for the search
//     */
//    searchBut.addEventListener('click', (event) => {
//       for (let i = 0; i < list.length; i++) {
//          list[i].style.display = 'block';
//          noMatches.style.display = 'none';
//       }
//    });

//    /**
//     * Event listener for key presses in input field
//     */

//    parentDiv.addEventListener('keyup', (event) => {

//       //Filter the list of users to match what is searched

//       const newList = [];

//       for (let i = 0; i < list.length; i++) {
//          const filter = newInput.value.toLowerCase();
//          const listItems = list[i].innerText.toLowerCase() || list[i].innerHTML.toLowerCase();

//          if (listItems.indexOf(filter) > -1 || filter === '') {
//             list[i].style.display = '';
//             newList.push(list[i]);
//             noMatches.style.display = 'none';

//          } else {
//             list[i].style.display = 'none';
//             parentDiv.parentNode.insertBefore(noMatches, parentDiv.nextSibling);
//             noMatches.style.display = 'block';

//          }

//          if (filter !== listItems) {
//             noMatches.innerText = "No matches found";
//          }
//       }

//       //create new pagination links based on the number of items returned

//       event.preventDefault();
//       appendPageLinks(newList);
//    });
// }
// searchBar(studentList);