import { useContext } from "react";
import { AppContext } from "../context/app.context";
import { Card } from "../card/Card";

export function List() {
  const {
    simpsonsContext: { simpsons },
  } = useContext(AppContext);

  return (
    <ul className="simpsons">
      {simpsons.map((item) => (
        <Card item={item} key={item.nombre}></Card>
      ))}
    </ul>
  ); 
}
