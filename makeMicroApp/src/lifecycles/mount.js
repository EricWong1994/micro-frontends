import { MOUNTED, UNMOUNTING, NOT_MOUNTED } from '../applications/app.helper';

export async function toMountPromise(app) {
	// if (app.status != MOUNTED) {
	if (app.status == MOUNTED) {
		return app;
	}
	app.status = UNMOUNTING;
	await app.mount(app.customProps);
	app.status = MOUNTED;
	return app;
}
