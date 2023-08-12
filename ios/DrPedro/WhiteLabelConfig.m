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
          @"brightness": @"rgba(0, 0, 0, 0.5)",
          @"cardBackground": @"#f1f1f111",
        },
        @"mode": @"light"
      }
    };
  }

  + (BOOL)requiresMainQueueSetup {
    return YES;
  }

@end
