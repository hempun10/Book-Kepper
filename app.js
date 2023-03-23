const modal = document.querySelector('#modal'),
      modalShow = document.querySelector('#show-modal'),
      modalClose= document.querySelector('#closed-modal'),
      bookmarkForm = document.querySelector('#book-mark-form'),
      websiteNameEl = document.querySelector('#website-name'),
      websiteUrlEl = document.querySelector('#website-url'),
      bookmarksContainer = document.querySelector('#bookmarks-container');



// Array of bookmaks
let bookmaksArr =[]

// Show Modal,Focus on Input
const showModal =()=>{
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Modal Event Listner
modalShow.addEventListener('click',showModal)
modalClose.addEventListener('click',() => modal.classList.remove('show-modal'))
// Remove model with anywhere click
window.addEventListener('click',(e)=> (e.target == modal) ? modal.classList.remove('show-modal') : false )


// Validate Form 
const validate =(nameValue,urlValue)=>{
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if(!nameValue || !urlValue){
        alert('Ops, Please Submit value for both fields')
    }
    if(urlValue.match(regex)){
        alert('match')
    }
    if(!urlValue.match(regex)){
        alert("Please Provide a valid web address")
        return false;
    }
    //valid
    return true;
}
// Fetch BookMarks From Local Storage
const fetchBookMark =()=>{
    // Get books from local storage if there is it
    if(localStorage.getItem('bookmarks')){
        bookmaksArr = JSON.parse(localStorage.getItem('bookmarks'))
    }
    else{
        bookmaksArr=[
            {
                name:'Hem Pun',
                url:'hembdrpun.com.np'
            },
            {
                name:'Google',
                url:'google.com'
            },
            {
                name:'Gmail',
                url:'gmail.com'
            }
        ]
        localStorage.setItem('bookmarks',JSON.stringify('bookmarks'))
    }
    console.log(bookmaksArr);
}

// Handle Date from Form
const storeBookmark =(e)=>{
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let UrlValue = websiteUrlEl.value;
    if(!UrlValue.includes('http://','https://')){
        UrlValue = `https://${UrlValue}`
    }
   if(!validate(nameValue,UrlValue)){
    return false
   }
   const bookmak ={
    name:nameValue,
    url:UrlValue,
   };
   bookmaksArr.push(bookmak)
   console.log(bookmaksArr);
   localStorage.setItem('bookmarks',JSON.stringify(bookmaksArr))
   fetchBookMark();
   bookmarkForm.reset()
   websiteNameEl.focus();

}

// Event LSitner
bookmarkForm.addEventListener('submit',storeBookmark)

// On Load 
fetchBookMark()