 
export const getTokenDuration = () => {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export const getAuthToken = () => {
    const token = localStorage.getItem('token');

    if(!token){
        return null;
    }

   const tokenDuartion = getTokenDuration();
   if(tokenDuartion < 0){
    return 'EXPIRED'
   }

    return token;
}

export const tokenLoader = () => {
    return getAuthToken();
}