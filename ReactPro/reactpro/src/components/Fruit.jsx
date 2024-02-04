export default function Fruit({ fruit }) {
  return fruit.price < 7 ? (
    <li key={fruit.key}>
      {fruit.name} ${fruit.price}
    </li>
  ) : (
    ""
  );
}
