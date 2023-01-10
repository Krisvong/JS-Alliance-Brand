var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let header = document.getElementById('tm-header')
    header.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introheader = document.getElementById('introheader')
    introheader.textContent = customerName;

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let whtToBlu = document.querySelectorAll('tm-white-rect')

    for(let i = 0; i < whtToBlu.length; i++){
        whtToBlu[i].classList.add('tm-blue-rect');
        whtToBlu[i].classList.remove('tm-white-rect')
    }

};

function hideElement() {
    let hideSocialLinks = document.querySelector('tm-social-links');
    hideSocialLinks.style.visibility = 'none';
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

};

 function addText() {
    let introheader = getElementById('introheader');
    introheader.textContent = 'Allliance';
    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intropara1 = getElementById('intropara1');
    intropara1.textContent = "Alliance was founded in 1931 by Albert Daniels";
   
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let intropara2 = getElementById('intropara2');
    intropara2.textContent = "The company is a leader in P.C. Manufacturing";

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
     let aboutPara1 = getElementById('aboutpara1');
     aboutPara1.textContent = "We deliver the best service this side of creation"

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let aboutPara2 = getElementById('aboutpara2');
    aboutPara2.textContent = "Our motto is satisfaction guaranteed"

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let addresspara = getElementById('addresspara');
    addresspara.textContent = "1-800-565-5656"
}; 



