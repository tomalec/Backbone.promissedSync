var nativeSync = Backbone.sync;
Backbone.sync = function promiseSync(method, model, options) {

	return nativeSync.apply(this, arguments).pipe(function resolveWithModel() {
		return model;
	});
};