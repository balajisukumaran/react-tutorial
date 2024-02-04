function logClick() {
  console.log("Clicked");
}

export default function Button() {
  return <button onClick={logClick}>Click here to log</button>;
}
