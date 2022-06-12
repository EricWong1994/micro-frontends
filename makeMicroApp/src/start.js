import {reroute} from './navigations/reroute'

export let started = false;
export function start() {
    started = true
    reroute();
}