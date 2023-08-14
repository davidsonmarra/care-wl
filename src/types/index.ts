export type {ValidationLoginSchemaProps} from './schemas';

export interface BottomModalRefProps {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
}

export interface TokenProps {
  token: string;
  id: string;
  refresh: string;
}

export type {
  PublicRootStackParamList,
  AuthRootStackParamList,
} from './navigation';
