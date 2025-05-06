function Home() {
    return (
      <>
        <section className=" flex flex-col items-center justify-center   p-6">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-800">AI Notes</h1>
          </div>
  
          <div className="w-full max-w-xl">
            <textarea
              className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-gray-700"
              placeholder="Write your note here..."
            ></textarea>
          </div>
  
          <div className="mt-4">
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition ease-in-out duration-300">
              Generate
            </button>
          </div>
        </section>
  
        <section className="p-8 bg-white max-w-xl mx-auto mt-4 rounded-xl shadow-xl">
          <div>
            {/* Placeholder for generated content */}
            <p className="text-gray-500 text-center"> Your genrated Code here</p>
          </div>
        </section>
      </>
    );
  }
  
  export default Home;
  