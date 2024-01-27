import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import auth from '../firebase/firebase';

const PrivateRoute = ({value}) => {
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    // const [user, setUser] = useState(null);

    return value ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;