
@import "SketchToXcode.framework/SketchToXcode.js";

var onRun = function(context) {
    log("onRun executed: " + context);

    var result = SketchToXcodeModel.new().combineString_withString_("Hello ", "World!");
    log("result: " + result);


    var add = function(a, b) {
        return a + b;
    }

    /*
    var block = SketchToXcodeBlockCreate(function(sender) {
                                         log(sender);
                                         log(add(3, 2));
                                         log("done async");
                                         });

    SketchToXcodeModel.new().doSomethingAsync_delay_(block, 3);

    SketchToXcodeModel.new().doSomethingSync(SketchToXcodeBlockCreate(function(sender) {
                                                    log(sender);
                                                    log(add(1, 2));
                                                    log("done sync");
                                                    }));

*/
    log(@"before current: " + [COScript currentCOScript]);
    SketchToXcodeModel.new().doSomethingAsync(function(sender) {
                                              log(sender);
                                              log(add(3, 2));
                                              log("done async without delay");
                                              });

}
