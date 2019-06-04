import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
const scrollMonitor = require('scrollmonitor')

interface IProps {
  delay: number
  children: React.ReactNode
  offset?: number
}

const Wrapper: any = styled.div``
const Part: any = styled.div`
  transition: transform 0.45s ease-in, opacity 0.45s ease-in;
  transform: translateY(${(p: any) => (p.show ? 0 : 15)}px);
  opacity: ${(p: any) => (p.show ? 1 : 0)};
`

const AnimateIns = (props: IProps) => {
  const { delay, children, offset = 200 } = props
  const container = useRef()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const watcher = scrollMonitor.create(container.current, -offset)

    watcher.enterViewport(() => {
      watcher.destroy()

      setShow(true)
    })

    return () => {
      watcher.destroy()
    }
  }, [])

  const childNodes = React.Children.map(children, child => child).filter(
    Boolean
  )

  const nodes = childNodes.map((child, i) => (
    <Part
      show={show}
      style={{ transitionDelay: `${i * delay}ms` }}
      className="js-reset"
      key={i}
    >
      {child}
    </Part>
  ))

  return (
    <Wrapper ref={container} {...props}>
      {nodes}
    </Wrapper>
  )
}
export default AnimateIns
