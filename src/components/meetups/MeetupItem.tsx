import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

export class MeetupItemObj {
  title!: string;
  imageURL!: string;
  address!: string;
  description!: string;
}

export function MeetupItem(props: {title: string, imageURL: string, address: string, description: string}) {
  return (
    <li className={classes.listElement}>
      <Card>
      <h2 className={classes.header}>{props.title}</h2>
      <img className={classes.img} src={props.imageURL} alt=""/>
      <p><b>Address:</b> {props.address}</p>
      <p><b>Description:</b> {props.description}</p>
      <button>To Favorites</button>
      </Card>
    </li>
  );
}