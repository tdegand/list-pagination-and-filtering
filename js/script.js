/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelectorAll('.student-item');
const studentsPerPage = 10;


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
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
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

// Remember to delete the comments that came with this file, and replace them with your own code comments.