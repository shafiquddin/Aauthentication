import { json } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

// export const actions = async ({ request, params }) => {
//   const data = await request.formData();
//   const crendentials = Object.fromEntries(data.entries());
//   const response = await fetch("http://localhost:8080/auth", {
//     method: request.method,
//     body: JSON.stringify(crendentials),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if(!response.ok){
//     throw json({message:'Could not send request'},{status:500})
//   }else{
//     const resData = await response.json();
//     console.log(resData);
//   }
// };
