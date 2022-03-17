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
    },
      {
        title: 'Волк1',
        link: 'https://d.newsweek.com/en/full/594547/grey-wolves-europe.jpg',
        animal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Волк2',
        link: 'https://wallpaperscave.ru/images/original/18/08-14/animals-wolves-75880.jpg',
        animal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Волк3',
        link: 'https://lookw.ru/9/926/1566939869-1-12.jpg',
        animal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Волк4',
        link: 'https://luxfon.com/download.php?file=201407/1920x1200/luxfon.com-31744.jpg',
        animal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лев1',
        link: 'https://fotovmire.ru/wp-content/uploads/2019/03/9853/korol-lev-lezhit-na-trave-vozle-kamnja.jpg',
        animal_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лев2',
        link: 'https://krasivosti.pro/uploads/posts/2021-09/1632874149_1-krasivosti-pro-p-nastoyashchie-lvi-zhivotnie-krasivo-foto-1.jpg',
        animal_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лев3',
        link: 'https://faunistics.com/wp-content/uploads/2019/02/7-1.jpg',
        animal_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лев4',
        link: 'https://million-wallpapers.ru/wallpapers/4/55/17694869609965040589/semejnyj-ochag-lva-i-lvicy.jpg',
        animal_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лев5',
        link: 'https://kartinkin.net/uploads/posts/2021-10/1633801177_49-kartinkin-net-p-praid-lvov-art-krasivo-52.jpg',
        animal_id: 3,
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
