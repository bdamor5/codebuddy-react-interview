import SnackbarAlert from "./components/Alerts/SnackbarAlert";
import ErrorPageTemplate from "./pages/ErrorPageTemplate";
import Router from "./Router";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={<ErrorPageTemplate />}>
        {/* will display a fallback component went network is gone offline*/}
        {!navigator.onLine ? (
          <ErrorPageTemplate
            firstText="It seems you are offline! Click"
            secondText="to retry again"
            navigateUrl="/"
          />
        ) : (
          <>
            <SnackbarAlert />
            <Router />
          </>
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
