import { render } from 'preact'
import { ComponentA, ComponentB } from '@zmh/common'
import Test from 'project-2/src/components/Test'

function App() {
  return (
    <>
      <ComponentA />
      <ComponentB />
      <Test />
    </>
  )
}

render(<App />, document.getElementById('app')!)