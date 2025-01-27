import battleship from '../imgs/battleship.png';
import tictactoe from '../imgs/tic-tac-toe.png';
import aztecKitchen from '../imgs/aztecan-kitchen.png';
import todo from '../imgs/todo.png';
import etchASketch from '../imgs/etch-a-skecth.png';
import blueBg from '../imgs/cool-background.png';
import algos from '../imgs/algos.png';
import resumeBuilder from '../imgs/resume-builder.png';

const projects = [
  {
    projName: 'Resume Builder', 
    screenShotLink: resumeBuilder,
    gitLink: 'https://github.com/jehuzepedasilva2/cv-app',
    liveLink: 'https://cv-app-dd8.pages.dev/', 
    description: 'This interface allows you to customize your resume quickly and easily, with all changes appearing in real-time. Once you’re satisfied with your resume, you can proceed to download it! Created with React'
  },
  {
    projName: 'Battleship',
    screenShotLink: battleship,
    gitLink: 'https://github.com/jehuzepedasilva2/battleship', 
    liveLink: 'https://jehuzepedasilva2.github.io/battleship/',
    description: 'Test your strategy and precision with this interactive Battleship game! Built entirely with HTML, CSS, and JavaScript, this game offers a sleek and engaging experience where players can challenge themselves to sink all enemy ships on a classic grid-based battlefield.'
  }, 
  {
    projName: 'Todo List', 
    screenShotLink: todo,
    gitLink: 'https://github.com/jehuzepedasilva2/todo-list', 
    liveLink: 'https://jehuzepedasilva2.github.io/todo-list/', 
    description: 'This responsive Todo List application provides an intuitive and visually appealing interface for managing tasks efficiently. Featuring a dark and light mode!'
  }, 
  {
    projName: 'Tic-Tac-Toe', 
    screenShotLink: tictactoe,
    gitLink: 'https://github.com/jehuzepedasilva2/tic-tac-toe', 
    liveLink: 'https://jehuzepedasilva2.github.io/tic-tac-toe/', 
    description: 'Challenge yourself or a friend to this timeless 2-player strategy game, now in a sleek and interactive web version. Built with a clean and responsive interface, this game delivers a smooth experience on desktop.'
  }, 
  {
    projName: 'Restaurant Page', 
    screenShotLink: aztecKitchen,
    gitLink: 'https://github.com/jehuzepedasilva2/restaurant-page', 
    liveLink: 'https://jehuzepedasilva2.github.io/restaurant-page/', 
    description: 'Enter the delicious world of this fictitious restaurant. The Aztecan Kitchen!'
  }, 
  {
    projName: 'Etch-a-Sketch', 
    screenShotLink: etchASketch, 
    gitLink: 'https://github.com/jehuzepedasilva2/etch-a-sketch',
    liveLink: 'https://jehuzepedasilva2.github.io/etch-a-sketch/',
    description: 'A fun and interactive digital Etch-A-Sketch application built with HTML, CSS, and JavaScript. Users can draw on a customizable grid, adjust the grid size, and experiment with various drawing modes'
  }, 
  {
    projName: "DSA in JavaScript", 
    screenShotLink: algos, 
    gitLink: 'https://github.com/jehuzepedasilva2/data-structures-js',
    liveLink: null, 
    description: 'Implementation of important algorithms and data structures. Done in JavaScript.'
  }
]

export default projects;