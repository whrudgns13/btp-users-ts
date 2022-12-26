"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCIMGroupsRoleCollectionsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SCIMGroupsRoleCollectionsApi'.
 * This API is part of the 'PlatformAPI' service.
 */
exports.SCIMGroupsRoleCollectionsApi = {
    /**
     * Returns all role collections of the current subaccount. The System for Cross-domain Identity Management (SCIM) interface for groups supplements the relevant UAA [groups](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#groups) interface. Groups in the Authorization and Trust Management service are mapped to role collections.
     * @param queryParameters - Object containing the following keys: count, startIndex, sortOrder, sortBy.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getAllGroupsUsingGet: (queryParameters) => new openapi_1.OpenApiRequestBuilder('get', '/Groups', {
        queryParameters
    }),
    /**
     * Returns a role collection specified by the ID. The System for Cross-domain Identity Management (SCIM) interface for groups supplements the relevant UAA [groups](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#groups) interface. Groups in the Authorization and Trust Management service are mapped to role collections.
     * @param id - The ID of the role collection.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    getGroupUsingGet: (id) => new openapi_1.OpenApiRequestBuilder('get', '/Groups/{id}', {
        pathParameters: { id }
    }),
    /**
     * Adds or removes the members of an existing role collection specified by the ID. You can also update the description of the role collection. Provide an integer value in the If-Match field. The System for Cross-domain Identity Management (SCIM) interface for groups supplements the relevant UAA [groups](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#groups) interface.
     * @param id - The ID of the role collection.
     * @param body - The content of the role collection object. Only the description and member attributes are evaluated. For the member, specify type USER and the ID of the user as the value to identify the user to assign. Use the /Users endpoint to get the ID of the user. Any members not listed in the JSON you submit are removed from the role collection assignment.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateGroupUsingPut: (id, body) => new openapi_1.OpenApiRequestBuilder('put', '/Groups/{id}', {
        pathParameters: { id },
        body
    }),
    /**
     * Adds or removes members from an existing role collection specified by the role collection ID. You can also update the description of the role collection. Provide an integer in the If-Match field. The System for Cross-domain Identity Management (SCIM) interface for groups supplements the relevant UAA [groups](https://docs.cloudfoundry.org/api/uaa/version/74.0.0/index.html#groups) interface.
     * @param id - The ID of the role collection.
     * @param body - The content of the role collection to patch. You can only change the description of the role collection and add or remove members.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    patchGroupUsingPatch: (id, body) => new openapi_1.OpenApiRequestBuilder('patch', '/Groups/{id}', {
        pathParameters: { id },
        body
    }),
    //롤에 유저 추가
    addUserRoleUsingPost: (id, body) => new openapi_1.OpenApiRequestBuilder('post', '/Groups/{id}/members', {
        pathParameters: { id },
        body
    }),
    //롤에 해당한 유저 삭제
    deleteUserRoleUsingDelete: (groupId, userId) => new openapi_1.OpenApiRequestBuilder('delete', '/Groups/{groupId}/members/{userId}', {
        pathParameters: { groupId, userId }
    }),
    deleteGroupRole: (roleId) => new openapi_1.OpenApiRequestBuilder('delete', '/Groups/{roleId}', {
        pathParameters: { roleId }
    })
};
