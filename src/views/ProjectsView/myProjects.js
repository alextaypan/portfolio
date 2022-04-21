import iceCreamImg from '../../assets/images/previewProjects/iceCream.png';
import eventBoosterImg from '../../assets/images/previewProjects/eventBooster.png';
import webStudioImg from '../../assets/images/previewProjects/webStudio.png';
import imageFinder from '../../assets/images/previewProjects/imageFinder.png';
import moviesImg from '../../assets/images/previewProjects/moviesApp.png';
import phonebookImg from '../../assets/images/previewProjects/phoneBook.png';
import booksReadingImg from '../../assets/images/previewProjects/booksReading.png';

export const ownProjects = [
  {
    id: 'id-4',
    label: 'Phonebook',
    link: 'https://alex-phonebook-app.netlify.app/',
    repo: 'https://github.com/alextaypan/goit-react-hw-08-phonebook',
    preview: phonebookImg,
    info: 'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'Redux' },
      { id: 'id-5', name: 'AJAX' },
      { id: 'id-6', name: 'REST API' },
      { id: 'id-7', name: 'Axios' },
      { id: 'id-8', name: 'Bootstrap' },
    ],
  },
  {
    id: 'id-3',
    label: 'Movies',
    link: 'https://alex-movies-app.netlify.app/',
    repo: 'https://github.com/alextaypan/goit-react-hw-05-movies',
    preview: moviesImg,
    info: 'App for watching popular and searching films. The application uses themoviedb.org API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
    ],
  },
  {
    id: 'id-2',
    label: 'Image Finder',
    link: 'https://alextaypan.github.io/goit-react-hw-04-images/',
    repo: 'https://github.com/alextaypan/goit-react-hw-04-images',
    preview: imageFinder,
    info: 'Keyword search image app. The public image search service Pixabay was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
    ],
  },
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://alextaypan.github.io/goit-markup-hw-08/',
    repo: 'https://github.com/alextaypan/goit-markup-hw-08',
    preview: webStudioImg,
    info: 'Adaptive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
];

export const commandProjects = [
  {
    id: 'id-3',
    label: 'Reading books',
    repo: 'https://github.com/AndriiVV/goit-react-project-team2',
    preview: booksReadingImg,
    info: 'This app will help you to plan and read your favorite books.',
    link: 'https://creativers-readingbook-app.netlify.app/login/',
    tech: [
      { id: 'id-1', name: 'React.js' },
      { id: 'id-2', name: 'Redux' },
      { id: 'id-3', name: 'Axios' },
      { id: 'id-4', name: 'Chart.js' },
    ],
  },
  {
    id: 'id-2',
    label: 'Event Booster',
    repo: 'https://github.com/nessy126/js-event-project',
    preview: eventBoosterImg,
    info: 'Team project Event Booster - you can find popular events around the world.',
    link: 'https://nessy126.github.io/js-event-project/',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'AJAX' },
    ],
  },
  {
    id: 'id-1',
    label: 'Ice Cream',
    link: 'https://andriivv.github.io/goit-markup-project-01/',
    repo: 'https://github.com/AndriiVV/goit-markup-project-01',
    preview: iceCreamImg,
    info: 'Adaptive web page layout for Ice Cream - an online shop where you can order delecious ice cream.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Parcel' },
    ],
  },
];
