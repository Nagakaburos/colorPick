const form = document.querySelector('form');
const input = document.querySelector('.input');
const replaceImages =() =>{
    const images = document.querySelectorAll('img'); //muda a imagem da pagina
    images.forEach((image) => image.src = input.value);

    document.body.style.background = 'black'; //muda a cor do fundo da pagina
}
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    alert('"Eu juro solenemente não fazer nada de bom"'); // da pop up de ativação
    document.body.style.background = 'black'; // muda a cor da borda da janela

    const [tab] = await chrome.tabs.query({ active: true,currentWindow: true});

    chrome.scripting.executeScript({
        target: {tabId: tab.id },
        function:replaceImages,

    });


});