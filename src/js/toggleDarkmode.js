const toggleLightModeButton = document.querySelector('.toggle-btn');
toggleLightModeButton.addEventListener('click', toggleLightMode);
console.log(toggleLightModeButton);

export function toggleLightMode (){
    document.body.classList.toggle('darkmode')
    if (document.body.classList.contains('darkmode')){
        toggleLightModeButton.innerHTML='Välj mörkt läge'
    } else {
        toggleLightModeButton.innerHTML ='Välj ljust läge'
    }
    
}

export default toggleLightMode