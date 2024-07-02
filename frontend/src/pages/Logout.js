import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export function action () {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    return redirect('/');
}

export const checkAuthLoader = () => {
    const token = getAuthToken();

    if(!token){
        return redirect('/auth');
    }

    return null;
}