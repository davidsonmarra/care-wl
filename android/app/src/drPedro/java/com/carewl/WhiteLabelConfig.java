package com.carewl;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

import javax.annotation.Nonnull;
import java.util.Map;
import java.util.HashMap;

public class WhiteLabelConfig extends ReactContextBaseJavaModule {

    @Nonnull
    private final String appName;

    public WhiteLabelConfig(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);

        this.appName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.white_label_app_name);
    }


    @Nonnull
    @Override
    public String getName() {
        return "WhiteLabelConfig";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getAppName() {
        return appName;
    }

    @Nonnull
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();

        WritableMap themeMap = Arguments.createMap();

        WritableMap colorsMap = Arguments.createMap();
        colorsMap.putString("background", "#d2ebfa");
        colorsMap.putString("primary", "#037fff");
        colorsMap.putString("secondary", "#ffffff");
        colorsMap.putString("disabled", "#037fff55");
        colorsMap.putString("text", "#303030");
        colorsMap.putString("error", "#df1f1f");
        colorsMap.putString("success", "#16ab30");
        colorsMap.putString("warning", "#f3c82e");
        colorsMap.putString("brightness", "rgba(0, 0, 0, 0.5)");
        colorsMap.putString("line", "#808080");

        themeMap.putMap("colors", colorsMap);
        themeMap.putString("mode", "light");

        constants.put("theme", themeMap);
        return constants;
    }
}