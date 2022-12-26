import type { ScimGroup } from './scim-group';
export type ScimGroups = {
    'resources'?: ScimGroup[];
    'startIndex'?: number;
    'itemsPerPage'?: number;
    'totalResults'?: number;
    'schemas'?: string[];
} | Record<string, any>;
