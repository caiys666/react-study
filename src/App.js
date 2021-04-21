import { Button } from 'antd'
import store from './redux/store'

// import Count from './components/count/Count.jsx'
// import CountReact from './components/count/CountReact.jsx'
import Count from './container/Count'
import './App.less'

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Count store={store} />
    </div>
  )
}

export default App
