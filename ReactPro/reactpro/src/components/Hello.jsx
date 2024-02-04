function Hello({ person }) {
  return (
    <h1>
      {person.message} {person.name} {person.numbers}
    </h1>
  );
}

export default Hello;
