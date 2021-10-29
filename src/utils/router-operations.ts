import router from "@/router";

export class RouterOperations {
	static reloadRouteAfterSessionStorageRemoved(key: string) {
		sessionStorage.removeItem(key);
		router.go(0); // update SPA
	}
}
