import React, { Component } from 'react'
// 引入store，用于获取store暴露的状态
import store from '../../redux/store'
// 引入actionCreator，专门用于创建action对象
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from '../../redux/count_action'

// 使用Redux求和案例迷你版
export default class Count extends Component {
  componentDidMount() {
    // 检测redux中的状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({})
    })
  }
  // 加法
  increment = () => {
    const { value } = this.selectNumber
    // 通知redux执行草所
    store.dispatch(createIncrementAction(value * 1))
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(createIncrementAsyncAction(value * 1, 500))
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
