// @flow
import * as React from "react"

type Props = {
  children: React.Node,
  viewPort: number
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
    const { children } = this.props
    return (
      <section style={{ height }} {...this.props}>
        {children}
      </section>
    )
  }
}

export default ContainerViewPort
