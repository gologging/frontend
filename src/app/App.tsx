import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import HomePage from "./Home/HomePage"
import AboutPage from "./Home/AboutPage"
import RegisterPage from "./Register/RegisterPage"


export default function App() {
  return (
	  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}