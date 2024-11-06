import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "./useStorageState";
import { Session } from "@/type";

const AuthContext = createContext<{
  signIn: (email: string) => void;
  signOut: () => void;
  session?: Session | null;
  isLoading: boolean;
}>({
  signIn: () => {},
  signOut: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] =
    useStorageState<Session>("session");

  return (
    <AuthContext.Provider
      value={{
        signIn: (email) => {
          // Perform sign-in logic here
          setSession({ email: email, role: "admin", userId: "123" });
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
