import { redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

export function action () {
    localStorage.removeItem('token');
    return redirect('/');
}

export const tokenLoader = () => {
    return getAuthToken();
}