import React, {useState} from 'react'; 

function App() {

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 md:p-6 lg:p-8 xl:p-10">
                  <header className="bg-blue-600 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Welcome to My React App</h1>
        <p className="text-lg">Styled with Tailwind CSS</p>
        <a
          className="text-blue-200 hover:text-blue-100 mt-4 block text-lg underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tailwind CSS
        </a>
      </header>
        </div>  
    );
}

export default App;