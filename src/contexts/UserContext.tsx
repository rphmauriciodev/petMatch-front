import { useApi } from "hooks/useApi";
import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "utils/types";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const defaultUser: User = {
    id: 1,
    nome: "Murilo",
    hasAdoption: false,
  };

  const { data: fetchedUser } = useApi<User>("/users/1");

  const [user, setUser] = useState<User | null>(fetchedUser ?? defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used inside a UserProvider");
  return context;
};
