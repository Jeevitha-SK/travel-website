const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Search Function

const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    cards.forEach(function(card){

        const place = card.getAttribute("data-name");

        if(place.includes(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});
// Contact Form Validation

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const destination = document.getElementById("destination").value;

    if(name === "" || email === "" || phone === "" || destination === ""){
        alert("Please fill all the required fields.");
    }
    else{
        alert("Your booking request has been submitted successfully!");
        form.reset();
    }

});
function showDetails(place){

    const title = document.getElementById("popup-title");
    const text = document.getElementById("popup-text");
    const popup = document.getElementById("popup");

    if(place === "Goa"){
        title.innerHTML = "Goa";
        text.innerHTML = "Beautiful beaches, water sports, nightlife and seafood. Best time: November to February.";
    }

    else if(place === "Ooty"){
        title.innerHTML = "Ooty";
        text.innerHTML = "Tea gardens, cool climate, toy train and beautiful hills. Best time: October to June.";
    }

    else{
        title.innerHTML = "Kerala";
        text.innerHTML = "Backwaters, houseboats, hill stations and traditional culture. Best time: September to March.";
    }

    popup.style.display = "block";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}
function bookPackage(place){

    document.getElementById("destination").value = place;

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

}
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

}

function scrollToTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question){

    question.addEventListener("click", function(){

        const answer = this.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }else{
            answer.style.display = "block";
        }

    });

});