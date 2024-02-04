import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const flag = true;

  let message;

  if (flag) {
    message = <Code />;
  } else {
    message = <Welcome />;
  }

  return message;
}
