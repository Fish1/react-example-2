import { useState, useEffect } from "react";
import { MeetupItemObj } from "../components/meetups/MeetupItem";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState<MeetupItemObj[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-example-2-default-rtdb.firebaseio.com/meetups.json")
    .then(response => {
      return response.json();
    }).then(data => {
      const meetups = [];
      for(const key in data) {
        const meetup = {
          id: key,
          title: data[key].title,
          imageURL: data[key].imageURL,
          address: data[key].address,
          description: data[key].description
        }
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);
 
  if(isLoading) {
    return <section>
      <p>Please wait... loading...</p>
    </section>;
  }

  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups}></MeetupList>
  </section>;
}

export default AllMeetupsPage;