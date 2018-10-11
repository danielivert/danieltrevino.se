// @flow
import * as React from "react"

type Props = {
  children: React.Node,
  viewPort: number,
  className: string
}

type State = {
  height: number
}

class ContainerViewPort extends React.Component<Props, State> {
  state = {
    height: 0
  }
  componentDidMount() {
    this.initHeight()
  }
  initHeight() {
    if (!document.documentElement) return
    const { clientHeight } = document.documentElement
    const { viewPort } = this.props
    const viewPortPercentage = (clientHeight * viewPort) / 100
    this.setState({ height: viewPortPercentage })
  }
  render() {
    const { height } = this.state
    const { children, className } = this.props

    return (
      <section style={{ height }} className={className}>
        {children}
      </section>
    )
  }
}

export default ContainerViewPort
