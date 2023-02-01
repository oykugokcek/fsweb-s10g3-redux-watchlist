import {
  ADD_FAV,
  NEXT_MOVIE,
  DEL_FAV,
  PREV_MOVIE,
  FIRST_MOVIE,
  DISABLE_BUTTON,
} from "./actions";
import { movies } from "./movies";

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
  öncekiButtonEnable: false,
  sonrakiButtonEnable: true,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_MOVIE: {
      return {
        ...state,
        sira: 0,
      };
    }
    case NEXT_MOVIE: {
      return {
        ...state,
        sira: state.sira + 1,
      };
    }
    case PREV_MOVIE: {
      return {
        ...state,
        sira: state.sira - 1,
      };
    }

    case ADD_FAV: {
      let favMovie = action.payload;
      movies.splice(state.sira, 1);
      const newFavMovies = [...state.favMovies, favMovie];
      return {
        ...state,
        favMovies: newFavMovies,
      };
    }

    // case ADD_FAVORITES:
    //     let newMovie = action.payload;
    //     if (state.favorites.every((movie) => movie.id !== newMovie.id))
    //       return {
    //         ...state,
    //         favorites: [...state.favorites, newMovie],
    //       };

    //     console.log("reducer", newMovie);
    //     const newMovies = [...state.movies, newMovie];
    //     return {
    //       ...state,
    //       movies: newMovies,
    //     };

    case DISABLE_BUTTON: {
      return {
        ...state,
        öncekiButtonEnable: state.sira !== 0 ? true : false,
        sonrakiButtonEnable:
          state.sira === state.movies.length - 2 ? false : true,
      };
    }
    case DEL_FAV: {
      const newFavMovies = state.favMovies.filter(
        (favMovie) => action.payload !== favMovie.id
      );
      const favMovie = state.favMovies.find(
        (favMovie) => action.payload === favMovie.id
      );
      state.movies.push(favMovie);
      console.log("reducer newFavMovies=", newFavMovies);
      console.log("reducer newMovies=", movies);
      return {
        ...state,
        favMovies: newFavMovies,
      };
    }
    default:
      return state;
  }
}
