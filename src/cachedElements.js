function getGitButton() {
  return document.querySelectorAll('.git-btn');
}

function getInstagramButton() {
  return document.querySelectorAll('.insta-btn');
} 

function getLinkedInButton() {
  return document.querySelectorAll('.linkedin-btn');
}

function getAnchors() {
  return document.querySelectorAll('a');
}

function getLightModeButtons() {
  return document.querySelectorAll('.mode');
}

function getCurrentLightMode() {
  return document.querySelector('.mode.vis2');
}

function getOtherLightMode() {
  return document.querySelector('.mode.other');
}

export {
  getGitButton, 
  getInstagramButton, 
  getLinkedInButton,
  getAnchors,
  getLightModeButtons, 
  getCurrentLightMode,
  getOtherLightMode,
}