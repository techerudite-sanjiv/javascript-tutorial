import React from "react";


class ErrorBoundary extends React.Component {
    state = {
        error: ''
    }

  static  getDerivedStateFromError(error) {
        return { error: error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <p>Error:</p>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;