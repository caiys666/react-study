import React, { Component } from 'react'

// 纯React求和案列
export default class Count extends Component {
  state = { count: 0 }
  // 加法
  increment = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({ count: count + value * 1 })
  }
  // 减法
  decrement = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    this.setState({ count: count - value * 1 })
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    if (count % 2 !== 0) {
      this.setState({ count: count + value * 1 })
    }
  }
  incrementAsync = () => {
    const { count } = this.state
    const { value } = this.selectNumber
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
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
