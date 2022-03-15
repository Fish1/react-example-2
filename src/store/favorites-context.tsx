import { createContext, useState } from "react";
import { MeetupItemObj } from "../components/meetups/MeetupItem"

class FavoritesObj {
  favorites!: MeetupItemObj[];
  totalFavorites!: number;
  addFavoriteHandler!: Function;
  removeFavoriteHandler!: Function;
  itemIsFavoriteHandler!: Function;

  constructor(favorites: MeetupItemObj[], totalFavorites: number) {
    this.favorites = favorites;
    this.totalFavorites = totalFavorites;
  }
}

const FavoritesContext = createContext(new FavoritesObj([], 0));

export function FavoritesContextProvider(props: {children: JSX.Element | JSX.Element[]}) {

  const [userFavorites, setUserFavorites] = useState<MeetupItemObj[]>([]);

  function addFavoriteHandler(newFavorite: MeetupItemObj) {
    setUserFavorites(prevUserFavorites =>
      prevUserFavorites.concat(newFavorite));
  }

  function removeFavoriteHandler(meetupId: string) {
    setUserFavorites(prevUserFavorites =>
      prevUserFavorites.filter(meetup =>
        meetup.id !== meetupId));
  }

  function itemIsFavoriteHandler(meetupId: string) {
    return userFavorites.some(meetup =>
       meetup.id === meetupId);
  }

  const context = new FavoritesObj(userFavorites, userFavorites.length);
  context.addFavoriteHandler = addFavoriteHandler;
  context.removeFavoriteHandler = removeFavoriteHandler;
  context.itemIsFavoriteHandler = itemIsFavoriteHandler;

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;