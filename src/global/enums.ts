enum e_Storage {
	none = "none",
	granted = "granted",
	denied = "denied",
}

enum e_NavLinks {
	home = "/",
	form = "/form",
	guard = "/guard",
	lifecycle = "/lifecycle-hooks",
	dynamic = "/dynamic",
	vuex = "/vuex",
	tdd = "/tdd",
	async = "/async",
}

enum e_DynamicComponents {
	EgParentNone = "EgParentNone",
	EgParentEmit = "EgParentEmit",
	EgParentVuex = "EgParentVuex",
}

export { e_Storage, e_NavLinks, e_DynamicComponents };
