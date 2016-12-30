//
//  SketchToXcodeBlock.h
//  SketchToXcode
//
//  Created by James Tang on 30/12/2016.
//  Copyright © 2016 MagicSketch. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <CocoaScript/COScript.h>
#import <Mocha/Mocha.h>

@interface SketchToXcodeBlock : NSObject

@property (strong) MOJavaScriptObject *jsFunction;
@property NSUInteger callCount;

+ (instancetype)targetWithJSFunction:(MOJavaScriptObject *)jsFunction;
- (instancetype)initWithJSFunction:(MOJavaScriptObject *)jsFunction;

- (void)callAction:(id)sender;
- (SEL)action;

@end
