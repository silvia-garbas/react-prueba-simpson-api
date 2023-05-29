import { createContext } from "react";
import { useSimpsons } from "../hooks/use.simpsons";

export type Context = {
  simpsonsContext: ReturnType<typeof useSimpsons>;
};

export const AppContext = createContext<Context>({} as Context);
