import {
	NOT_MOUNTED,
	NOT_BOOTSTRAPPED,
	BOOTSTRAPPING,
} from '../applications/app.helper';

export async function toBootstrapPromise(app) {
	// 若app没启动过
	if (app.status != NOT_BOOTSTRAPPED) {
		return app;
	}
	app.status = BOOTSTRAPPING;
	await app.bootstrap(app.customProps);
	app.status = NOT_MOUNTED;
	return app;
}
