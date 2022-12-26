import type { RoleAttribute } from './role-attribute';
export type RoleUpdate = {
    'attributeList'?: RoleAttribute[];
    'description'?: string;
} | Record<string, any>;
