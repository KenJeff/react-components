export default function ProfileCard({ gov, role, location, color }) {
  return (
    <>
      <div className={color}></div>
      <h2>{gov}</h2>
      <p>{role}</p>
      <p>{location}</p>
    </>
  );
}
