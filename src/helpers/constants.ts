import {Dimensions} from 'react-native';

export const BASE_URL = 'https://api.com';
export const VERSION = 'v1';
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const ASYNC_STORAGE_USER_KEY = `@care/${BRAND}/asyncStorageUserKey`;
export const ASYNC_STORAGE_USER_ID = `@care/${BRAND}/asyncStorageUserId`;
export const ASYNC_STORAGE_USER_REFRESH = `@care/@${BRAND}/asyncStorageUserRefresh`;
