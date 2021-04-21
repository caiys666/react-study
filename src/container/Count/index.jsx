// 容器组件  充当一个桥梁的作用，在UI组件和redux之间进行传输
// 引入UI组件
import CountUI from '../../components/count/CountReactRedux.jsx'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'


/**
 * 1、传递给UI组件的函数  返回值是对象
 * 2、key作为传递给UI组件props的key value就作为props的value---状态
 * 3、mapStateToProps用于传递状态
 */

function mapStateToProps(state) {
  return { count: state }
}

/**
 * 1、传递给UI组件的函数  返回值是对象
 * 2、key作为传递给UI组件props的key value就作为props的value---状态
 * 3、mapDispatchToProps用于传递操作状态的方法
 */
function mapDispatchToProps(dispatch) {
  return {
    increment: (data) => {
      // 通知redux执行操作  加法
      dispatch(createIncrementAction(data))
    },
    decrement: (data) => {
      dispatch(createDecrementAction(data))
    },
    incrementAsync: (data, time) => {
      dispatch(createIncrementAsyncAction(data, time))
    },
  }
}

// 使用connect()()创建并暴露一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
