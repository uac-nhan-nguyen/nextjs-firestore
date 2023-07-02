import {auth} from "@/firebase/config";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, type UserCredential, User} from 'firebase/auth'
import {useEffect, useState} from "react";


export const useUser = (): { user: User | null | undefined, loading: boolean } => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  useEffect(() => {
    auth.onAuthStateChanged((value) => {
      console.log('USER', user)
      setUser(value);
    });
  })

  return {user, loading: user === undefined};
}

export const signIn = async (email: string, password: string): Promise<[UserCredential?, string?]> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return [result];
  } catch (e: any) {
    if (e.code === "auth/user-not-found") {
      return [undefined, 'User not found'];
    }
    else if (e.code === "auth/invalid-email") {
      return [undefined, 'Invalid email'];
    }
    else if (e.code === "auth/wrong-password") {
      return [undefined, 'Invalid password'];
    }
    else {
      return [undefined, e.code];
    }
  }
}

export const signUp = async (email: string, password: string): Promise<[UserCredential?, string?]> => {
  try {
    const r = await createUserWithEmailAndPassword(auth, email, password)
    return [r]
  } catch (e: any) {
    if (e.code === "auth/invalid-email") {
      return [undefined, 'Invalid email']
    }
    else if (e.code === 'auth/email-already-in-use') {
      return [undefined, 'Account already created']

    }
    else {
      console.error(e);
      return [undefined, e.code]
    }
  }

}