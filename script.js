 
var navHistory      = ["#home"];
var restrictedNav   = ["#electro","#iot","#webthing","#networkthing"];
function navigation() {
    if(!restrictedNav.includes(location.hash)){
        // Get nav hash
        navHistory.push(location.hash);
        // Process nav history
        handlePageNav();
    }else{
        // Probably card scroll
        var elem = document.getElementById( location.hash.replace("#","") );
        elem.scroll({top: elem,behavior: 'smooth'});
    }
}
// Register function to hash change event
window.onhashchange = navigation;


// Hide and show an element
function showDiv(el){el.style.display = 'block';}
function hideDiv(el){el.style.display = 'none';}
// Check viewport size
function isSmall(){if(Math.min(window.screen.width, window.screen.height) < 768){return true;}return false;}


function handlePageNav(){
    // Get the attribute of the buttons pushed
    var currentButton   = navHistory[navHistory.length-1].replace("#","");
    var lastButton      = navHistory[navHistory.length-2].replace("#","");

    // Get current and last page elements.
    var currentPage = document.getElementById( currentButton );
    var lastPage    = document.getElementById( lastButton );

    // Show current and hide last Page
    hideDiv(lastPage);  showDiv(currentPage);

    // Click on toggler if we are on a small screen
    if(isSmall()){document.getElementById("navToggler").click();}

    // Get the element of the buttons pushed
    var currPageButton = document.querySelector(`[navButton=${currentButton}]`);
    var lastPageButton = document.querySelector(`[navButton=${lastButton}]`);

    // Indicate active page by adding and removing the active class
    lastPageButton.classList.remove("navBtn-active");
    currPageButton.classList.add("navBtn-active");
}
