import { openDB } from 'idb';

const db;

let createDB = async () => {
  db = await openDB('bookstore');
};

let getStore = async () => {
  const store = db;
};
