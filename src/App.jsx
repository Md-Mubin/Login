import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Register from "./Component/Register"
import Login from "./Component/Login"
import Welcome from "./Component/Welcome"

function App() {

  const loginpage = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={loginpage}/>
    </>
  )
}

export default App
