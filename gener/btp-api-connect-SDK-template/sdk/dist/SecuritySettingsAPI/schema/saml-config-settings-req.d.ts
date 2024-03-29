import type { SamlKey } from './saml-key';
export type SamlConfigSettingsReq = {
    'changeMode'?: 'ADD' | 'UPDATE' | 'DELETE';
    'keyId'?: string;
    'disableInResponseToCheck'?: boolean;
    'key'?: SamlKey;
} | Record<string, any>;
