// script.js

// Helper function to generate a random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  // Change year color every second
  const yearElement = document.getElementById('year');
  setInterval(() => {
    yearElement.style.color = getRandomColor();
  }, 1000);
  
  // Display date and time and change its background color every second
  const dateTimeElement = document.getElementById('date-time');
  const updateDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    dateTimeElement.textContent = `${date} ${time}`;
    dateTimeElement.style.backgroundColor = getRandomColor();
  };
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initialize immediately
  
  // Apply background colors to challenges based on their status
  const completedChallenges = document.querySelectorAll('.completed');
  const ongoingChallenges = document.querySelectorAll('.ongoing');
  const comingChallenges = document.querySelectorAll('.coming');
  
  completedChallenges.forEach(challenge => {
    challenge.style.backgroundColor = 'green';
  });
  
  ongoingChallenges.forEach(challenge => {
    challenge.style.backgroundColor = 'yellow';
  });
  
  comingChallenges.forEach(challenge => {
    challenge.style.backgroundColor = 'red';
  });
  