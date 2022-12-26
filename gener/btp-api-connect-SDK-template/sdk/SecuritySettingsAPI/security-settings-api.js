"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecuritySettingsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'SecuritySettingsApi'.
 * This API is part of the 'SecuritySettingsAPI' service.
 */
exports.SecuritySettingsApi = {
    /**
     * Returns the security settings of the current tenant. The settings include information about the signing key for SAML tokens and the signing key for access tokens.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    readSettings: () => new openapi_1.OpenApiRequestBuilder('get', '/sap/rest/authorization/v2/securitySettings'),
    /**
     * Updates the security settings of the current tenant, for example the signing key for SAML token or the signing key for access tokens.
     * @param body - Configuration of the security settings in JSON format.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateSettings: (body) => new openapi_1.OpenApiRequestBuilder('patch', '/sap/rest/authorization/v2/securitySettings', {
        body
    })
};
