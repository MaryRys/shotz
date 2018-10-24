import {initialMovieView} from './components/movieComponent.js';
import { initialLocationsView } from './components/locationComponent.js';


const initializeApp = () => {
    initialMovieView();
    initialLocationsView();
};

initializeApp();