function Character({ name, image }) {
  return (
    <article className="Character">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </article>
  );
}

export default Character;
