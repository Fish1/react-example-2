import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

class NewMeetupData {
  title: string = "";
  imageURL: string = "";
  address: string = "";
  description: string = "";
}

function NewMeetupPage() {

  const navigate = useNavigate();

  function addMeetupHandler(meetupData: NewMeetupData) {
    fetch("https://react-example-2-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      navigate("/", {
        replace: true
      });
    });
  }

  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>
}

export default NewMeetupPage;