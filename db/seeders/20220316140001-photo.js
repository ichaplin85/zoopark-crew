'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Photos', [{
      title: 'медведь1',
      link: 'https://funart.pro/uploads/posts/2019-11/thumbs/1574092751_medved-v-tajge-foto-34.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'медведь2',
      link: 'https://ptzgovorit.ru/sites/default/files/original_nodes/medved-bear-brown-buryy.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'медведь3',
      link: 'https://best-top10.ru/wp-content/uploads/2016/12/medved_gizli.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'медведь4',
      link: 'https://22century.ru/wp-content/uploads/2019/07/s1200-1.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'медведь5',
      link: 'https://wallpaperscave.ru/images/original/18/04-27/animals-bear-45690.jpg',
      animal_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Photos', null, {});
  }
};
