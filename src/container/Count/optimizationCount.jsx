import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'
// 使用react-redux  整合UI组件和容器组件
// 定义UI组件
class CountReactRedux extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    const { count } = this.props
    return (
      <div>
        <h1>当前求和为：{count || 0}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步相加</button>
      </div>
    )
  }
}

// 容器组件  充当一个桥梁的作用，在UI组件和redux之间进行传输

/**
 * 1、传递给UI组件的函数  返回值是对象
 * 2、key作为传递给UI组件props的key value就作为props的value---状态
 * 3、mapStateToProps用于传递状态
 */

/**
 * 1、传递给UI组件的函数  返回值是对象
 * 2、key作为传递给UI组件props的key value就作为props的value---状态
 * 3、mapDispatchToProps用于传递操作状态的方法
 */

// 使用connect()()创建并暴露一个容器组件  编码上优化版的connect
export default connect(
  (state) => ({
    count: state,
  }),
  // mapDispatchTpProps的简写
  {
    increment: createIncrementAction,
    decrement: createDecrementAction,
    incrementAsync: createIncrementAsyncAction,
  }
)(CountReactRedux)
