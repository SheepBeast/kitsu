import Home from "../page/home";
import About from "../page/about";
const NotFound = () => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = 404;
        }
        return (
          <div>
            <h1>404 : Not Found</h1>
          </div>
        );
      }}
    />
  );
};

const pureRoutes  = [{
  path: "/",
  name: 'Home',
  component: Home
},
{
  path: "/about",
  name: 'About',
  component: About
},]


const routes =pureRoutes.concat({
  path: "*",
  component: NotFound
}) 

export {
  pureRoutes
}

export default routes;
