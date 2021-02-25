import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start
} from "qiankun";

//子应用注册信息
import apps from "./apps.js"

/**
 * 注册子应用
 */
registerMicroApps(apps, {
    // 子应用加载前
    beforeLoad: (app) => {
        console.log("======= BEFORE LOAD =======", app.name)
        return Promise.resolve()
    },
    // 子应用挂载后
    afterMount: (app) => {
        console.log("======= AFTER MOUNT =======", app.name)
        return Promise.resolve()
    }
});

/**
 * 全局未捕获异常处理器
 */
addGlobalUncaughtErrorHandler(event => {
    console.error(event)
    const msg = event
    if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
        this.$message({
            type: "error",
            message: "微应用加载失败，请检查应用是否可运行"
        })
    }
});

// 导出启动函数
export default start;