//
//  SketchToXcodeModel.m
//  SketchToXcode
//
//  Created by James Tang on 30/12/2016.
//  Copyright © 2016 MagicSketch. All rights reserved.
//

#import "SketchToXcodeModel.h"
#import "SketchToXcodeBlock.h"

@interface SketchToXcodeModel ()

@end


@implementation SketchToXcodeModel

- (NSString *)combineString:(NSString *)string1 withString:(NSString *)string2 {
    return [string1 stringByAppendingString:string2];
}

- (void)doneSomethingElse {
    NSLog(@"doneSomethingElse");
}

- (void)doSomethingSync:(MOJavaScriptObject *)target {
    SketchToXcodeBlock *block = [[SketchToXcodeBlock alloc] initWithJSFunction:target];
    [block callAction:self];
}

- (void)doSomethingAsync:(MOJavaScriptObject *)target delay:(NSUInteger)seconds {
    COScript *script = [COScript currentCOScript];
    [script setShouldKeepAround:YES];
    SketchToXcodeBlock *block = [[SketchToXcodeBlock alloc] initWithJSFunction:target];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(seconds * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [block callAction:self];
    });
}

@end
