import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Intro,
  Enroll,
  Login,
  Main,
  Admin,
  AdminTable,
  AdminStore,
} from "@Pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/store" element={<AdminStore />} />
        <Route path="/admin/table" element={<AdminTable />} />\
        <Route path="/" element={<Intro />} />
      </Routes>
    </>
  );
};

export default App;
