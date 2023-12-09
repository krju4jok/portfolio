import i18Obj from "./translate.js";


const portfolioBtn = document.querySelectorAll(".season__button");
const portfolioImages = document.querySelectorAll(".portfolio-image");
const languages = document.querySelectorAll(".lang__button")


for (var i = 0 ; i < portfolioBtn.length; i++) {
    const season = portfolioBtn[i].dataset.season;
    
    portfolioBtn[i].addEventListener('click' , () => {
        console.log(season);
        for (var j = 0; j < portfolioImages.length; j++) {
            portfolioImages[j].src = `./images/${season}/${j + 1}.jpg`;
        };
        
    } ) ; 
}


languages.forEach( (lang) => {
    lang.addEventListener('click', (event) => {
        const currentLang = document.querySelector(".lang__button.active");
        
        currentLang.classList.remove('active');
        event.target.classList.add('active');
        getTranslate(event.target.textContent);

        }
    )}
)


function preloadSummerImages() {
    const seasons = ["winter", "spring", "summer", "autumn"];

    seasons.forEach( (seasonName) => {        
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./images/${seasonName}/${i}.jpg`;
        }
    });    
}

preloadSummerImages();

function changeClassActive(className) {
    let change = document.querySelectorAll(`.${className}`);
    
    change.forEach( (item) => {
        
        item.addEventListener('click', (event) => {
            const currentActive = document.querySelector(`.${className}.active`);

            currentActive.classList.remove('active');
            event.target.classList.add('active');
        })
    })
    
}

changeClassActive('season__button')

//document.querySelectorAll(".season__button").onclick = changeClassActive(".season__button")

function getTranslate(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach( (currentElement) => {
        currentElement.textContent = i18Obj[lang][currentElement.dataset.i18n];
    })
}



//getTranslate('ru')

