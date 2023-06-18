const pets = [
    {
      id: 1,
      name: "Charlie",
      species: "Dog",
      age: 3,
      breed: "Black dog",
      description: "Charlie is a friendly and energetic dog. He loves playing fetch and going for long walks.",
      image: "https://picsum.photos/id/237/400/320.jpg",
      evaluation: "Charlie is loved by many netizens for his playful and friendly nature. He is often praised for his adorable appearance and lively personality.",
      rating: null
    },
    {
      id: 2,
      name: "Lucky",
      species: "Dog",
      age: 5,
      breed: "Husky",
      description: "Lucky is a calm and independent dog. She enjoys napping and being groomed.",
      image: "https://images.dog.ceo/breeds/husky/n02110185_7044.jpg",
      evaluation: "Lucky is a beloved member of the family. Many people admire her calm temperament and beautiful appearance.",
      rating: null
    }
  ];
  
  const petsContainer = document.getElementById('pets');

  pets.forEach(pet => {
    const petElement = document.createElement('div');
    petElement.classList.add('pet');
  
    const petImage = document.createElement('img');
    petImage.src = pet.image;
    petImage.alt = pet.name;
  
    const petDetails = document.createElement('div');
    petDetails.classList.add('pet-details');
  
    const petName = document.createElement('h2');
    petName.textContent = pet.name;
    petName.classList.add('pet-description');
  
    const petSpecies = document.createElement('p');
    petSpecies.textContent = `Species: ${pet.species}`;
    petSpecies.classList.add('pet-description');
  
    const petAge = document.createElement('p');
    petAge.textContent = `Age: ${pet.age}`;
    petAge.classList.add('pet-description');
  
    const petBreed = document.createElement('p');
    petBreed.textContent = `Breed: ${pet.breed}`;
    petBreed.classList.add('pet-description');
  
    const petDescription = document.createElement('p');
    petDescription.textContent = pet.description;
    petDescription.classList.add('pet-description');
  
    const evaluationButton = document.createElement('button');
    evaluationButton.textContent = 'Netizen evaluation';
    evaluationButton.classList.add('evaluation-button');
  
    const evaluation = document.createElement('p');
    evaluation.textContent = pet.evaluation;
    evaluation.classList.add('pet-description', 'hidden');
  
    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('rating-container');
  
    const ratingInput = document.createElement('input');
    ratingInput.type = 'number';
    ratingInput.min = '1';
    ratingInput.max = '5';
    ratingInput.placeholder = 'Enter rating (1-5)';
  
    const ratingButton = document.createElement('button');
    ratingButton.textContent = 'Submit';
  
    const ratingMessage = document.createElement('p');
    ratingMessage.classList.add('rating-message', 'hidden');
  
    ratingContainer.appendChild(ratingInput);
    ratingContainer.appendChild(ratingButton);
    ratingContainer.appendChild(ratingMessage);
  
    petElement.appendChild(petImage);
    petDetails.appendChild(petName);
    petDetails.appendChild(petSpecies);
    petDetails.appendChild(petAge);
    petDetails.appendChild(petBreed);
    petDetails.appendChild(petDescription);
    petDetails.appendChild(evaluationButton);
    petDetails.appendChild(evaluation);
    petElement.appendChild(petDetails);
    petElement.appendChild(ratingContainer);
  
    evaluationButton.addEventListener('click', (event) => {
      event.stopPropagation();
      evaluation.classList.toggle('show');
    });
  
    petElement.addEventListener('click', () => {
      petDescription.classList.toggle('show');
      evaluationButton.classList.toggle('show');
    });
  
    ratingButton.addEventListener('click', () => {
      const rating = parseInt(ratingInput.value);
      if (isNaN(rating) || rating < 1 || rating > 5) {
        ratingMessage.textContent = 'Please enter a valid rating between 1 and 5.';
        ratingMessage.classList.add('error');
      } else {
        pet.rating = rating;
        ratingMessage.textContent = `Thank you for rating ${pet.name} with ${rating} stars!`;
        ratingMessage.classList.remove('error');
      }
      ratingMessage.classList.remove('hidden');
      ratingInput.value = '';
    });
  
    petsContainer.appendChild(petElement);
  });