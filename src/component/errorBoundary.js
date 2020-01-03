// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class ErrorBoundary extends React.Component{
  // ==============
  // STATE
  // ==============
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  // ==============
  // HANDLERS
  // ==============
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
}

  // ==============
  // RENDER
  // ==============
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }
// =============================
// EXPORT
// =============================
export default ErrorBoundary;
