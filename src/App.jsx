import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import OneCard from "./components/OneCard";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/onecard/:id" element={<OneCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
