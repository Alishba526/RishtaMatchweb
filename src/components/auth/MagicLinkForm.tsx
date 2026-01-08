import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { emailSchema } from "@/lib/auth";
import { auth } from "@/lib/firebase";
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect } from "react";
import { useSession } from "@/contexts/SessionProvider";
import { useNavigate } from "react-router-dom";

type EmailFormValues = z.infer<typeof emailSchema>;

const MagicLinkForm = () => {
  const { login: sessionLogin } = useSession();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
  });

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this URL must be
    // in the authorized domains list in the Firebase Console.
    url: 'http://localhost:5173/login',
    handleCodeInApp: true, // This must be true for email link sign-in.
  };

  useEffect(() => {
    const handleSignInWithEmailLink = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // User opened the link on a different device. Ask for email.
          email = prompt('Please provide your email for confirmation');
          if (!email) {
            toast.error("Email is required to complete sign-in.");
            return;
          }
        }
        try {
          const result = await signInWithEmailLink(auth, email, window.location.href);
          sessionLogin(result.user);
          window.localStorage.removeItem('emailForSignIn');
          toast.success("Successfully signed in with magic link!");
          navigate("/");
        } catch (error: any) {
          toast.error(error.message);
          console.error("Firebase magic link sign-in error:", error);
          setError("email", { message: error.message });
        }
      }
    };
    handleSignInWithEmailLink();
  }, [sessionLogin, navigate, setError]);

  const onSubmit = async (data: EmailFormValues) => {
    try {
      await sendSignInLinkToEmail(auth, data.email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', data.email);
      toast.success(`Magic link sent to ${data.email}! Check your inbox.`);
      reset();
    } catch (error: any) {
      toast.error(error.message);
      console.error("Firebase send magic link error:", error);
      setError("email", { message: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="input-field pl-11"
        />
      </div>
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
              />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Magic Link
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </motion.div>
    </form>
  );
};

export default MagicLinkForm;
