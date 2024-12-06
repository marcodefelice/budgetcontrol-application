import { Capacitor } from '@capacitor/core';

class Libs {
   generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

   async isAndroidPlatform() {
    const info = await Capacitor.getPlatform();
    console.debug('isAndroidPlatform', info);
    return info === 'android';
  }

   async isIosPlatform() {
    const info = await Capacitor.getPlatform();
    console.debug('isIosPlatform', info);
    return info === 'ios';
  }

   async isAppInstalled(): Promise<boolean> {
    const info = Capacitor.isNativePlatform()
    console.debug('isAppInstalled', info);
    return info;
  }

  async isMobile(): Promise<boolean> {
    const platform = await Capacitor.getPlatform();
    console.debug('isMobile', platform);
    return platform === 'ios' || platform === 'android';
  }
}

export const libs = new Libs();