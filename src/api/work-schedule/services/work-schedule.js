'use strict';

/**
 * work-schedule service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::work-schedule.work-schedule');
