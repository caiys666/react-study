// 容器组件  充当一个桥梁的作用，在UI组件和redux之间进行传输
// 引入UI组件
import CountUI from '../../components/count/CountReactRedux.jsx'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// 使用connect()()创建并暴露一个容器组件
export default connect()(CountUI)
