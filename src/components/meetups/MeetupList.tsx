import { MeetupItem, MeetupItemObj } from "./MeetupItem";

import classes from "./MeetupList.module.css";

function MeetupList(props: {meetups: MeetupItemObj[]}) {
  console.log(props.meetups);
  return (<ul className={classes.list}>
    {props.meetups.map((element) => 
      <MeetupItem
        title={element.title}
        imageURL={element.imageURL}
        address={element.address}
        description={element.description}
      />
    )}
    </ul>
  );
}

export default MeetupList;