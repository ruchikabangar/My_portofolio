import { Component } from 'react'

/**
 * Catches any render-time failure inside the 3D canvas (e.g. WebGL
 * unsupported/blocked) and swaps in a lightweight static fallback instead
 * of crashing the whole page.
 */
export default class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error) {
    console.warn('3D scene failed to render, showing fallback:', error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
