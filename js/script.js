const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;


/***
 * ShowPage function finds the 
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
   appendPAgeLinks-
   finds Max Number of pages based on how many items are in the list of data
   creates the Elements to display the pagination links
***/

const appendPageLinks = (list) => {
   const maxPages = Math.floor(list.length / studentsPerPage);
   const parentDiv = document.querySelector('.page');
   const pagDiv = document.createElement('div');
   parentDiv.appendChild(pagDiv).className = 'pagination';
   const newList = document.createElement('ul');
   pagDiv.appendChild(newList);


   for (let h = 0; h < maxPages; h++) {
      const newListItem = document.createElement('li');
      newList.appendChild(newListItem);
      newListItem.innerHTML = `<a class="pagLinks" href="#">${h + 1}</a>`;
   }
   const paginationLinks = document.getElementsByTagName('a');
   paginationLinks[0].className = 'active';

   //Add event listener on previously created buttons to show new page when new button is clicked and add CSS styles to active button/page.

   pagDiv.addEventListener('click', (event) => {
      let pageNumber = parseInt(event.target.innerHTML);
      showPage(studentList, pageNumber);
      for (let j = 0; j < paginationLinks.length; j++) {
         if (paginationLinks.className === 'active') {
            paginationLinks.classList.remove('active');
         }
      }
      event.target.className = 'active';
      event.preventDefault();
   });

}
appendPageLinks(studentList);