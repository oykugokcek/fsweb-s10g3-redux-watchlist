import { ADD_FAV, NEXT_MOVIE, DEL_FAV } from "./actions";
import { movies } from "./movies";

const initialState = {
  movies: movies,
  favMovies: [],
  sira: 0,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE: {
      return {
        ...state,
        sira: state.sira + 1,
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
