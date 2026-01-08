import { useNavigate } from "react-router-dom";
import { useSession } from "@/contexts/SessionProvider";
import { signInWithEmailAndPassword, signOut, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";


export const useAuth = () => {
  const { user, login: sessionLogin, logout: sessionLogout, isLoading } = useSession();
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      sessionLogin(userCredential.user);
      navigate("/");
      toast.success("Login successful!");
    } catch (error: any) {
      toast.error(error.message);
      console.error("Firebase login error:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      sessionLogout();
      navigate("/login");
      toast.info("Logged out successfully.");
    } catch (error: any) {
      toast.error(error.message);
      console.error("Firebase logout error:", error);
    }
  };

  const isLoggedIn = !!user;

  return { user, login, logout, isLoggedIn, isLoading };
};
