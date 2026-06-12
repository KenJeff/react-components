export default function TeamCard({ name, role, bio }) {
  return (
    <div class="card">
      <img
        class="card-img-top bg-warning"
        alt="This is where an image would go"
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-subtitle">{role}</h6>
        <p class="card-text">{bio}</p>
      </div>
    </div>
  );
}
