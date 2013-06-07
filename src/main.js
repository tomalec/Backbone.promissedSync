var nativeSync = Backbone.sync;
Backbone.sync = function promiseSync(method, model, options) {

	//return Q(nativeSync.apply(this, arguments)).resolveWith(model);
	//return nativeSync.apply(this, arguments).pipe(function resolveWithModel() {
	return nativeSync.apply(this, arguments).then(function resolveWithModel() {
		return model;
	});
};