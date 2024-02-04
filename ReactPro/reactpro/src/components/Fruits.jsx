import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    {
      name: "Apple",
      price: 10.0,
    },
    {
      name: "Orange",
      price: 10.0,
    },
    {
      name: "Banana",
      price: 5.0,
    },
    {
      name: "Grape",
      price: 6.0,
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
