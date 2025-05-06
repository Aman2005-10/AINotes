function Sidebar() {
    const dummyData = [
      "Note on React useState",
      "Chat: AI in Education",
      "Meeting Summary 04/05",
      "Todo List Project Plan",
      "Bug Report Notes",
    ];
  
    return (
      <>
        <aside className="w-64 h-screen bg-gray-800 border-r p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Your History</h2>
  
          <ul className="space-y-2">
            {dummyData.map((item, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded shadow hover:bg-blue-100 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </>
    );
  }
  
  export default Sidebar;
  