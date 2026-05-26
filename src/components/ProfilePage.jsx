import ProfileCard from "./ProfileCard";

export default function ProfilePage() {
  return (
    <>
      <h1>Gallery of Images</h1>
      <ProfileCard
        gov="Kendall Jefferson"
        role="SWE"
        location="Columbus"
        color="red-box"
      />
      <ProfileCard
        gov="SpongeBob SquarePants"
        role="Clown"
        location="Bikini Bottom"
        color="yellow-box"
      />
      <ProfileCard
        gov="Bugs Bunny"
        role="Carrot Fanatic"
        location="Rabbit Hole"
        color="blue-box"
      />
    </>
  );
}
