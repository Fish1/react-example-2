import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  const favoritesContext = useContext(FavoritesContext);

  const hasFavorites = favoritesContext.totalFavorites !== 0;
  const totalFavorites = favoritesContext.totalFavorites;

  const favoritesCounter = hasFavorites ? " (" + totalFavorites + ")" : "";

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div>
        <ul>
          <li key="1"><Link to='/'>All Meetups</Link></li>
          <li key="2"><Link to='/new-meetup'>New Meetup</Link></li>
          <li key="3"><Link to='/favorites'>Favorites {favoritesCounter}</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;