import { Route, Routes } from "react-router-dom"

import { New } from "../pages/New"
import { Profile } from "../pages/Profile"
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/details" element={<Details />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  )
}