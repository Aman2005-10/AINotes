import { useState } from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4 bg-gray-50">
              <Home />
            </main>
          </div>
        </>
      ) : (
        <Form onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
