(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(["backbone", "jquery"], function (Backbone, $) {
            // Also create a global in case some scripts
            // that are loaded still are looking for
            // a global even when an AMD loader is in use.
            //Backbone.promissedSync =
            factory(Backbone, $);
            return Backbone;
        });
    } else {
        // Browser globals
        //root.Backbone = 
        factory(root.Backbone, root.jQuery);
    }
}(this, function (Backbone, $) {
var nativeSync = Backbone.sync;
Backbone.sync = function promiseSync(method, model, options) {

	return nativeSync.apply(this, arguments).pipe(function resolveWithModel() {
		return model;
	});
};
}));