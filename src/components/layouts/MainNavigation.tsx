import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div>
        <ul>
          <li key="1"><Link to='/'>All Meetups</Link></li>
          <li key="2"><Link to='/new-meetup'>New Meetup</Link></li>
          <li key="3"><Link to='/favorites'>Favorites</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default MainNavigation;