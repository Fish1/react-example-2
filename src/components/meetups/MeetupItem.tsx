import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

import { useContext } from "react";
import FavoritesContext from '../../store/favorites-context';

export class MeetupItemObj {
  id!: string;
  title!: string;
  imageURL!: string;
  address!: string;
  description!: string;

  constructor(parms: {id: string, title: string, imageURL: string, address: string, description: string}) {
    this.id = parms.id;
    this.title = parms.title;
    this.imageURL = parms.imageURL;
    this.address = parms.address;
    this.description = parms.description;
  }
}

export function MeetupItem(props: {id: string, title: string, imageURL: string, address: string, description: string}) {

  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.itemIsFavoriteHandler(props.id);

  console.log(favoritesContext.favorites);

  function toggleFavoriteStatusHandler() {
    if(itemIsFavorite) {
      favoritesContext.removeFavoriteHandler(props.id);
    } else {
      favoritesContext.addFavoriteHandler(new MeetupItemObj({
        id: props.id,
        title: props.title,
        imageURL: props.imageURL,
        address: props.address,
        description: props.description
      }));
    }
  }

  return (
    <li className={classes.listElement}>
      <Card>
      <img className={classes.img} src={props.imageURL} alt=""/>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.address}>{props.address}</p>
      <p>{props.description}</p>
      <button className={classes.button} onClick={toggleFavoriteStatusHandler}>
          {itemIsFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
      </Card>
    </li>
  );
}