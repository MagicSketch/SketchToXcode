
@import "SketchToXcode.framework/SketchToXcode.js";

var onRun = function(context) {
    log("onRun executed: " + context);

    var result = SketchToXcodeModel.new().combineString_withString_("Hello ", "World!");
    log("result: " + result);
}
