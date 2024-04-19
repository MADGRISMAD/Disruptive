import React, {useState} from "react";


async function userRegister(credentials){
  try{
    const newBody = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
        type: credentials.isCreator ? 'creator' : 'stakeholder'
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(newBody)
  };
    const response = await fetch('http://localhost:3000/users/create', options);
    if(response.ok){
      const data = await response.json();
      console.log(data);
    }
    else{
      throw new Error('registration failed');
    }
  }
  catch(err){
    console.error(err);
  }
}

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isCreator, setIsCreator] = useState(false);

   const handleSubmit = async (e) => {
     e.preventDefault();
     await userRegister({username, email, password, isCreator});
   }

  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto bg-gray-900 rounded-lg py-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form 
              className="flex flex-col w-full h-full pb-6 text-center bg-gray-900 rounded-3xl"
              onSubmit={handleSubmit}
              >
                <h3 className="mb-3 text-4xl font-extrabold text-white">
                  Register
                </h3>
                <p className="mb-4 text-gray-300">
                  Sign up for a new account
                </p>

                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-gray-300"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@gmail.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-400 bg-gray-700 text-gray-300 rounded-2xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-gray-300"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-400 bg-gray-700 text-gray-300 rounded-2xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <label
                  htmlFor="username"
                  className="mb-2 text-sm text-start text-gray-300"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter a username"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-gray-400 placeholder:text-gray-400 bg-gray-700 text-gray-300 rounded-2xl"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="isCreator"
                    className="mr-2"
                    checked={isCreator}
                    onChange={(e) => setIsCreator(e.target.checked)}
                  />
                  <label
                    htmlFor="isCreator"
                    className="text-sm font-normal text-gray-300"
                  >
                    Are you a creator?
                  </label>
                </div>

                <button 
                className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 bg-blue-500"
                >
                  Sign Up
                </button>
                <p className="text-sm leading-relaxed text-gray-300">
                  Already have an account?{" "}
                  <a href="/login" className="font-bold text-gray-400">
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
