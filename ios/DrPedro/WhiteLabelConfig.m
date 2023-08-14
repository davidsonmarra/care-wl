//
//  WhiteLabelConfig.m
//  DrPedro
//
//  Created by Davidson Marra on 10/08/23.
//

#import <Foundation/Foundation.h>
#import "WhiteLabelConfig.h"

@implementation WhiteLabelConfig

  RCT_EXPORT_MODULE(WhiteLabelConfig);
 
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getAppName) {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleDisplayName"];
  }

  - (NSDictionary *)constantsToExport {
    return @{
      @"theme": @{
        @"colors": @{
          @"background": @"#d2ebfa",
          @"primary": @"#037fff",
          @"secondary": @"#ffffff",
          @"disabled": @"#037fff55",
          @"text": @"#303030",
          @"error": @"#df1f1f",
          @"success": @"#16ab30",
          @"warning": @"#f3c82e",
          @"brightness": @"rgba(0, 0, 0, 0.5)",
          @"line": @"#808080",
        },
        @"mode": @"light"
      }
    };
  }

  + (BOOL)requiresMainQueueSetup {
    return YES;
  }

@end
