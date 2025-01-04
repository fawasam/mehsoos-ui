import { useRoutes } from "react-router-dom";
import PathConstants from "./paths";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Cart from "../components/design/Cart";
import Checkout from "../pages/CheckOut";
import PastDrawings from "../pages/PastDrawings";
import UserProfile from "../pages/UserProfile";
import TicketPage from "../pages/Ticket";
import HowItWorksPage from "../pages/HowWorks";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

const MainRoute = () => {
  const routes = [
    {
      path: PathConstants.HOME,
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: PathConstants.NOT_FOUND,
      element: (
        <Layout>
          <NotFound />,
        </Layout>
      ),
    },
    {
      path: PathConstants.LOGIN,
      element: (
        <Layout>
          <Login />,
        </Layout>
      ),
    },
    {
      path: PathConstants.SIGNUP,
      element: (
        <Layout>
          <SignUp />,
        </Layout>
      ),
    },
    {
      path: PathConstants.CART,
      element: (
        <Layout>
          <Cart />,
        </Layout>
      ),
    },
    {
      path: PathConstants.CHECKOUT,
      element: (
        <Layout>
          <Checkout />,
        </Layout>
      ),
    },
    {
      path: PathConstants.PAST_DRAWINGS,
      element: (
        <Layout>
          <PastDrawings />,
        </Layout>
      ),
    },
    {
      path: PathConstants.USER_PROFILE,
      element: (
        <Layout>
          <UserProfile />,
        </Layout>
      ),
    },
    {
      path: PathConstants.TICKET,
      element: (
        <Layout>
          <TicketPage />,
        </Layout>
      ),
    },
    {
      path: PathConstants.HOW_IT_WORKS,
      element: (
        <Layout>
          <HowItWorksPage />,
        </Layout>
      ),
    },
  ];

  const element = useRoutes(routes);

  return element;
};

export default MainRoute;