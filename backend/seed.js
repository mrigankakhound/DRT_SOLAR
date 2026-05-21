require('dotenv').config();
const mongoose = require('mongoose');
const Testimonial = require('./models/Testimonial');
const connectDB = require('./config/db');

const testimonials = [
  {
    name: 'Rajesh Baruah',
    location: 'Jorhat',
    review:
      "My electricity bill dropped from ₹6,000 to under ₹400 after installing DRT ENTERPRISE's solar kit. The installation team was professional and completed everything in a day. Best investment I've ever made!",
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    location: 'Jorhat',
    review:
      "We're saving over ₹1.5 lakh monthly on our hotel's electricity costs. DRT ENTERPRISE handled everything from design to commissioning. Highly recommended for commercial setups!",
    rating: 5,
  },
  {
    name: 'Arnab Mahanta',
    location: 'Dibrugarh',
    review:
      'The battery backup system has been a game changer for our area with frequent power outages. We now have 24-hour uninterrupted power. DRT ENTERPRISE delivered exactly as promised.',
    rating: 5,
  },
  {
    name: 'Mrinmoy Das',
    location: 'Tezpur',
    review:
      'Very professional team and excellent after-sales support. The AMC service keeps our system running optimally. Our factory electricity bill has come down by nearly 80%.',
    rating: 5,
  },
  {
    name: 'Sunita Gogoi',
    location: 'Silchar',
    review:
      "Got the solar water heater installed for our guest house. No more electricity bills for hot water. The DRT team was courteous and explained everything clearly. Very satisfied!",
    rating: 5,
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Testimonial.deleteMany({});
    await Testimonial.insertMany(testimonials);
    console.log('✅ Testimonials seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seed();
