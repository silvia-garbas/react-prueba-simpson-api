import { Simpson } from "../model/simpson";

type PropsType = {
  item: Simpson;
  // handleLoad: (simspn: Simpson) => void;
};

export function Card({ item }: PropsType) {
  return (
    <li className="simpson">
      <span>{item.nombre}</span>
      <span>{item.imagen}</span>
      <img src={item.imagen} alt={item.imagen}></img>
    </li>
  );
}
