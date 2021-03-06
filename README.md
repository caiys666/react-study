# React学习

## 一、react的生命周期回调函数或生命周期钩子函数

##### 1、卸载组件

```js
ReactDOM.unmountComponentAtNode(document.getElementById('root'))
```

`componentDidMount`组件挂载完毕后调用

##### 2、组件挂载生命周期 `componentDidMount`

**组件挂载完毕后调用**

##### 3、render 初始化渲染、状态更新之后会调用

##### 4、状态更新`setState()`是一个更新操作  调用`shouldComponentUpdate`、`componentWillUpdate`、`render`、`componentDidUpdate`

##### 5、强制更新`forceUpdate`之后调用`componentWillUpdate`、`render`、`componentDidUpdate`

##### 6、组件新的生命周期

* `getDerivedStateFromProps`
* `getSnapshotBeforeUpdate`介于`render`与`componentDidUpdate`之间

7、react的`DOM diff`算法

* 逐层进行对比，找到发生变化的节点才进行更新，没有发生变化的不会进行更行

## 二、react脚手架

使用`cnpm i -g create-react-app`全局安装脚手架，使用`create-react-app my_project`去创建一个react项目。

## 三、消息订阅与发布

* 使用`import Pubsub from 'pubsub-js'`引入消息发布订阅的库，然后使用`Pubsub.publish('cabbage', { name: '迪丽热巴', age: 26 })`进行消息的发布，第一个参数是消息发布的`key`，第二个参数是消息发布传递的参数。

* 使用

  ```
  Pubsub.subscribe('cabbage', (_, data) => {
        console.log(_)
        console.log(data)
      })
  ```

  进行消息的订阅，接收到两个参数，第一个是订阅消息的`key`，第二个参数是一个回调函数，回调函数中接收到两个参数，第一个参数是订阅消息的`key`第二个参数是消息发布中传过来的数据。

## 四、在React中使用路由

* 明确号界面的导航区和内容区

* 导航区的a标签改为Link标签

  ```js
  <Link className="item" to="/about">
      About
  </Link>
  <Link className="item" to="/home">
      Home
  </Link>
  ```

* 内容区为Route标签进行路由路径的分配

  ```js
  <Route path="/about" component={About}></Route>
  <Route path="/home" component={Home}></Route>
  ```

* <App>的最外层包裹一个<BrowserRouter>或者<HashRouter>

##### 路由组件和一般组件的区别

* 写法不同

  * 一般组件：<Home>
  * 路由组件：<Route path="/home" component={Home}></Route>

* 存放的位置不同

  * 一般组件：components
  * 路由组件：pages

* 接收到的props不同

  * 一般组件：些组件标签时传递了什么，就能接收到什么

  * 路由组件：接收到三个固定的属性

    ```json
    history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    location:
        pathname: "/home"
        search: ""
        state: undefined
    match:
        params: {}
        path: "/home"
        url: "/home"
    ```

    

## 5、解决多级路径刷新页面样式丢失的问题

* 在`public/index.html`中引入样式时不写`./`写`/`（常用）
* 在`public/index.html`中引入样式时不写`./`写`%PUBLIC_URL%`（常用）
* 使用`HashRouter`

## 6、Redirect的使用

* 一般写在所有路由的最下方，当所有的路由都无法匹配的时候，跳转到Redirect指定的路由

* ```jsx
  <Switch>
      <Route path="/about" component={About}></Route>
      <Route path="/home" component={Home}></Route>
      <Redirect to="/about" />
  </Switch>
  ```

## 7、嵌套路由或多级路由

* 注册子路由时要写上父路由的path值
* 路由的匹配是按照注册路由的顺序进行的

## 8、向路由组件传递`params`参数

* `params`参数

  * 路由链接（携带参数）：

    ```jsx
    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>
        {msgObj.title}
    </Link>
    ```

  * 注册路由（声明接收）：

    ```jsx
    <Route path="/home/message/detail/:id/:title" component={Detail} />
    ```

  * 接收参数：

    ```jsx
    const { id, title } = this.props.match.params
    ```

