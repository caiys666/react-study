/**
 * 该文件专门为Count组件生成action对象
 */

import { INCREMENT, DECREMENT } from './constant'
// 同步action，返回值是一般的Object对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
// 异步action，返回值是一个函数,异步action中，一般都会调用同步action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
