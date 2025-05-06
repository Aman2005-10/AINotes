function Navbar() {
    return (
      <>
        <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow-md">
          {/* Left side: Home + New Chat */}
          <div className="flex items-center space-x-4">
            <button className="hover:bg-gray-900 px-4 py-2 rounded transition">Home</button>
            <button className="bg-white text-gray-800 hover:bg-gray-200 px-2 py-2 rounded transition">
              New Chat
            </button>
          </div>
  
          {/* Right side: User logo + Logout */}
          <div className="flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <button className="hover:bg-gray-900 px-4 py-2 rounded transition">Logout</button>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  