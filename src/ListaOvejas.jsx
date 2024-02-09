export const ListaOvejas = ({ imagenes }) => {
  return (
    <ul className="image__list">
      {imagenes.map((item, index) => {
        return (
          <li key={index}>
            <img className="sheep__img" src={item} alt="A sheep" />
          </li>
        );
      })}
    </ul>
  );
};
