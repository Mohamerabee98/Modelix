import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { isLoggedIn } from "./utils/auth";
import { Home } from "./components/index";
import {
  Hero,
  About,
  About_2,
  Contact,
  Contact_2,
  Login,
  Signup,
  Upload,
} from "./pages";
// Component
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import How_Work from './pages/How_work/How_work';
// Dashboard
import Dashboard from './pages/Dashboard/Dashboard_section/Dashboard';
import DatasetDetails from "./pages/Dashboard/Dataset_Details/Dataset_Details";
import Choose_Model from "./pages/Dashboard/Choose_Model/choose_Model";
import Train_Model from "./pages/Dashboard/Train/Train_Model";
import Prediction from "./pages/Dashboard/Prediction/Prediction";
import PredictionResult from "./pages/Dashboard/PrectionResult/PredictionResult";


function App() {
  const loggedIn = isLoggedIn();
  const [fromSignup, setFromSignup] = useState(false);

  return (
    <BrowserRouter>
      <AppContent
        loggedIn={loggedIn}
        fromSignup={fromSignup}
        setFromSignup={setFromSignup}
      />
    </BrowserRouter>
  );
}

function AppContent({ loggedIn, fromSignup, setFromSignup }) {
  const location = useLocation();

  const showNavbar = !["/login", "/SignUp"].includes(location.pathname);

  const content = (
    <>
      {loggedIn || fromSignup ? <Home /> : <Hero />}
      <How_Work />
      <About />
      <About_2 />
      <Contact />
      <Contact_2 />
    </>
  );

  return (
    <Routes>
      <Route
        path="/"
        element={showNavbar ? <Layout>{content}</Layout> : content}
      />

      <Route
        path="/SignUp"
        element={
          <PublicRoute>
            <Signup setFromSignup={setFromSignup} />
          </PublicRoute>
        }
      />

      {/* Login → PublicRoute */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/upload"
        element={
          <ProtectedRoute>
             <Upload  />

          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/DatasetDetails"
        element={
          <ProtectedRoute>
            <DatasetDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chooseModel"
        element={
          <ProtectedRoute>
            <Choose_Model />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Train"
        element={
          <ProtectedRoute>
            <Train_Model />
          </ProtectedRoute>
        }
      />
      <Route
        path="/Prediction"
        element={
          <ProtectedRoute>
            <Prediction />
          </ProtectedRoute>
        }
      />
      <Route
        path="/PredictionResult"
        element={
          <ProtectedRoute>
            <PredictionResult />
          </ProtectedRoute>
        }
      />

   

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
