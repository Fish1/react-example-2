import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {

  const favoritesContext = useContext(FavoritesContext);

  const noFavorites = favoritesContext.totalFavorites === 0;

  return <section>
    <h1>Favorite Meetups</h1>
    {
    noFavorites ? 
    <p>No Favorites</p> :
    <MeetupList meetups={favoritesContext.favorites}></MeetupList>
    }
  </section>
}

export default FavoritesPage;