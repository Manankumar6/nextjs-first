import { useEffect, useState } from 'react';

const MovingCircle = ({ count = 5 }) => {
  // Function to generate random values for direction and size
  const getRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 100) + 1;  // Random X between 1% and 100%
    const randomY = Math.floor(Math.random() * 100) + 1;  // Random Y between 1% and 100%
    const randomSize = Math.floor(Math.random() * 150) + 50;  // Random size for circle
    return { x: randomX, y: randomY, size: randomSize };
  };

  // Function to apply random movement to the circle
  const applyRandomAnimation = (index) => {
    const circle = document.querySelector(`.circle-${index}`);

    // Get random values for X, Y position and size
    const randomPos = getRandomPosition();

    // Update the keyframe for the circle's animation with random values
    const keyframes = `
      @keyframes moveCircle${index} {
        0% {
          transform: translate(${randomPos.x}vw, ${randomPos.y}vh);
          opacity: 0;
        }
        100% {
          transform: translate(${randomPos.x + 20}vw, ${randomPos.y + 20}vh); /* Move slightly */
          opacity: 1;
        }
      }
    `;

    // Append the new keyframe animation dynamically to the head of the document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Apply the infinite, linear animation without restarting
    circle.style.animation = `moveCircle${index} 30s linear infinite`;  // Infinite loop
    circle.style.width = `${randomPos.size}px`;
    circle.style.height = `${randomPos.size}px`;
  };

  // Apply the animation on component mount
  useEffect(() => {
    // Apply random movement for each circle
    for (let i = 0; i < count; i++) {
      applyRandomAnimation(i);
    }
  }, [count]);

  // Generate multiple circles
  const circles = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`circle circle-${index} absolute bg-blue-500/20 rounded-full z-0`}
      style={{ position: 'absolute' }}
    />
  ));

  return <>{circles}</>;
};

export default MovingCircle;
