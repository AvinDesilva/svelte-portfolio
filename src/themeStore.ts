import { writable } from 'svelte/store';

// Define an interface for the theme
interface Theme {
  primaryColor: string;
  secondaryColor: string;
}

// Define an array of theme color pairings
const colorPairings = [
  { primaryColor: '#FF8B8B', secondaryColor: '#F9F8E6' }, // Riviera
  { primaryColor: '#F9F7E8', secondaryColor: '#62BFAD' }, // Swan Dive
  { primaryColor: '#61BFAD', secondaryColor: '#FFFFFF' }, // Radio Silence
  { primaryColor: '#167C80', secondaryColor: '#FFFFFF' }, // Mr Business
  { primaryColor: '#EFE8D8', secondaryColor: '#FF4552' }, // Wes Sanderson
  { primaryColor: '#F3C9DD', secondaryColor: '#72AEC5' }, // Laundry Service
  { primaryColor: '#371722', secondaryColor: '#BBAB9B' }, // Sanctuary
  { primaryColor: '#E57066', secondaryColor: '#28292B' }, // Precious Ego
  { primaryColor: '#3B465C', secondaryColor: '#E9E8D4' }, // Dad's Wallet
];

// Set the initial theme using the Theme interface
const initialTheme: Theme = colorPairings[0];

// Create the writable store with the initial theme
export const theme = writable<Theme>(initialTheme);

// Variable to track the last selected index
let lastIndex = 0;

// Function to change the theme, ensuring no consecutive repeats
export function changeTheme() {
  let randomIndex;
  // Ensure the next random index is different from the last one
  do {
    randomIndex = Math.floor(Math.random() * colorPairings.length);
  } while (randomIndex === lastIndex);

  // Update lastIndex for the next iteration
  lastIndex = randomIndex;
  const selectedPairing = colorPairings[randomIndex];

  theme.set({
    primaryColor: selectedPairing.primaryColor,
    secondaryColor: selectedPairing.secondaryColor
  });
}
