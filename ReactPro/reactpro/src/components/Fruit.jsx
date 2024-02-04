export default function Fruit({ fruit }) {
  return (
    <li key={fruit.key}>
      {fruit.name} ${fruit.price}
    </li>
  );
}
