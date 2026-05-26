export default function Hello(props) {
  //   const name = "Kendall";
  if (props.name) {
    return <h1>Hello {props.name}</h1>;
  } else {
    return <h1>Hello Guest</h1>;
  }
}
