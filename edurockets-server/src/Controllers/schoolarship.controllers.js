const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const schoolarship = require('../models/schoolarShip');

const secret = process.env.JWT_SECRET;
const expires = process.env.JWT_EXPIRES;
const expiresNum = process.env.JWT_EXPIRATION_NUM;
const env = process.env.NODE_ENV;

exports.createSchoolarship = async (req, res) => {
  try {
    const foundedSchoolarship = await schoolarship.findOne({ ...req.body });
    foundedSchoolarship
      ? res.status(400).json({ message: 'Ya existe ' })
      : schoolarship
          .create({
            ...req.body,
          })
          .then((createdSchoolarship) => {
            res.status(200).json({ message: 'Success', data: createdSchoolarship });
          })
          .catch((error) => {
            res.status(400).json({ message: 'Bad Request', error });
          });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Bad Request', error });
  }
};

exports.getSchoolarship = async (req, res) => {
  try {
    const { _id } = req.body;
    schoolarship
      .findOne({ _id, isActive: true })
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch((error) => {
        res.status(400).json({ message: 'Bad Request', error });
      });
  } catch (error) {
    res.status(400).json({ message: 'Bad Request' });
  }
};
