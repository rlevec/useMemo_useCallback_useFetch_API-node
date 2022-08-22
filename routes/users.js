import express from "express";

const router = express.Router();

const users = [
  {
  "id": "rec43w3ipXvP28vog",
  "fields": {
    "price": 59.99,
    "name": "Kettlebell Pro Competition 8 kg",
    "image": [
      {
      "id": "attcvDDMikF6G2iNi",
      "url": "https://i.imgur.com/YYuWaEh.jpg",
      },
    ]
  }
 },
 {
  "id": "rec44w5ipXvP18vog",
  "fields": {
    "price": 79.99,
    "name": "Kettlebell Pro Competition 12 kg",
    "image": [
      {
      "id": "attcvDDMikF7G3iNi",
      "url": "https://i.imgur.com/Hf2a7TO.jpg",
      },
    ]
  }
 },
 {
  "id": "rec54w6ipXvP28vog",
  "fields": {
    "name": "Kettlebell Pro Competition 16 kg",
  }
 },
 {
  "id": "rex54w6iuXvP28vog",
  "fields": {
    "price": 129.99,
    "name": "Kettlebell Pro Competition 20 kg",
    "image": [
      {
      "id": "actcvDDMijF1G4iMi",
      "url": "https://i.imgur.com/7u6pdsV.jpg",
      },
    ]
  }
 },
 {
  "id": "zex54w6juXvP78vog",
  "fields": {
    "price": 159.99,
    "name": "Kettlebell Pro Competition 24 kg",
    "image": [
      {
      "id": "actdvDDMfjF1G4iMi",
      "url": "https://i.imgur.com/uxUAnUW.jpg",
      },
    ]
  }
 },
 {
  "id": "zux59w8jjXvZP78vxg",
  "fields": {
    "price": 199.99,
    "name": "Kettlebell Pro Competition 28 kg",
    "image": [
      {
      "id": "uctuvDDMfjF1B7iMi",
      "url": "https://i.imgur.com/s0W8Cdu.jpg",
      },
    ]
  }
 },
 {
  "id": "zix59w8ljXvZP78vxg",
  "fields": {
    "price": 215.99,
    "name": "Kettlebell Pro Competition 32 kg",
    "image": [
      {
      "id": "pctuvDDMfjF1B7iMi",
      "url": "https://i.imgur.com/s0W8Cdu.jpg",
      },
    ]
  }
 },
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router
