const pets = [
    {
        id: 1,
        name: "Charlie",
        species: "Dog",
        age: 3,
        breed: "Black dog",
        description: "Charlie is a friendly and energetic dog. He loves playing fetch and going for long walks.",
        image: "https://picsum.photos/id/237/400/320.jpg"
    },
    {
        id: 2,
        name: "lucky",
        species: "Dog",
        age: 5,
        breed: "husky",
        description: "lucky is a calm and independent dog. She enjoys napping and being groomed.",
        image: "https://images.dog.ceo/breeds/husky/n02110185_7044.jpg"
    }
];

const petsContainer = document.getElementById('pets');

pets.forEach(pet => {
    const petElement = document.createElement('div');
    petElement.classList.add('pet');

    const petImage = document.createElement('img');
    petImage.src = pet.image;
    petImage.alt = pet.name;

    const petName = document.createElement('h2');
    petName.textContent = pet.name;
    petName.classList.add('pet-description');

    const petSpecies = document.createElement('p');
    petSpecies.textContent = `Species: ${pet.species}`;
    petSpecies.classList.add('pet-description');

    const petDetails = document.createElement('div');
    petDetails.classList.add('pet-details');

    const petAge = document.createElement('p');
    petAge.textContent = `Age: ${pet.age}`;
    petAge.classList.add('pet-description');

    const petBreed = document.createElement('p');
    petBreed.textContent = `Breed: ${pet.breed}`;
    petBreed.classList.add('pet-description');

    const petDescription = document.createElement('p');
    petDescription.textContent = pet.description;
    petDescription.classList.add('pet-description');

    petElement.appendChild(petImage);
    petDetails.appendChild(petName);
    petDetails.appendChild(petSpecies);
    petDetails.appendChild(petAge);
    petDetails.appendChild(petBreed);
    petDetails.appendChild(petDescription);
    petElement.appendChild(petDetails);

    petElement.addEventListener('click', () => {
        petDescription.classList.toggle('show');
        petAge.classList.toggle('show');
        petBreed.classList.toggle('show');
        petName.classList.toggle('show');
        petSpecies.classList.toggle('show');
    });

    petsContainer.appendChild(petElement);
});
