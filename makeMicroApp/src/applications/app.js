import {
	NOT_LOADED,
	shouldBeActive,
	LOAD_RESOURCE_CODE,
	NOT_BOOTSTRAPPED,
	BOOTSTRAPPING,
	NOT_MOUNTED,
	MOUNTED,
} from './app.helper';
import { reroute } from '../navigations/reroute';

/**
 * 注册application
 * @param {string} appName application名称
 * @param {Object|Function<Promise>} loadApp app异步加载函数
 * @param {Function<Boolean>} activeWhen 判断是否应该被挂载
 * @param {Object} customProps 自定义配置
 * @return {Promise}
 */

const apps = [];
export function registerApplication(appName, loadApp, activeWhen, customProps) {
	apps.push({
		name: appName,
		loadApp,
		activeWhen,
		customProps,
		status: NOT_LOADED,
	});
	reroute();
}

export function getAppChanges() {
	const appsToLoad = []; // 要加载的app
	const appsToMount = []; // 要挂载的app
	const appsToUnmount = []; // 要卸载的app
	apps.forEach(app => {
		const appShouldBeActive = shouldBeActive(app);
		switch (app.status) {
			case NOT_LOADED:
			case LOAD_RESOURCE_CODE:
				if (appShouldBeActive) {
					appsToLoad.push(app);
				}
				break;
			case NOT_BOOTSTRAPPED:
			case BOOTSTRAPPING:
			case NOT_MOUNTED:
				if (appShouldBeActive) {
					appsToMount.push(app);
				}
				break;
			case MOUNTED:
				if (!appShouldBeActive) {
					appsToUnmount.push(app);
				}
				break;
		}
	});
	return {
		appsToLoad,
		appsToMount,
		appsToUnmount,
	};
}
