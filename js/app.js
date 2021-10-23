let navList = document.getElementById("nav-list");
let [...sctions] = document.getElementsByClassName("section");
let	navItems = document.getElementsByClassName("nav-item");
let sctionsIds = sctions.map(sec => sec.id);
let navbarData = sctions.map(sec => sec.getAttribute("nav-data"));

let getSction = (sction) => {
	sction.preventDefault();
	let goal = sction.target.getAttribute("data-scroll-to");
	let el = document.querySelector(goal);
	el.scrollIntoView();
};

let checkIfInView = (el) => {
    let { top, bottom } = el.getBoundingClientRect();
		let screenHght = window.innerHeight || document.documentElement.clientHeight;
  	return bottom >= 0 && top <= screenHght
};

let activeSection = () => {
    sctions.map((section) => {
      window.addEventListener("scroll", (event) => {
        checkIfInView(section)
          ? section.classList.add("active-section")
          : section.classList.remove("active-section");
      });
    });
  };

  let createNavBar = (navbar, listItems, sctionIds) => {
	let frgment = document.createDocumentFragment();

	listItems.map((li, i) => {
	let newItem = document.createElement("li");

  newItem.textContent = li;
	newItem.classList.add("nav-item");
	newItem.addEventListener("click", getSction);
	newItem.setAttribute("data-scroll-to", `#${sctionIds[i]}`);

  frgment.appendChild(newItem);
  });

	navbar.appendChild(frgment);
};

createNavBar(navList, navbarData, sctionsIds);
activeSection()
