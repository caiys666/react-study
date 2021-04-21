import React, { Component } from 'react'

// 使用Redux求和案例迷你版
export default class CountReactRedux extends Component {
  // 加法
  increment = () => {
    const { value } = this.selectNumber
  }
  // 减法
  decrement = () => {
    const { value } = this.selectNumber
  }
  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{}</h1>
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
