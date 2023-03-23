const modal = document.querySelector('#modal'),
      modalShow = document.querySelector('#show-modal'),
      modalClose= document.querySelector('#closed-modal'),
      bookmaekForm = document.querySelector('#bookmark-form'),
      websiteNameEl = document.querySelector('#website-name'),
      websiteUrlEl = document.querySelector('#website-url'),
      bookmarksContainer = document.querySelector('#bookmarks-container');




// Show Modal,Focus on Input
const showModal =()=>{
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Event Listner
modalShow.addEventListener('click',showModal)
modalClose.addEventListener('click',() => modal.classList.remove('show-modal'))
// Remove model with anywhere click
window.addEventListener('click',(e)=> (e.target == modal) ? modal.classList.remove('show-modal') : false )