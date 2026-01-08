import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase"; // Import Firebase auth

interface User {
  name: ReactNode;
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface Session {
  user: User | null;
  isLoading: boolean;
}

interface SessionContextType extends Session {
  login: (firebaseUser: FirebaseUser) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session>({
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        const user: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          name: undefined
        };
        setSession({ user, isLoading: false });
      } else {
        setSession({ user: null, isLoading: false });
      }
    });

    return () => unsubscribe();
  }, []);

  const login = (firebaseUser: FirebaseUser) => {
    const user: User = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      name: undefined
    };
    setSession({ user, isLoading: false });
  };

  const logout = () => {
    auth.signOut(); // Firebase signOut
    setSession({ user: null, isLoading: false });
  };

  return (
    <SessionContext.Provider value={{ ...session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}
