const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/hotelDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define Hotel Schema
const hotelSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    location: String,
    image: String,
    description: String,
    amenities: [String],
    lat: Number,
    lng: Number
});

// Create Hotel Model
const Hotel = mongoose.model("Hotel", hotelSchema);

// Hotel Data
const hotels = [
    {
        name: "Grand Palace",
        location: "Conoor",
        image: "img/about-2.jpg",
        description: "A luxurious hilltop retreat offering breathtaking views and world-class hospitality.",
        amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Gym"],
        lat: 11.3500,
        lng: 76.7955
    },
    {
        name: "Ocean View",
        location: "Bangalore",
        image: "img/about-3.jpg",
        description: "A hotel with stunning ocean views and premium services in the heart of Bangalore.",
        amenities: ["Beach Access", "Bar", "Room Service", "Airport Shuttle"],
        lat: 12.9716,
        lng: 77.5946
    },
    {
        name: "Mountain Retreat",
        location: "Chennai",
        image: "img/about-1.jpg",
        description: "A peaceful mountain retreat, perfect for adventure seekers and relaxation lovers.",
        amenities: ["Hiking Trails", "Campfire", "Mountain View", "24/7 Security"],
        lat: 13.0827,
        lng: 80.2707
    },
    {
        name: "City Lights",
        location: "Goa",
        image: "img/goa.png",
        description: "A modern hotel located in the heart of Goa, offering luxury and excitement.",
        amenities: ["Casino", "Nightclub", "Fine Dining", "Private Beach"],
        lat: 15.2993,
        lng: 74.1240
    },
    {
        name: "Luxury Stay",
        location: "Kerala",
        image: "img/hotel.jpg",
        description: "A premium resort in Kerala, offering a peaceful backwater experience and fine dining.",
        amenities: ["Boat Rides", "Yoga Center", "Spa", "Free Breakfast"],
        lat: 10.8505,
        lng: 76.2711
    },
    {
        name: "Temple City",
        location: "Madurai",
        image: "img/room-1.jpg",
        description: "A comfortable stay near the historic Meenakshi Temple, blending tradition and luxury.",
        amenities: ["Temple View", "Traditional Food", "Car Rental", "Conference Hall"],
        lat: 9.9252,
        lng: 78.1198
    },
    {
        name: "Race Course Luxury Suite",
        location: "Coimbatore",
        image: "img/outhouse.jpeg",
        description: "A luxurious suite located near the Coimbatore Race Course, offering premium amenities.",
        amenities: ["Luxury Spa", "Gym", "Bar", "Business Center"],
        lat: 11.0168,
        lng: 76.9558
    },
    {
        name: "Nilgiris Stay",
        location: "Nilgiris",
        image: "img/room-2.jpg",
        description: "An eco-friendly stay in the serene Nilgiris, surrounded by lush green hills.",
        amenities: ["Nature Walks", "Bonfire", "Organic Food", "Wildlife Safari"],
        lat: 11.4916,
        lng: 76.7337
    },
    {
        name: "Kodai Resorts",
        location: "Kodaikanal",
        image: "img/room-3.jpg",
        description: "A cozy resort in the hills of Kodaikanal, perfect for families and honeymooners.",
        amenities: ["Lake View", "Cycling", "Trekking", "Restaurant"],
        lat: 10.2381,
        lng: 77.4892
    },
    {
        name: "Ooty Chill City",
        location: "Ooty",
        image: "img/room4.png",
        description: "An elegant resort in the queen of hill stations, Ooty, with a great climate all year round.",
        amenities: ["Tea Garden Tours", "Campfire", "Sightseeing Packages", "Horse Riding"],
        lat: 11.4102,
        lng: 76.6950
    }
];

// Insert Hotels into MongoDB
async function insertHotels() {
    try {
        await Hotel.deleteMany({}); // Removes old hotels (optional)
        await Hotel.insertMany(hotels);
        console.log(" Hotels added successfully!");
    } catch (error) {
        console.error(" Error inserting hotels:", error);
    } finally {
        mongoose.connection.close();
    }
}

insertHotels();
