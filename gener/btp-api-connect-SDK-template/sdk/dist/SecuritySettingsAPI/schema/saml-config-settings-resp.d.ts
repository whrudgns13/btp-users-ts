import type { SamlKey } from './saml-key';
export type SamlConfigSettingsResp = {
    'disableInResponseToCheck'?: boolean;
    'entityID'?: string;
    'activeKeyId'?: string;
    'keys'?: SamlKey;
} | Record<string, any>;
