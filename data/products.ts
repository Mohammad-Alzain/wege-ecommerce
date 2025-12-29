export interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  rating: number;
  description?: string;
  category: string[];
}

export const mockProducts: IProduct[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 129.99,
    images: [
      "https://picsum.photos/seed/headphones1/400/400",
      "https://picsum.photos/seed/headphones2/400/400",
    ],
    rating: 4.5,
    category: ["Electronics", "Audio"],
    description:
      "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    images: [
      "https://picsum.photos/seed/watch1/400/400",
      "https://picsum.photos/seed/watch2/400/400",
    ],
    rating: 4.3,
    category: ["Electronics", "Wearables"],
    description:
      "Feature-packed smartwatch with heart rate monitoring, GPS, and customizable watch faces.",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 89.99,
    images: [
      "https://picsum.photos/seed/shoes1/400/400",
      "https://picsum.photos/seed/shoes2/400/400",
    ],
    rating: 4.7,
    category: ["Fashion", "Sports"],
    description:
      "Lightweight running shoes designed for comfort, support, and high performance.",
  },
  {
    id: 4,
    title: "Backpack",
    price: 59.99,
    images: [
      "https://picsum.photos/seed/backpack1/400/400",
      "https://picsum.photos/seed/backpack2/400/400",
    ],
    rating: 4.4,
    category: ["Fashion", "Accessories"],
    description:
      "Durable and stylish backpack with multiple compartments for work, school, or travel.",
  },
  {
    id: 5,
    title: "Mechanical Keyboard",
    price: 149.99,
    images: [
      "https://picsum.photos/seed/keyboard1/400/400",
      "https://picsum.photos/seed/keyboard2/400/400",
    ],
    rating: 4.8,
    category: ["Electronics", "Computers"],
    description:
      "High-performance mechanical keyboard with customizable RGB lighting and tactile keys.",
  },
  {
    id: 6,
    title: "Gaming Mouse",
    price: 69.99,
    images: [
      "https://picsum.photos/seed/mouse1/400/400",
      "https://picsum.photos/seed/mouse2/400/400",
    ],
    rating: 4.6,
    category: ["Electronics", "Computers"],
    description:
      "Ergonomic gaming mouse with adjustable DPI, programmable buttons, and RGB lighting.",
  },
  {
    id: 7,
    title: "Bluetooth Speaker",
    price: 99.99,
    images: [
      "https://picsum.photos/seed/speaker1/400/400",
      "https://picsum.photos/seed/speaker2/400/400",
    ],
    rating: 4.5,
    category: ["Electronics", "Audio"],
    description:
      "Portable Bluetooth speaker with deep bass, clear sound, and up to 12 hours of playback.",
  },
  {
    id: 8,
    title: "Yoga Mat",
    price: 29.99,
    images: [
      "https://picsum.photos/seed/yogamat1/400/400",
      "https://picsum.photos/seed/yogamat2/400/400",
    ],
    rating: 4.2,
    category: ["Sports", "Fitness"],
    description:
      "Non-slip yoga mat providing comfort and stability for all types of exercises and poses.",
  },
  {
    id: 9,
    title: "Sunglasses",
    price: 49.99,
    images: [
      "https://picsum.photos/seed/sunglasses1/400/400",
      "https://picsum.photos/seed/sunglasses2/400/400",
    ],
    rating: 4.1,
    category: ["Fashion", "Accessories"],
    description:
      "Stylish sunglasses with UV protection, lightweight frame, and modern design.",
  },
  {
    id: 10,
    title: "Leather Wallet",
    price: 39.99,
    images: [
      "https://picsum.photos/seed/wallet1/400/400",
      "https://picsum.photos/seed/wallet2/400/400",
    ],
    rating: 4.3,
    category: ["Fashion", "Accessories"],
    description:
      "Premium leather wallet with multiple card slots and a slim, compact design.",
  },
  {
    id: 11,
    title: "Laptop Stand",
    price: 44.99,
    images: [
      "https://picsum.photos/seed/laptopstand1/400/400",
      "https://picsum.photos/seed/laptopstand2/400/400",
    ],
    rating: 4.6,
    category: ["Electronics", "Office"],
    description:
      "Adjustable laptop stand for better ergonomics and improved airflow to prevent overheating.",
  },
  {
    id: 12,
    title: "Desk Lamp",
    price: 34.99,
    images: [
      "https://picsum.photos/seed/lamps1/400/400",
      "https://picsum.photos/seed/lamps2/400/400",
    ],
    rating: 4.4,
    category: ["Home", "Office"],
    description:
      "LED desk lamp with adjustable brightness and color temperature for optimal work conditions.",
  },
  {
    id: 13,
    title: "Coffee Maker",
    price: 119.99,
    images: [
      "https://picsum.photos/seed/coffee1/400/400",
      "https://picsum.photos/seed/coffee2/400/400",
    ],
    rating: 4.5,
    category: ["Home", "Kitchen"],
    description:
      "Automatic coffee maker with programmable timer and multiple brew strengths for perfect coffee.",
  },
  {
    id: 14,
    title: "Water Bottle",
    price: 19.99,
    images: [
      "https://picsum.photos/seed/bottle1/400/400",
      "https://picsum.photos/seed/bottle2/400/400",
    ],
    rating: 4.3,
    category: ["Sports", "Fitness"],
    description:
      "Durable, BPA-free water bottle to keep you hydrated during workouts or outdoor activities.",
  },
  {
    id: 15,
    title: "Office Chair",
    price: 249.99,
    images: [
      "https://picsum.photos/seed/chair1/400/400",
      "https://picsum.photos/seed/chair2/400/400",
    ],
    rating: 4.6,
    category: ["Home", "Office"],
    description:
      "Ergonomic office chair with lumbar support, adjustable height, and comfortable padding.",
  },
  {
    id: 16,
    title: "Wireless Charger",
    price: 39.99,
    images: [
      "https://picsum.photos/seed/charger1/400/400",
      "https://picsum.photos/seed/charger2/400/400",
    ],
    rating: 4.2,
    category: ["Electronics", "Accessories"],
    description:
      "Fast wireless charger compatible with all Qi-enabled devices for convenient charging.",
  },
  {
    id: 17,
    title: "Action Camera",
    price: 299.99,
    images: [
      "https://picsum.photos/seed/camera1/400/400",
      "https://picsum.photos/seed/camera2/400/400",
    ],
    rating: 4.7,
    category: ["Electronics", "Cameras"],
    description:
      "Rugged action camera with 4K video recording, waterproof design, and wide-angle lens.",
  },
  {
    id: 18,
    title: "Tripod Stand",
    price: 54.99,
    images: [
      "https://picsum.photos/seed/tripod1/400/400",
      "https://picsum.photos/seed/tripod2/400/400",
    ],
    rating: 4.4,
    category: ["Electronics", "Cameras"],
    description:
      "Lightweight tripod stand compatible with cameras and smartphones for stable photography.",
  },
  {
    id: 19,
    title: "Fitness Tracker",
    price: 79.99,
    images: [
      "https://picsum.photos/seed/fit1/400/400",
      "https://picsum.photos/seed/fit2/400/400",
    ],
    rating: 4.3,
    category: ["Electronics", "Wearables"],
    description:
      "Track your steps, calories, heart rate, and sleep patterns with this compact fitness tracker.",
  },
  {
    id: 20,
    title: "Noise Cancelling Earbuds",
    price: 159.99,
    images: [
      "https://picsum.photos/seed/earbuds1/400/400",
      "https://picsum.photos/seed/earbuds2/400/400",
    ],
    rating: 4.6,
    category: ["Electronics", "Audio"],
    description:
      "Compact earbuds with active noise cancellation, long battery life, and high-quality sound.",
  },
];
