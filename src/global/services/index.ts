import axios, {AxiosInstance} from 'axios';
import {BASE_URL, VERSION} from '@helpers';

export const api: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/${VERSION}`,
});
