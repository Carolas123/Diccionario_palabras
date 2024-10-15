const dictionary = {
    "computadora": ["ordenador", "PC"],
    "monitor": ["pantalla", "display"],
    "teclado": ["keyboard", "claviatura"],
    "ratón": ["mouse", "puntero"],
    "impresora": ["printer", "dispositivo de impresión"],
    "altavoces": ["bocinas", "parlantes"],
    "auriculares": ["cascos", "audífonos"],
    "micrófono": ["micro", "transductor de sonido"],
    "cámara": ["webcam", "cámara web"],
    "disco duro": ["HDD", "unidad de almacenamiento"],
    "memoria RAM": ["RAM", "memoria volátil"],
    "tarjeta gráfica": ["GPU", "aceleradora de gráficos"],
    "procesador": ["CPU", "unidad central de procesamiento"],
    "placa base": ["motherboard", "tarjeta madre"],
    "fuente de alimentación": ["PSU", "alimentador eléctrico"]
};

const userInput = document.getElementById('userInput');
const searchWord = document.getElementById('searchWord');
const synonymSelect = document.getElementById('synonymSelect');
const resultMessage = document.getElementById('resultMessage');
const synonymsContainer = document.getElementById('synonymsContainer');
const replaceButton = document.getElementById('replaceButton');

document.getElementById('searchButton').addEventListener('click', () => {
    const search = searchWord.value.toLowerCase();

    if (dictionary[search]) {
        synonymSelect.innerHTML = ''; // Limpiar el select
        dictionary[search].forEach(synonym => {
            const option = document.createElement('option');
            option.value = synonym;
            option.textContent = synonym;
            synonymSelect.appendChild(option);
        });

        synonymsContainer.classList.remove('d-none');
        replaceButton.classList.remove('d-none');
        resultMessage.textContent = '';
    } else {
        synonymsContainer.classList.add('d-none');
        replaceButton.classList.add('d-none');
        resultMessage.textContent = `La palabra "${search}" no tiene sinónimos disponibles en el diccionario.`;
        resultMessage.classList.add('text-danger');
    }
});

replaceButton.addEventListener('click', () => {
    const inputText = userInput.value;
    const search = searchWord.value;
    const selectedSynonym = synonymSelect.value;

    if (inputText.includes(search)) {
        const newText = inputText.replace(new RegExp(search, 'gi'), selectedSynonym);
        userInput.value = newText;
        resultMessage.textContent = `La palabra "${search}" fue reemplazada por "${selectedSynonym}".`;
        resultMessage.classList.add('text-success');
    } else {
        resultMessage.textContent = `La palabra "${search}" no se encontró en el texto.`;
        resultMessage.classList.add('text-danger');
    }
});
