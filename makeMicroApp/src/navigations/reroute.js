import {started} from '../start';
import {getAppChanges} from '../applications/app'
import {toLoadPromise} from '../lifecycles/load'
import { toUnmountPromise } from '../lifecycles/unmount';
import { toMountPromise } from '../lifecycles/mount';
import { toBootstrapPromise } from '../lifecycles/bootstrap';
import './navigator-events';

export function reroute() {
	const { appsToLoad, appsToMount, appsToUnmount } = getAppChanges();
	// http://localhost:3000/#/app1 打印得到appsToLoad
	if (started) {
		// console.log('调用start');
		// app装载
		return performAppChanges();
	} else {
		// console.log('调用register');
		// 预加载应用
		return loadApps();
	}

	async function loadApps() {
		const app = await Promise.all(appsToLoad.map(toLoadPromise));
	}

	async function performAppChanges() {
		// 卸载
		let unmountPromises = appsToUnmount.map(toUnmountPromise);
		appsToLoad.map(async app => {
			app = await toLoadPromise(app);
			app = await toBootstrapPromise(app);
			// return await toMountPromise(app);
			return toMountPromise(app);
		});
		appsToMount.map(async app => {
			app = await toBootstrapPromise(app);
			// return await toMountPromise(app);
			return toMountPromise(app);
		});
	}
}
