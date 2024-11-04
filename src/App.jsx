import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Register from "./Component/Register"
import Welcome from "./Component/Welcome"
import ProfileLayout from "./assets/Layouts/ProfileLayout"
import Login from "./Component/Login"

function App() {

  const loginpage = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<ProfileLayout />}>
          <Route index element={<Register />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/welcome" element={<Welcome />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={loginpage} />
    </>
  )
}

export default App
