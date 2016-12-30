
var SketchToXcode_FrameworkPath = SketchToXcode_FrameworkPath || COScript.currentCOScript().env().scriptURL.path().stringByDeletingLastPathComponent();
var SketchToXcode_Log = SketchToXcode_Log || log;

(function() {
    var mocha = Mocha.sharedRuntime();

    var frameworkName = "SketchToXcode";

    var directory = SketchToXcode_FrameworkPath;

     if (mocha.valueForKey(frameworkName)) {
        SketchToXcode_Log("😎 loadFramework: `" + frameworkName + "` already loaded.");
        return true;
     } else if ([mocha loadFrameworkWithName:frameworkName inDirectory:directory]) {
        SketchToXcode_Log("✅ loadFramework: `" + frameworkName + "` success!");
        mocha.setValue_forKey_(true, frameworkName);
        return true;
    } else {
        SketchToXcode_Log("❌ loadFramework: `" + frameworkName + "` failed!: " + directory + ". Please define SketchToXcode_FrameworkPath if you're trying to @import in a custom plugin");
        return false;
    }
})();


var SketchToXcodeBlockCreate = function(handler) {
    var block = SketchToXcodeBlock.targetWithJSFunction(handler);
    return block;
};
