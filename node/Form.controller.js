const createError = require('http-errors');
const mongoose = require('mongoose');

const Form = require('../Models/Form.model');

module.exports = {
  getForm: async (req, res, next) => {
    try {
      const result = [
        { id: 0, q: '1. Who is the first Nobel Prize winner?', optiona: 'Madame Querie', optionb: 'Issac Newton', optionc: 'Albert Einstein', optiond: 'Thomas Edison', set: 0, lastSet: false },
        { id: 1, q: '2. Who is the first Football World Cup Winner?', optiona: 'Brazil', optionb: 'Argentina', optionc: 'Uruguay', optiond: 'France', set: 0, lastSet: false },
        { id: 2, q: '3. Who is the owner of Tesla?', optiona: 'Elon Musk', optionb: 'Mark Zuckerburg', optionc: 'Sunil Mittal', optiond: 'Mukhesh Ambani', set: 0, lastSet: false },
        { id: 3, q: '4. Who invented pencillin?', optiona: 'Alexander the Great', optionb: 'Alexander Graham Bell', optionc: 'Alexander Fleming', optiond: 'Alfred Nobel', set: 0, lastSet: false },
        { id: 4, q: '5. Who is the first Nobel Prize winner?', optiona: 'Frédéric Passy', optionb: 'Issac Newton', optionc: 'Madame Querie', optiond: 'John Clauser', set: 0, lastSet: false },
        { id: 5, q: '6. Who is the president of United States?', optiona: 'Joe Biden', optionb: 'Donald Trump', optionc: 'Barack Obama', optiond: 'Bill Gates', set: 1, lastSet: true },
        { id: 6, q: '7. Who is the current prime minister of India?', optiona: 'Rahul Gandhi', optionb: 'Dr. Manmohan Singh', optionc: 'Narendra Modi', optiond: 'Dr. APJ Abdul Kalam', set: 1, lastSet: true },
        { id: 7, q: '8. Where is the 2022 FIFA world cup held?', optiona: 'Brazil', optionb: 'Argentina', optionc: 'Qatar', optiond: 'France', set: 1, lastSet: true },
        { id: 8, q: '9. Who won the 2022 T20 World Cup', optiona: 'India', optionb: 'Pakistan', optionc: 'England', optiond: 'New Zealand',set:1, lastSet: true },
        { id: 9, q: '10. Who scored the highest runs in 2022 T20 World Cup', optiona: 'Jos Buttler', optionb: 'Surya Kumar Yadav', optionc: 'Virat Kohli', optiond: 'Mohammad Rizwan', set: 1, lastSet: true }
      ];       
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  },

  submitForm: async (req, res, next) => {
    try {
      // const form = new Product(req.body);     
      res.send('Success');
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }
};
