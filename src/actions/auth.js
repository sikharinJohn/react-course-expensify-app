import { firebase, googleAuthProvider, fbAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () =>{
    return () =>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startFbLogin = () =>{
    return () =>{
        return firebase.auth().signInWithPopup(fbAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () =>{
    return () =>{
        return firebase.auth().signOut();
    };
};