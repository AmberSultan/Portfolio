let infoLinks = document.querySelectorAll('.infoLink');
let infoDetails = document.querySelectorAll('.infoDetail');

let loadMoreBtns = document.querySelectorAll('.loadMoreBtn');
let serviceTexts = document.querySelectorAll('.serviceText');

let sideMenu = document.getElementById("sideMenu")
let closeMenu = document.querySelector('.closeMenu');
let showMenu = document.querySelector('.showMenu');

// ----------about me information------

infoLinks.forEach((infoLink, index) => {
    infoLink.addEventListener('click', () => {
        infoLinks.forEach(link => link.classList.remove('active'));
        infoLink.classList.add('active');
        infoDetails.forEach(detail => detail.classList.remove('active-tab'));
        infoDetails[index].classList.add('active-tab');
    });
});

// ------- Read more button ----------

loadMoreBtns.forEach((loadMoreBtn, index) => {
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        serviceTexts[index].classList.toggle('showMore');

        if(loadMoreBtn.innerText === 'Read more'){
            loadMoreBtn.innerText = 'Read less'
        }
        else 
        {
            loadMoreBtn.innerText = 'Read more'
        }
    });
});

//---------side Menu----------


closeMenu.addEventListener('click' , (e)=>{
    console.log('Close menu clicked');
    sideMenu.style.right = "-200px";
})
showMenu.addEventListener('click' , (e)=>{
    console.log('Show menu clicked');
    sideMenu.style.right = "0px";
})

