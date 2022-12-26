"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * Rounds the currency value to 2 digits
     *
     * @public
     * @param {string} value value to be formatted
     * @returns {string} formatted currency value with 2 digits
     */
    formatValue: (value) => {
        if (!value) {
            return "";
        }
        try {
            return parseFloat(value).toFixed(2);
        }
        catch (error) {
            return value;
        }
    }
};
