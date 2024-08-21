import { ReactNode } from "react";
import { AuthContextProvider } from "./AuthContext";
import FavouritesContextProvider from "./FavouritesContext";
import ScrollToTopContextProvider from "./ScrollToTopContext";
import ShoppingCartContextProvider from "./ShoppingCartContext";
import { ThemeProvider } from "./ThemeContext";

export const ContextProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>
    <AuthContextProvider>
      <FavouritesContextProvider>
        <ShoppingCartContextProvider>
          <ScrollToTopContextProvider>{children}</ScrollToTopContextProvider>
        </ShoppingCartContextProvider>
      </FavouritesContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
);
