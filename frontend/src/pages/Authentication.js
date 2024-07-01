import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const actions = async ({ request, params }) => {
  const data = await request.formData();
  const crendentials = Object.fromEntries(data.entries());
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login'
  if(mode !== 'login' && mode !== 'signup'){
    throw json({message:'Unsupported Mode!'},{status:422})
  }
  const response = await fetch(`http://localhost:8080/${mode}`, {
    method: request.method,
    body: JSON.stringify(crendentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if(response.status === 422 || response.status === 401){
    return response;
  }

  if(!response.ok){
    throw json({message:'Could not send request'},{status:500})
  }

  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem('token',token)

  return redirect('/');
};
