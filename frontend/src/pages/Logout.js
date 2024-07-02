import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export function action () {
    localStorage.removeItem('token');
    return redirect('/');
}

export const tokenLoader = () => {
    return getAuthToken();
}

export const checkAuthLoader = () => {
    const token = getAuthToken();

    if(!token){
        return redirect('/auth');
    }

    return null;
}