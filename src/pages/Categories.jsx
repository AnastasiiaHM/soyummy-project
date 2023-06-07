const Categories = () => {
  return (
    <Container>
      <h1>Categories</h1>
      <ul>
        <li>
          <button type="button">Beef</button>
        </li>
        <li>
          <button type="button">Breakfast</button>
        </li>
        <li>
          <button type="button">Chicken</button>
        </li>
        <li>
          <button type="button">Desserts</button>
        </li>
        <li>
          <button type="button">Goat</button>
        </li>
        <li>
          <button type="button">Lamb</button>
        </li>
        <li>
          <button type="button">Miscellaneous</button>
        </li>
        <li>
          <button type="button">Pasta</button>
        </li>
        <li>
          <button type="button">Pork</button>
        </li>
        <li>
          <button type="button">Seafood</button>
        </li>
        <li>
          <button type="button">Side</button>
        </li>
      </ul>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${recipe.img_path}`}
                alt={recipe.title}
              />
              <h3>{recipe.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
