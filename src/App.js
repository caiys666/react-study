import { Button } from 'antd'

// import Count from './components/count/Count.jsx'
// import CountReact from './components/count/CountReact.jsx'
import Count from './container/Count/optimizationCount.jsx'
import './App.less'

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Count />
    </div>
  )
}

export default App
