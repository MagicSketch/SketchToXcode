//
//  SketchToXcodeBlock.m
//  SketchToXcode
//
//  Created by James Tang on 30/12/2016.
//  Copyright © 2016 MagicSketch. All rights reserved.
//

#import "SketchToXcodeBlock.h"

@interface SketchToXcodeBlock ()

@property (weak) COScript *cosContext;
- (JSObjectRef)JSObject;

@end

@implementation SketchToXcodeBlock

+ (instancetype)targetWithJSFunction:(MOJavaScriptObject *)jsFunction {
    return [[[self class] alloc] initWithJSFunction:jsFunction];
}

- (instancetype)initWithJSFunction:(MOJavaScriptObject *)jsFunction {
    self = [super init];
    if (self != nil) {
        [self setJsFunction:jsFunction];

        [self setCosContext:[COScript currentCOScript]];

    }

    return self;
}

- (void)callAction:(id)sender {

    if (!_cosContext) {
        NSLog(@"%s:%d", __FUNCTION__, __LINE__);
        NSLog(@"_cosContext is nil when calling.  Did it dealloc or was it never set?");
    }

    JSObjectRef actionRef = [[self valueForKeyPath:@"jsFunction"] JSObject];

    [_cosContext callJSFunction:actionRef withArgumentsInArray:@[sender]];
}

- (SEL)action {
    return @selector(callAction:);
}

@end
