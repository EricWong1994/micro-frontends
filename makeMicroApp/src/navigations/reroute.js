import {started} from '../start';
import {getAppChanges} from '../applications/app'

export function reroute() {
    const {appsToLoad, appsToMount, appsToUnmount} = getAppChanges();
    // http://localhost:3000/#/app1 打印得到appsToLoad
    console.log(appsToLoad, appsToMount, appsToUnmount);
    if (started) {
        console.log('调用start');
        // app装载
        return performAppChanges()
    } else {
        console.log('调用register');
        // 预加载应用
        return loadApps() 
    }

    async function loadApps() {

    }

    async function performAppChanges() {

    }
}
