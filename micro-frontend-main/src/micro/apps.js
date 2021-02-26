// 在主应用中注册子应用
const apps = [
    /**
     * name: 微应用名称
     * entry: 微应用入口，通过该地址加载
     * container: 微应用挂载节点
     * activeRule: 微应用触发的路由规则
     */
    {
        name: 'VueMicroApp',
        entry: '//localhost:8081',
        container: '#frame',
        activeRule: '/vue'
    }
];

export default apps