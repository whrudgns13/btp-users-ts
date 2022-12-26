import type { ScimMeta } from './scim-meta';
import type { ScimGroupMemberPatch } from './scim-group-member-patch';
export type ScimGroupPatch = {
    'id'?: string;
    'meta'?: ScimMeta;
    'displayName'?: string;
    'zoneId'?: string;
    'description'?: string;
    'members'?: ScimGroupMemberPatch[];
} | Record<string, any>;
