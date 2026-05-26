export default function Light({ current }) {
  return (
    <div
      style={{
        marginTop: 100,
        color: current,
        border: `solid 1px ${current}`,
      }}
    >
      <h1 style={{ color: current }}>Current Light:</h1>
      <p>{current}</p>
    </div>
  );
}
