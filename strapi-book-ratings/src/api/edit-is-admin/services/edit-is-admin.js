'use strict';

/**
 * edit-is-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::edit-is-admin.edit-is-admin');
