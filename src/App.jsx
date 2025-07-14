import Home from "./Components/Home.jsx"
import Workout from "./Components/workout.jsx"
import Goals from "./Components/Goals.jsx"
import Track from "./Components/Track.jsx"
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Update from "./Components/Update.jsx"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/workout",
      element:<Workout/>
    },
    {
      path:"/goals",
      element:<Goals/>
    },
    {
      path:"/update",
      element:<Update/>
    },
    {
      path:"/track",
      element:<Track/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
