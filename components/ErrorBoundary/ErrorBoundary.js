import React from "react";
import DefaultButton from "../Navigation/Buttons/DefaultButton";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    function refreshPage() {
      window.location.reload(false);
    }
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="bg-red-500 text-center p-4 text-white font-semibold flex items-center justify-center space-x-2">
          <p>
            There was an error in loading {this.props.moduleName} module. Please
            try to refresh the page and try again.
          </p>
          <button
            className="bg-white text-black pt-2 pb-2 pr-4 pl-4 rounded-md"
            onClick={refreshPage}
          >
            Refresh
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
