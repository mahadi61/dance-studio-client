import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [observer, setObserverState] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  // google sign in
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // new user register with email
  const singUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   log out
  const logOut = () => {
    return signOut(auth);
  };

  // an observer to see auth info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, [observer]);

  const authInfo = {
    singUpWithEmail,
    profileUpdate,
    user,
    googleLogin,
    logOut,
    setUser,
    setObserverState,
    // signInWithEmail,
    // loader,
    // observerState,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
