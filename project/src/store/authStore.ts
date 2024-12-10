import { create } from 'zustand';

interface User {
  email: string;
  type: 'user' | 'partner';
  plan?: 'bronze' | 'prata' | 'ouro';
  role?: string;
  name?: string;
  cpf?: string;
  phone?: string;
  registrationDate?: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  setPlan: (plan: 'bronze' | 'prata' | 'ouro') => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ 
    user: user ? {
      ...user,
      plan: user.type === 'partner' ? 'prata' : undefined
    } : null 
  }),
  logout: () => set({ user: null }),
  setPlan: (plan) => set((state) => ({
    user: state.user ? { ...state.user, plan } : null
  })),
}));