import { FormEvent, MutableRefObject, useRef } from "react";
import Card from "../ui/Card";

import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props: {onAddMeetup: Function}) {

  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = titleRef.current?.value;
    const imageURL = imageRef.current?.value;
    const address = addressRef.current?.value;
    const description = descriptionRef.current?.value;

    const meetupData = {
      title: title,
      imageURL: imageURL,
      address: address,
      description: description
    }

    props.onAddMeetup(meetupData);
  }

  return <div className={classes.container}><Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" ref={titleRef} required></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" ref={imageRef} required></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input id="text" type="text" ref={addressRef} required></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={descriptionRef} required></textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </Card>
  </div>
}

export default NewMeetupForm;