import React from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 min-h-screen flex flex-row bg-yellow-200">
      {/* sidebar */}
      <div className="sm:flex hidden mr-10 relative">Sidebar</div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5"></div>
    </div>
  );
};

export default App;
