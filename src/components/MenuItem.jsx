export default function MenuItem(props) {
  return (
    <div>
      <h1>{props.dishName}</h1>
      <p>{props.description}</p>
      <span>{props.price}</span>
    </div>
  );
}
