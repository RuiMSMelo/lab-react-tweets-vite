import ProfileImage from "./ProfileImage"
import Timestamp from "./Timestamp";
import User from "./User"
import Message from "./Message"
import Actions from "./Actions";


function Tweet(tweet) {
  console.log('OBJECT: ', tweet)
  return (
    <div className="tweet">

      <ProfileImage image={tweet.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User user={tweet.tweet.user} />

          <Timestamp timestamp={tweet.tweet.timestamp} />
        </div>
          <Message message={tweet.tweet.message} />

          <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
