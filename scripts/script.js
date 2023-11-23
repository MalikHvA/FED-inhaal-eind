// JavaScript Document
console.log("hi");


// header


// openen van het hamburger menu

// stap 1: zoek de menu-button op en sla deze op in een variabele
var openButton = document.querySelector("header nav:nth-of-type(1) button:nth-of-type(2)");
var hetMenu = document.querySelector("header nav:nth-of-type(2)");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {
    hetMenu.classList.add("open");
}

// sluiten van het hamburger menu

// stap 1: zoek de sluit-button op
var closeButton = document.querySelector("header nav:nth-of-type(2) section button:nth-of-type(2)");

// stap 2: laat de button luisteren naar de kliks
closeButton.onclick = closeMenu;

// stap 3: verwijder de class van de nav in de functie
function closeMenu() {
    hetMenu.classList.remove("open");
}

// openen/sluiten van het header menu "sections"

// stap 1: zoek de header "sections" button en sla deze op in een variabele
var openSectionsHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(2) ul:nth-of-type(1) > li");
var tabSectionsHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(2) ul:nth-of-type(2)");

// stap 2: laat de footer "sections" button 
// luisteren naar kliks en voer dan een functie uit
openSectionsHeader.onclick = displaySectionsHeader;

// stap 3: voeg in de functie een class toe aan de nav
function displaySectionsHeader() {
    tabSectionsHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "video's"

var openVideosHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(3) ul:nth-of-type(1) > li");
var tabVideosHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(3) ul:nth-of-type(2)");

openVideosHeader.onclick = displayVideosHeader;

function displayVideosHeader() {
    tabVideosHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "brands"

var openBrandsHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(4) ul:nth-of-type(1) > li");
var tabBrandsHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(4) ul:nth-of-type(2)");

openBrandsHeader.onclick = displayBrandsHeader;

function displayBrandsHeader() {
    tabBrandsHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "shop"

var openShopHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(6) ul:nth-of-type(1) > li");
var tabShopHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(1) li:nth-of-type(6) ul:nth-of-type(2)");

openShopHeader.onclick = displayShopHeader;

function displayShopHeader() {
    tabShopHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "location"

var openLocationHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(1) ul:nth-of-type(1) > li");
var tabLocationHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(1) ul:nth-of-type(2)");

openLocationHeader.onclick = displayLocationHeader;

function displayLocationHeader() {
    tabLocationHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "account"

var openAccountHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(2) ul:nth-of-type(1) > li");
var tabAccountHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(2) ul:nth-of-type(2)");

openAccountHeader.onclick = displayAccountHeader;

function displayAccountHeader() {
    tabAccountHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "more"

var openMoreHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(3) ul:nth-of-type(1) > li");
var tabMoreHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(3) ul:nth-of-type(2)");

openMoreHeader.onclick = displayMoreHeader;

function displayMoreHeader() {
    tabMoreHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "elsewhere"

var openElsewhereHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(4) ul:nth-of-type(1) > li");
var tabElsewhereHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(4) ul:nth-of-type(2)");

openElsewhereHeader.onclick = displayElsewhereHeader;

function displayElsewhereHeader() {
    tabElsewhereHeader.classList.toggle("open");
}

// openen/sluiten van het header menu "follow hypebeast"

var openFollowHypebeastHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(5) ul:nth-of-type(1) > li");
var tabFollowHypebeastHeader = document.querySelector("header nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(5) ul:nth-of-type(2)");

openFollowHypebeastHeader.onclick = displayFollowHypebeastHeader;

function displayFollowHypebeastHeader() {
    tabFollowHypebeastHeader.classList.toggle("open");
}



// --------------------------------------------------------------------



// footer


// openen/sluiten van het footer menu "sections"

// stap 1: zoek de footer "sections" button en sla deze op in een variabele
var openSections = document.querySelector("footer ul li:nth-of-type(1) ul:nth-of-type(1) li");
var tabSections = document.querySelector("footer ul li:nth-of-type(1) ul:nth-of-type(2)");

// stap 2: laat de footer "sections" button 
// luisteren naar kliks en voer dan een functie uit
openSections.onclick = displaySections;

// stap 3: voeg in de functie een class toe aan de nav
function displaySections() {
    tabSections.classList.toggle("open");
}

// openen/sluiten van het footer menu "more"

var openMore = document.querySelector("footer ul li:nth-of-type(2) ul:nth-of-type(1) li");
var tabMore = document.querySelector("footer ul li:nth-of-type(2) ul:nth-of-type(2)");

openMore.onclick = displayMore;

function displayMore() {
    tabMore.classList.toggle("open");
}

// openen/sluiten van het footer menu "brands"

var openBrands = document.querySelector("footer ul li:nth-of-type(3) ul:nth-of-type(1) li");
var tabBrands = document.querySelector("footer ul li:nth-of-type(3) ul:nth-of-type(2");

openBrands.onclick = displayBrands;

function displayBrands() {
    tabBrands.classList.toggle("open");
}

// openen/sluiten van het footer menu "store"

var openStore = document.querySelector("footer ul li:nth-of-type(4) ul:nth-of-type(1) li");
var tabStore = document.querySelector("footer ul li:nth-of-type(4) ul:nth-of-type(2");

openStore.onclick = displayStore;

function displayStore() {
    tabStore.classList.toggle("open");
}

// openen/sluiten van het footer menu "elsewhere"

var openElsewhere = document.querySelector("footer ul li:nth-of-type(5) ul:nth-of-type(1) li");
var tabElsewhere = document.querySelector("footer ul li:nth-of-type(5) ul:nth-of-type(2");

openElsewhere.onclick = displayElsewhere;

function displayElsewhere() {
    tabElsewhere.classList.toggle("open");
}

// openen/sluiten van het footer menu "hypebeast"

var openHypebeast = document.querySelector("footer ul li:nth-of-type(6) ul:nth-of-type(1) li");
var tabHypebeast = document.querySelector("footer ul li:nth-of-type(6) ul:nth-of-type(2");

openHypebeast.onclick = displayHypebeast;

function displayHypebeast() {
    tabHypebeast.classList.toggle("open");
}