'use strict';

/**
 * flip-card service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flip-card.flip-card');
