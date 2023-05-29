import { useSimpsons } from "../hooks/use.simpsons";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    simpsonsContext: useSimpsons(),
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
