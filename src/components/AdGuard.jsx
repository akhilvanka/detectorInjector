import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase/firebase';
// import 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const withAuthGuard = (ProtectedElement) => {
    const AuthGuard = () => {
      const [user, setUser] = useState(null);
      const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
      });

      return () => unsubscribe();
    }, []);

    useEffect(() => {
      if (!user) {
        navigate('/');
      }
    }, [user, navigate]);

    return user ? <ProtectedElement /> : null;
  };

  return AuthGuard;
};

export default withAuthGuard;