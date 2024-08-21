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
interface ShoppingCartContextProps {
  addItemShoppingCart: (item: PaintingProps) => Promise<void>;
  removeItemShoppingCart: (itemId: number) => Promise<void>;
  removeAllItemsShoppingCart: () => Promise<void>;
  numberOfUnitsAdd: (item: PaintingProps) => Promise<void>;
  numberOfUnitsRemove: (item: PaintingProps) => Promise<void>;
  shoppingCart: PaintingProps[];
}

// Initial state for the shopping cart
const initShoppingCart: PaintingProps[] = [];

// Create context with type
const ShoppingCartContext = createContext<ShoppingCartContextProps | undefined>(
  undefined
);

// Function to get the initial state from localStorage
const getInitialState = (): PaintingProps[] => {
  const shoppingCart = localStorage.getItem("shoppingCart");
  return shoppingCart ? JSON.parse(shoppingCart) : initShoppingCart;
};

// Provider component
const ShoppingCartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shoppingCart, setShoppingCart] =
    useState<PaintingProps[]>(getInitialState);
  const { user } = UserAuth();
  const itemPath = user ? doc(db, "users", `${user.email}`) : null;

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const addItemShoppingCart = async (item: PaintingProps) => {
    if (user?.email) {
      setShoppingCart((prev) => {
        if (!Array.isArray(prev)) {
          console.error("Shopping cart state is not an array");
          return initShoppingCart;
        }

        const existingItem = prev.find((p) => p.id === item.id);
        if (existingItem) {
          // If item already exists, update the quantity
          const updatedShoppingCart = prev.map((p) =>
            p.id === item.id
              ? { ...p, numberOfUnits: p.numberOfUnits + item.numberOfUnits }
              : p
          );
          localStorage.setItem(
            "shoppingCart",
            JSON.stringify(updatedShoppingCart)
          );
          return updatedShoppingCart;
        } else {
          // If item does not exist, add new item
          const updatedShoppingCart = [...prev, item];
          localStorage.setItem(
            "shoppingCart",
            JSON.stringify(updatedShoppingCart)
          );
          return updatedShoppingCart;
        }
      });

      if (itemPath) {
        await updateDoc(itemPath, {
          shoppingCart: arrayUnion({
            id: item.id,
            name: item.name,
            author: item.author,
            price: item.price,
            img: item.img,
            description: item.description,
            numberOfUnits: item.numberOfUnits,
          }),
        });
      }
    } else {
      alert("Please sign in to save an item to your shopping cart");
    }
  };

  const removeItemShoppingCart = async (itemId: number) => {
    setShoppingCart((prev) => {
      if (!Array.isArray(prev)) {
        console.error("Shopping cart state is not an array");
        return initShoppingCart;
      }

      const updatedShoppingCart = prev.filter((p) => p.id !== itemId);
      localStorage.setItem("shoppingCart", JSON.stringify(updatedShoppingCart));
      return updatedShoppingCart;
    });

    try {
      if (itemPath) {
        await updateDoc(itemPath, {
          shoppingCart: arrayUnion(
            ...shoppingCart.filter((p) => p.id !== itemId)
          ),
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const removeAllItemsShoppingCart = async () => {
    setShoppingCart(initShoppingCart);
    localStorage.setItem("shoppingCart", JSON.stringify(initShoppingCart));
    try {
      if (itemPath) {
        await updateDoc(itemPath, {
          shoppingCart: [],
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const numberOfUnitsAdd = async (item: PaintingProps) => {
    setShoppingCart((prev) => {
      if (!Array.isArray(prev)) {
        console.error("Shopping cart state is not an array");
        return initShoppingCart;
      }

      const updatedShoppingCart = prev.map((p) =>
        p.id === item.id ? { ...p, numberOfUnits: p.numberOfUnits + 1 } : p
      );
      localStorage.setItem("shoppingCart", JSON.stringify(updatedShoppingCart));
      return updatedShoppingCart;
    });

    try {
      if (itemPath) {
        await updateDoc(itemPath, {
          shoppingCart: arrayUnion(
            ...shoppingCart.map((p) =>
              p.id === item.id
                ? { ...p, numberOfUnits: p.numberOfUnits + 1 }
                : p
            )
          ),
        });
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("An unknown error occurred");
      }
    }
  };

  const numberOfUnitsRemove = async (item: PaintingProps) => {
    if (item.numberOfUnits > 1) {
      setShoppingCart((prev) => {
        if (!Array.isArray(prev)) {
          console.error("Shopping cart state is not an array");
          return initShoppingCart;
        }

        const updatedShoppingCart = prev.map((p) =>
          p.id === item.id ? { ...p, numberOfUnits: p.numberOfUnits - 1 } : p
        );
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(updatedShoppingCart)
        );
        return updatedShoppingCart;
      });

      try {
        if (itemPath) {
          await updateDoc(itemPath, {
            shoppingCart: arrayUnion(
              ...shoppingCart.map((p) =>
                p.id === item.id
                  ? { ...p, numberOfUnits: p.numberOfUnits - 1 }
                  : p
              )
            ),
          });
        }
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addItemShoppingCart,
        removeItemShoppingCart,
        removeAllItemsShoppingCart,
        numberOfUnitsAdd,
        numberOfUnitsRemove,
        shoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to use the context
export const useShoppingCart = (): ShoppingCartContextProps => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartContextProvider"
    );
  }
  return context;
};

export default ShoppingCartContextProvider;
