const selectElement = document.querySelector('#breed');
const imageContainer = document.querySelector('#image-container');
const buttonElement = document.querySelector('#show-image');
let imageElement = null;

fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message);

    breeds.forEach(breed => {
      const optionElement = document.createElement('option');
      optionElement.value = breed;
      optionElement.textContent = breed;
      selectElement.appendChild(optionElement);
    });
  });

buttonElement.addEventListener('click', () => {
  const breed = selectElement.value;

  if (breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => {
        if (imageElement) {
          imageContainer.removeChild(imageElement);
        }

        imageElement = document.createElement('img');
        imageElement.src = data.message;
        imageContainer.appendChild(imageElement);
      });
  }
});
