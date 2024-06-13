import userData from "../userData.json";
import Profile from "../components/Profile/Profile";

export default function App() {
  return (
    <>
      <h1>React is amazing!</h1>

      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      
      {/* <OfficerList items={officers} /> */}
    </>
  );
}