//
//  SketchToXcodeModel.h
//  SketchToXcode
//
//  Created by James Tang on 30/12/2016.
//  Copyright © 2016 MagicSketch. All rights reserved.
//

#import <Foundation/Foundation.h>

@class MOJavaScriptObject;

@interface SketchToXcodeModel : NSObject

- (NSString *)combineString:(NSString *)string1 withString:(NSString *)string2;
- (void)doSomethingSync:(MOJavaScriptObject *)block;
- (void)doSomethingAsync:(MOJavaScriptObject *)block delay:(NSUInteger)seconds;

@end
