import { motion } from "framer-motion";
import { Chrome, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useSession } from "@/contexts/SessionProvider";


const SocialButtons = ({isSubmitting}: {isSubmitting: boolean}) => {
  const { login: sessionLogin } = useSession();

  const handleSocialLogin = async (providerName: "google" | "github") => {
    let provider;
    if (providerName === "google") {
      provider = new GoogleAuthProvider();
    } else if (providerName === "github") {
      provider = new GithubAuthProvider();
    } else {
      return;
    }

    try {
      toast.info(`Redirecting to ${providerName}...`);
      const result = await signInWithPopup(auth, provider);
      sessionLogin(result.user);
      toast.success(`Successfully authenticated with ${providerName}!`);
    } catch (error: any) {
      toast.error(error.message);
      console.error(`Firebase ${providerName} login error:`, error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => handleSocialLogin("google")}
          disabled={isSubmitting}
        >
          <Chrome className="mr-2 h-4 w-4" />
          Google
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => handleSocialLogin("github")}
          disabled={isSubmitting}
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </motion.div>
    </div>
  );
};

export default SocialButtons;
