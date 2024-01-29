
import './App.css';
import UserForm from './components/UserForm';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import FileSystem from './components/fileuploader';
import ImageSwapper from './components/fileuploader/file';
import DebounceExample from './components/debouncefn';
import CustomHooks from './components/customHooks';
import HandleEvent from './components/event';
import FetchApi from './components/customHooks/fetchApi';
import ErrorBoundary from './components/errorBoundary';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginPage from './components/googleLogin';
import Payment from './components/payment';
import { Elements } from '@stripe/react-stripe-js';
import { options, stripePromise } from './stripe/getStripe';
import DataTable from './components/dataTable';
import CustomCarousel from './components/customCarousel';
import TodoBox from './components/todos';

function App() {


  return (
    <div className="App">
      {/* <UserForm/> */}
      {/* <FileSystem/> */}
      {/* <ImageSwapper/> */}
      {/* <DebounceExample/> */}
      {/* <CustomHooks/> */}
      {/* <HandleEvent/> */}
      {/* <ErrorBoundary>
        <FetchApi />
        <CustomHooks/> 
      </ErrorBoundary> */}

      {/* <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginPage />
      </GoogleOAuthProvider> */}

      {/* <Elements stripe={stripePromise} >
        <Payment />
      </Elements> */}

      {/* <DataTable/> */}
      {/* <CustomCarousel /> */}
      {/* <TodoBox/> */}
saddddddddddddddddddddd
    </div>
  );
}

export default App;
