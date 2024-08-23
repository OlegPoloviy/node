'use strict';

/** @type {import('sequelize-cli').Migration} */
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

    await queryInterface.bulkInsert('books', [
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald'
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee'
      },
      {
        title: '1984',
        author: 'George Orwell'
      },
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen'
      },
      {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger'
      },
      {
        title: 'Moby-Dick',
        author: 'Herman Melville'
      },
      {
        title: 'The Odyssey',
        author: 'Homer'
      },
      {
        title: 'War and Peace',
        author: 'Leo Tolstoy'
      },
      {
        title: 'The Divine Comedy',
        author: 'Dante Alighieri'
      },
      {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky'
      },
      {
        title: 'Brave New World',
        author: 'Aldous Huxley'
      },
      {
        title: 'The Brothers Karamazov',
        author: 'Fyodor Dostoevsky'
      },
      {
        title: 'Ulysses',
        author: 'James Joyce'
      },
      {
        title: 'The Iliad',
        author: 'Homer'
      },
      {
        title: 'The Sound and the Fury',
        author: 'William Faulkner'
      },
      {
        title: 'Great Expectations',
        author: 'Charles Dickens'
      },
      {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez'
      },
      {
        title: 'Wuthering Heights',
        author: 'Emily Brontë'
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien'
      },
      {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("books",null,{})
  }
};
