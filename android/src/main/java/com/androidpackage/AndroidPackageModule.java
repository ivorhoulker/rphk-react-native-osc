package com.androidpackage;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AndroidPackageModule.NAME)
public class AndroidPackageModule extends ReactContextBaseJavaModule {
  public static final String NAME = "Osc";

  public AndroidPackageModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }


  // Example method
  // See https://reactnative.dev/docs/native-modules-android
  @ReactMethod
  public void createClient(String a, int b) {
    return a;
  }
  @ReactMethod
  public void createServer(int a) {
    return a;
  }
  @ReactMethod
  public void sendMessage(String a, int b) {
    return a;
  }
  @ReactMethod
  public void addListener(String a) {
    return a;
  }
  @ReactMethod
  public void removeListeners(int b) {
    return b;
  }

};