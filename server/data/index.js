import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "First",
    lastName: "User",
    email: "a@gmail.com",
    password: "p",
    picturePath: "p11.jpeg",
    friends: [],
    location: "India,New Delhi",
    occupation: "Software Engineer",
    viewedProfile: 324,
    impressions: 3244,
    createdAt: 3124325325,
    updatedAt: 3244544366,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Second",
    lastName: "User",
    email: "tda@gmail.com",
    password: "pass",
    picturePath: "p3.jpeg",
    friends: [],
    location: "USA",
    occupation: "SDE",
    viewedProfile: 45,
    impressions: 455,
    createdAt: 345434546,
    updatedAt: 4363546374,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Random",
    lastName: "Dude",
    email: "rd@gmail.com",
    password: "p2df",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Brampton",
    occupation: "Hacker",
    viewedProfile: 2342463,
    impressions: 235246,
    createdAt: 536463634,
    updatedAt: 436634456,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "First",
    lastName: "User",
    location: "New York, CA",
    description: "India,New Delhi",
    picturePath: "post1.jpeg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "Comment 1",
      "Comment2",
      "Comment3",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Random",
    lastName: "Dude",
    location: "Brampton",
    description:
      "I have good bikes",
    picturePath: "post2.jpeg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "Nice pic",
      "Where You at",
      "Coz...........",
      "Not Again",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Second",
    lastName: "User",
    location: "USA",
    description:
      "I need some rest",
    picturePath: "post3.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "Great....",
      "Some Long AComent",
      "Looking great",
      "Just for fun",
      "Done",
    ],
  },
 ];
