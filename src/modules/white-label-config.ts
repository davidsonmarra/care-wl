import {NativeModules} from 'react-native';

export default class WhiteLabelConfig {
  public static readonly APP_NAME: string =
    NativeModules.WhiteLabelConfig.getAppName();
  public static readonly THEME: string = NativeModules.WhiteLabelConfig.theme;
}
