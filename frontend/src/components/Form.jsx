import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <section className="bg-white w-full max-w-md p-6 rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center text-gray-700">AI Notes</h1>
        <h2 className="text-lg font-semibold text-center">{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>
        )}

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-gray-700"
          />
        </div>

        <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <div className="text-center text-sm mt-2">
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-blue-500 underline"
              onClick={toggleForm}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>

        <div className="text-center">
          <p className="mb-2 text-sm text-gray-600">or {isLogin ? "login" : "sign up"} with</p>
          <button className="flex items-center justify-center w-full border py-2 rounded-lg hover:bg-gray-100">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </section>
    </div>
  );
}

export default Form;
