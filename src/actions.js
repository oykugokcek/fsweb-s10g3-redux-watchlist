export const NEXT_MOVIE = "next-movie";
export const PREV_MOVIE = "previous-movie";
export const FIRST_MOVIE = "previous-movie";
export const DISABLE_BUTTON = "disable-button";
export const ADD_FAV = "add-fav";
export const DEL_FAV = "del-fav";

export const prevMovie = () => {
  return { type: PREV_MOVIE };
};
export const firstMovie = () => {
  return { type: FIRST_MOVIE };
};
export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};
export const disableButton = () => {
  return { type: DISABLE_BUTTON };
};

export const addFav = (movie) => {
  return { type: ADD_FAV, payload: movie };
};

export const delFav = (id) => {
  return { type: DEL_FAV, payload: id };
};
