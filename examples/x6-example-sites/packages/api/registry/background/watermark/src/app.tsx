import React from 'react'
import { Graph } from '@antv/x6'
import './app.css'

export default class Example extends React.Component {
  private container: HTMLDivElement

  componentDidMount() {
    new Graph({
      container: this.container,
      grid: true,
      background: {
        image:
          'data:image/png;base64,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',
        repeat: 'watermark',
        opacity: 0.2,
      },
    })
  }

  refContainer = (container: HTMLDivElement) => {
    this.container = container
  }

  render() {
    return (
      <div className="app">
        <div className="app-content" ref={this.refContainer} />
      </div>
    )
  }
}
