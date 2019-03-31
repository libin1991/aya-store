# APIs

## $Store.prototype.link(StoreClass, Object)
### 该方法用于关联小程序page/component与对应的store
> 参数释义：
> > StoreClass: 自己创建的对应的store的类
> >
> > Object: 创建页面/组件的配置对象


#### 举个栗子🌰：

自己创建的对应的store：
```
export default class TestStore {

    // ⚠️ store对应的值，必须写在values中，否则无法监听
    values = {
        testArr: [],
        currStore: 0
    }

}
```


页面/组件中进行link关联：
```
// TestStore是自己创建的test对应的store。
import TestStore from './test.store';

// 挂载在getApp()下的aya-store实例。
const store = getApp().store;

// 关联component与store，page同理。
Component(store.link(TestStore, {

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    },

}))
```

- - -
## (Component|Page).prototype.setStore(Object)

### 该方法用于更新对应store的values值，同时触发所有绑定该store的页面/组件的视图渲染。
> 参数释义：
> > Object: 新的store的值


#### 举个例子🌰：

该方法的使用，形似微信原生的this.setData：
```
// 原生操作组件或页面的data —— this.setData：
const dataFunc = ()=> {
    this.setData({
        testDataObj: {}
    })
}

// aya-store操作对应的store —— this.setStore：
const storeFunc = ()=> {
    this.setStore({
        testStoreObj: {}
    })
}
```
setStore时，会将参数Object与组件/页面已绑定的store的values进行Object.assign合并，并且重新挂载到组件/页面实例的data.store中，可以视时打印出console.log(this.data.store)查看。

⚠️我们墙裂不推荐直接使用(Component|Page).prototype.setData操作data.store，因为这虽然也可以更改当前页面/组件的值，并且引发view渲染，但是会影响aya-store的队列秩序，使其无法更新到所有已经关联了的页面/组件。
这个道理类似于小程序中不建议使用this.data.xxx='abcd'对data进行赋值，而是使用制定方法this.setData()一样。
