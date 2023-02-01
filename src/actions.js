export const NEXT_MOVIE = "next-movie";
export const ADD_FAV = "add-fav";
export const DEL_FAV = "del-fav";

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const addFav = (movie) => {
  return { type: ADD_FAV, payload: movie };
};

export const delFav = (id) => {
  return { type: DEL_FAV, payload: id };
};