* search参数

  * 路由链接（携带参数）：

    ```jsx
    <Link
        to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}
        >
        {msgObj.title}
    </Link>
    ```

  * 注册路由（无需声明，正常注册即可）：

    ```jsx
    <Route path="/home/message/detail" component={Detail} />
    ```

  * 接收参数：

    ```jsx
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))
    ```

  * 备注：获取到的search是`urlencode`编码的字符串，需要借助`querystring`解析

* state参数

  * 路由链接（携带参数）：

    ```jsx
    <Link
        to={{
            pathname: '/home/message/detail',
                state: { id: msgObj.id, title: msgObj.title },
        }}
        >
        {msgObj.title}
    </Link>
    ```

  * 注册路由（无需声明，正常注册即可）：

    ```jsx
    <Route path="/home/message/detail" component={Detail} />
    ```

  * 接收参数：

    ```jsx
    const { id, title } = this.props.location.state || {}
    ```

  * 备注：刷新也可以保留参数



## 9、编程式路由导航

* 借助`this.props.history`对象上的API对操作路由跳转、前进、后退
  * `this.props.histoty.push()`
  * `this.props.histoty.replace()`
  * `this.props.histoty.goBack()`
  * `this.props.histoty.goForward()`
  * `this.props.histoty.go()`

## 10、`withRouter`的使用

* `withRouter`可以加工一般组件，让一般组件具备路由组件所特有的`API`
* `withRouter`的返回值是一个新组件

## 11、`BrowserRouter`与`HashRouter`的区别

* 底层原理不一样
  * `BrowserRouter`使用的是`H5`的`history API`，不兼容`IE9`及一下版本
  * `HashRouter`使用的是URL的哈希值
* `path`的表现形式不一样
  * `BrowserRouter`的路径中没有#
  * `HashRouter`的路径包含#
* 刷新后对路由state参数的影响
  * `BrowserRouter`没有任何影响，因为state保存在history对象中
  * `HashRouter`刷新后会导致路由state参数的丢失
* 备注：`HashRouter`可以用于解决一些路径错误相关的问题

## 12、`redux`精简版

* 去除Count组件自身的状态

* `src`目录下建立：

  * `redux`
    * `store.js`
    * `count_reducer.js`

* `store.js`:

  * 引入`redux`中的`createStore`函数，创建一个store
  * `createStore`调用时要传入一个为其服务的reducer
  * 记得暴露store对象

* `count_reducer.js`:

  * reducer的本质是一个函数，接收：`preState`，action，返回加工后的状态
  * reducer有两个作用：初始化状态，加工状态
  * reducer被第一次调用时，是store自动触发的，传递的`preState`是undefined

* 在`index.js`中检测store中状态的变化，一旦发生改变重新渲染<App/>

  **`redux`只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写**

## 13、`redux`完整版

* 新增文件：
  * `count_action.js`  专门用于创建action对象
  * `constant.j`s  放置用于编码疏忽写错action中的type

## 14、异步action

* 明确：延迟的动作不想交给组件自身，想交给action

* 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回

* 具体编码：

  * ```jsx
    yarn add redux-thunk  // 并且配置在store中
    ```

  * 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务

  * 异步任务有结果后，分发一个同步的action去真正操作数据

* 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果之后再去分发同步action

## 15、`react-redux`的基本使用

* 明确两个概念：

  * `UI`组件：不能使用任何`redux`的`api`，只负责页面的呈现、交互等
  * 容器组件：负责和`redux`通信，将结果交给`UI`组件

* 如何创建一个容器组件----靠`react-redux`的connect函数

  ```jsx
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
  ```

* 备注：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入的

* 备注：`mapDispatchToProps`也可以是一个对象

## 16、`react-redux`优化

* 容器组件和`UI`组件整合一个组件

* 无需自己给容器组件传递`store`，给<App/>包裹一个<Provider store={store}>即可

* 使用了`react-redux`后也不用再自己检测`redux`中状态的变化了，容器组件可以自动完成这个工作

* `mapDispatchToProps`也可以简写城一个对象

* 一个组件要和`redux`打交道要经过哪几步？

  * 定义好`UI`组件----不暴露

  * 引入`connect`生成一个容器组件，并暴露，写法如下：

    ```jsx
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
    ```

  * 在`UI`组件中通过`this.props.xxxxx`读取和操作状态

