'use strict';

const conditions = [
  {
    displayName: 'Max Published Presenters',
    name: 'max-published-presenters',
    plugin: 'admin',
    async handler(user) {
      // Check the total number of published "Presenter" entries
      const presenterCount = await strapi.query('presenter').count({
        published_at_null: false,
      });

      // Limit the total published entries to no more than 3
      return presenterCount <= 3;
    },
  },
  // Other conditions...
];

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/*{ strapi }*/) {
    await strapi.admin.services.permission.conditionProvider.registerMany(conditions);

  },
};
