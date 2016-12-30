
@import "SketchToXcode.framework/SketchToXcode.js";

var runBasicExample = function(context) {
    log("onRun executed: " + context);

    var result = SketchToXcodeModel.new().combineString_withString_("Hello ", "World!");
    log("result: " + result);
    context.document.showMessage("result: " + result);
}

var runAsyncExample = function(context) {

    var add = function(a, b) {
        return a + b;
    }

    SketchToXcodeModel.new().doSomethingSync(function(sender) {
                                             log(sender);
                                             log(add(1, 2));
                                             log("done sync");
                                             context.document.showMessage("add(1, 2): " + add(1, 2));
                                             });


    SketchToXcodeModel.new().doSomethingAsync_delay_(function(sender) {
                                                     log(sender);
                                                     log(add(3, 2));
                                                     log("done async without delay");
                                                     context.document.showMessage("add(3, 2): after 3 seconds " + add(3, 2));
                                                     }, 3);
}



var runBackgroundExample = function(context) {

    function sleep(delay) {
        log("sleeping for " + delay);
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

    context.document.showMessage("will sleep for 5 seconds");
    SketchToXcodeModel.new().doSomethingInBackground_completion_(function(sender) {
                                                                     sleep(5000);
                                                                     log("sleep thread:" + NSThread.currentThread())
                                                                 }, function (sender) {
                                                                     log("completed thread:" + NSThread.currentThread());
                                                                     log("completed sleeping: " + sender);
                                                                     context.document.showMessage("completed sleeping");
                                                                 });
}
