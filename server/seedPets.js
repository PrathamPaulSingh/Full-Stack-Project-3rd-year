// THIS FILE CAN BE DELETED ONCE DATA GETS INSERTED INTO MYSQL

const Pet = require("./models/pets_model"); // Import the Pet model

const petData = [
  {
    pictures: ["https://example.com/images/animal1.jpg"],
    name: "Bella",
    type: "Dog",
    breed: "Labrador Retriever",
    description: "A friendly and energetic Labrador.",
    age: 3,
    region: "Chandigarh",
  },
  {
    pictures: ["https://example.com/images/animal2.jpg"],
    name: "Whiskers",
    type: "Cat",
    breed: "Persian",
    description: "A calm and cuddly Persian cat.",
    age: 2,
    region: "Mohali",
  },
  {
    pictures: ["https://example.com/images/animal3.jpg"],
    name: "Fluffy",
    type: "Rabbit",
    breed: "Angora",
    description: "A soft and playful Angora rabbit.",
    age: 1,
    region: "Panchkula",
  },
  {
    pictures: ["https://example.com/images/animal4.jpg"],
    name: "Chirpy",
    type: "Bird",
    breed: "Parrot",
    description: "An intelligent and talkative parrot.",
    age: 4,
    region: "Chandigarh",
  },
  {
    pictures: ["https://example.com/images/animal5.jpg"],
    name: "Speedy",
    type: "Hamster",
    breed: "Syrian Hamster",
    description: "A curious and energetic little hamster.",
    age: 1,
    region: "Mohali",
  },
  {
    pictures: ["https://example.com/images/animal6.jpg"],
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    description: "A loyal and intelligent Golden Retriever.",
    age: 5,
    region: "Panchkula",
  },
  {
    pictures: ["https://example.com/images/animal7.jpg"],
    name: "Smokey",
    type: "Cat",
    breed: "Siamese",
    description: "A playful and vocal Siamese cat.",
    age: 3,
    region: "Chandigarh",
  },
  {
    pictures: ["https://example.com/images/animal8.jpg"],
    name: "Snowball",
    type: "Rabbit",
    breed: "Mini Lop",
    description: "A small and adorable Mini Lop rabbit.",
    age: 2,
    region: "Mohali",
  },
  {
    pictures: ["https://example.com/images/animal9.jpg"],
    name: "Sunny",
    type: "Bird",
    breed: "Canary",
    description: "A bright and cheerful Canary bird.",
    age: 1,
    region: "Panchkula",
  },
  {
    pictures: ["https://example.com/images/animal10.jpg"],
    name: "Peanut",
    type: "Hamster",
    breed: "Dwarf Hamster",
    description: "A tiny and curious Dwarf hamster.",
    age: 1,
    region: "Chandigarh",
  },
  {
    pictures: ["https://example.com/images/animal11.jpg"],
    name: "Ruby",
    type: "Dog",
    breed: "Beagle",
    description: "An active and curious Beagle.",
    age: 4,
    region: "Mohali",
  },
];

const seedDatabase = async () => {
  try {
    await Pet.bulkCreate(petData); // No need to sync again
    console.log("✅ Pet data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
