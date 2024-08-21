import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";

// Type definition for the context value
interface UserContextType {
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  user: User | null;
  setSignedUp: React.Dispatch<React.SetStateAction<boolean>>;
}

// Type definition for AuthContextProvider props
interface AuthContextProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  const signUp = async (email: string, password: string): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", email), {
        favourites: [],
        shoppingCart: [],
      });
      setSignedUp(true);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signIn = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      setSignedUp(false);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ signUp, signIn, logOut, user, setSignedUp }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const UserAuth = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserAuth must be used within an AuthContextProvider");
  }
  return context;
};
