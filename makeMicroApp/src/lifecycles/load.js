import { LOAD_RESOURCE_CODE, NOT_BOOTSTRAPPED } from "../applications/app.helper";

function flattenFnArray(fns) {
    fns = Array.isArray(fns) ? fns : [fns];
    return (props) => fns.reduce(
            (p, fn) => p.then(() => fn(props))
            , Promise.resolve())
    // return function(props) {
    //     // Promise.resolve().then(() => promise1(props)).then(() => promise2(props))
    //     return fns.reduce(
    //         (p, fn) => p.then(() => fn(props)
    //         , Promise.resolve()))
    // }
}

export async function toLoadPromise(app) {
    if (app.loadPromise) {
        return app.loadPromise
    }

    return (app.loadPromise = Promise.resolve().then(async () => {
        app.status =  LOAD_RESOURCE_CODE;
        let {bootstrap, mount, unmount} = await app.loadApp(app.customProps);
        app.status = NOT_BOOTSTRAPPED;
        app.bootstrap = flattenFnArray(bootstrap);
        app.mount = flattenFnArray(mount);
        app.unmount = flattenFnArray(unmount);
        return app;
    }))
}