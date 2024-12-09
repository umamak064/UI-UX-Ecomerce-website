import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to render fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an external service (e.g., Sentry)
    console.error('Error caught by Error Boundary:', error);
    console.error('Error details:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI in case of an error
      return (
        <div style={{ padding: '20px', backgroundColor: '#f9dada', color: '#d8000c' }}>
          <h2>Something went wrong.</h2>
          <p>We are working to fix it. Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
