import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { PaintingProps } from "../components/ItemSearch";
import { db } from "../firebase";
import { UserAuth } from "./AuthContext";

// Define the context value type
interface FavouritesContextType {
  addItemFavouritesSection: (item: PaintingProps) => Promise<void>;
  removeItemFavouritesSection: (itemId: number) => Promise<void>;
  favouritesSection: PaintingProps[];
}

// Initial state for the favourites section
const initFavouritesSection: PaintingProps[] = [];

// Create context with type
const FavouritesContext = createContext<FavouritesContextType | undefined>(
  undefined
);

// Function to get the initial state from localStorage
const getInitialState = (): PaintingProps[] => {
  const favouritesSection = localStorage.getItem("favouritesSection");
  return favouritesSection
    ? JSON.parse(favouritesSection)
    : initFavouritesSection;
};

// Provider component
const FavouritesContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favouritesSection, setFavouritesSection] =
    useState<PaintingProps[]>(getInitialState);
  const { user } = UserAuth();
  const itemPath = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    localStorage.setItem(
      "favouritesSection",
      JSON.stringify(favouritesSection)
    );
  }, [favouritesSection]);

  const addItemFavouritesSection = async (item: PaintingProps) => {
    if (user?.email) {
      setFavouritesSection((prev) => {
        // Ensure `prev` is an array before spreading
        const newFavouritesSection = Array.isArray(prev)
          ? [...prev, item]
          : [item];
        localStorage.setItem(
          "favouritesSection",
          JSON.stringify(newFavouritesSection)
        );
        return newFavouritesSection;
      });
      await updateDoc(itemPath, {
        favourites: arrayUnion(item),
      });
    } else {
      alert("Please sign in to save an item to your favourites");
    }
  };

  const removeItemFavouritesSection = async (itemId: number) => {
    setFavouritesSection((prev) => {
      // Ensure `prev` is an array before filtering
      const updatedFavourites = Array.isArray(prev)
        ? prev.filter((p) => p.id !== itemId)
        : [];
      localStorage.setItem(
        "favouritesSection",
        JSON.stringify(updatedFavourites)
      );
      return updatedFavourites;
    });
    try {
      await updateDoc(itemPath, {
        favourites: arrayUnion(
          ...favouritesSection.filter((f) => f.id !== itemId)
        ),
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        addItemFavouritesSection,
        removeItemFavouritesSection,
        favouritesSection,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

// Custom hook to use the context
export const useFavouritesSection = (): FavouritesContextType => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error(
      "useFavouritesSection must be used within a FavouritesContextProvider"
    );
  }
  return context;
};

export default FavouritesContextProvider;
