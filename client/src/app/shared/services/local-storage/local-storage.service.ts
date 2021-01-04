import { Injectable, isDevMode, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private isBrowserPlatform: boolean;

  private readonly localStorage = window.localStorage;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {
    this.isBrowserPlatform = isPlatformBrowser(this.platformId);
  }

  public getItem<T>(key: string): T | null | undefined {
    if (this.isBrowserPlatform) {
      try {
        const item = this.localStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
      } catch (error) {
        this.logError(error);
        return null;
      }
    }
    return null;
  }

  public setItem<T>(key: string, value: T): void {
    if (this.isBrowserPlatform) {
      try {
        this.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        this.logError(error);
      }
    }
  }

  public removeItem(key: string): void {
    if (this.isBrowserPlatform) {
      try {
        this.localStorage.removeItem(key);
      } catch (error) {
        this.logError(error);
      }
    }
  }

  public clearStorage(): void {
    if (this.isBrowserPlatform) {
      try {
        this.localStorage.clear();
      } catch (error) {
        this.logError(error);
      }
    }
  }

  private logError(error: string): void {
    if (isDevMode()) {
      console.log(error);
    }
  }

}
