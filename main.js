import './style.css'

const toggleLightModeButton = document.querySelector('.toggle-btn');
toggleLightModeButton.addEventListener('click', toggleLightMode);
console.log(toggleLightModeButton);

function toggleLightMode (){
    document.body.classList.toggle('darkmode')
    if (document.body.classList.contains('darkmode')){
        toggleLightModeButton.innerHTML='Välj ljust läge'
    } else {
        toggleLightModeButton.innerHTML ='Välj mörkt läge'
    }
    
}

async function getPodcasts() {
    return fetch('http://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false')
    .then((data) => data.json())
        .then((json) => json)
        .catch((error) => {
            console.error('nått blev fel:', error)
            return null;
        })
}
const podCasts = await getPodcasts ();

const podCastContainer = document.querySelector('.section__podlist-pods');

let i = 0;
podCasts.programs.forEach((podcast) => {
    i++
    const innerArticle = createInnerArticle();

    createImg();

    const textDiv = createTextDiv();

    createHeader();
    createP();
    createLink();

    function createInnerArticle() {
        const innerArticle = document.createElement('article');
        innerArticle.setAttribute('class', 'section__article-innerarticle');
        innerArticle.setAttribute('tabindex', '1')
        podCastContainer.appendChild(innerArticle);
        return innerArticle;
    }

    function createTextDiv() {
        const textDiv = document.createElement('div');
        textDiv.setAttribute('class', 'section__article-div');
        innerArticle.appendChild(textDiv);
        return textDiv;
    }

    function createLink (){
        const linkPlacement = document.createElement('a');
        const linkText = document.createTextNode('Lyssna här');
        linkPlacement.setAttribute('href', podCasts.programs[i].programurl);
        linkPlacement.setAttribute('tabindex', '1')
        linkPlacement.appendChild(linkText);
        textDiv.appendChild(linkPlacement)
    }
    function createImg() {
        const imgPlacement = document.createElement('IMG');
        imgPlacement.setAttribute('src', podCasts.programs[i].socialimage);
        imgPlacement.setAttribute('width', '100');
        imgPlacement.setAttribute('height', '100')
        innerArticle.appendChild(imgPlacement);
    }

    function createP() {
        const descPlacement = document.createElement('p');
        const desc = document.createTextNode(podCasts.programs[i].description);
        descPlacement.appendChild(desc);
        textDiv.appendChild(descPlacement);
    }

    function createHeader() {
        const headerPlacement = document.createElement('h2');
        const programName = document.createTextNode(podCasts.programs[i].name);
        headerPlacement.appendChild(programName);
        textDiv.appendChild(headerPlacement);
    }
    
})

