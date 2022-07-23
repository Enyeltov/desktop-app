import Head from "next/head";
import { useState } from "react";
import Login from "../components/forms/login/Login";
import Register from "../components/forms/register/Register";

export default function Auth(params) {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Head>
        <title>Login - Best Global Advisors</title>
      </Head>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-md">
          
          {isLogin ?
            <Login setIsLogin={setIsLogin} />  
            : <Register setIsLogin={setIsLogin} />
          }

        </div>
      </div>
    </>
  )

}