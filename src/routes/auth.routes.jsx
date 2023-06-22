import { Route, Routes } from "react-router-dom"

import { Singin } from "../pages/Singin"
import { Singup } from "../pages/Singup"

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Singin />} />
      <Route path="/register" element={<Singup />} />
    </Routes>
  )
}