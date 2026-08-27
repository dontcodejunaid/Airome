/**
 * AIROAME - LocalStorage Persistent Database Layer
 */

const STORAGE_KEYS = {
  USERS: 'airoame_users',
  CURRENT_USER: 'airoame_current_user',
  VEHICLES: 'airoame_vehicles',
  BOOKINGS: 'airoame_bookings',
  BLOGS: 'airoame_blogs',
  CONTACT_MESSAGES: 'airoame_messages',
  SUBSCRIBERS: 'airoame_subscribers',
  RESET_CODES: 'airoame_reset_codes'
};

// Initial Seed Data - Matching Exact Catalog Style
const initialVehicles = [
  {
    id: '1',
    name: 'Camper X4 xDrive Sports',
    model: 'X4 Sports Pro',
    brand: 'Camper',
    doors: 4,
    seats: '4 seater',
    seatsNum: 4,
    transmission: 'Auto',
    fuel: 'Petrol',
    type: 'SUV',
    price: 199.00,
    angles: [
      '/fleet/camper-x4-studio.jpg',
      '/fleet/camper-interior.jpg',
      '/fleet/camper-rear.jpg',
      '/fleet/camper-cockpit.jpg'
    ]
  },
  {
    id: '2',
    name: 'Camper White edition',
    model: 'White Touring Alcove',
    brand: 'Camper',
    doors: 3,
    seats: '4 seater',
    seatsNum: 4,
    transmission: 'Auto',
    fuel: 'Petrol',
    type: 'SUV',
    price: 199.00,
    angles: [
      '/fleet/camper-white-studio.jpg',
      '/fleet/camper-interior.jpg',
      '/fleet/camper-rear.jpg',
      '/fleet/camper-cockpit.jpg'
    ]
  },
  {
    id: '3',
    name: 'Volkswagen California Ocean',
    model: 'California T6.1',
    brand: 'Volkswagen',
    doors: 4,
    seats: '4 seater',
    seatsNum: 4,
    transmission: 'Auto',
    fuel: 'Diesel',
    type: 'Camper Van',
    price: 199.00,
    angles: [
      '/fleet/vw-california.jpg',
      '/fleet/camper-interior.jpg',
      '/fleet/camper-rear.jpg',
      '/fleet/camper-cockpit.jpg'
    ]
  },
  {
    id: '4',
    name: 'Mercedes Sprinter 4x4 Overland',
    model: 'Sprinter 2500 4WD',
    brand: 'Mercedes',
    doors: 4,
    seats: '4 seater',
    seatsNum: 4,
    transmission: 'Auto',
    fuel: 'Diesel Turbo',
    type: 'Expedition Camper',
    price: 249.00,
    angles: [
      '/fleet/mercedes-sprinter.jpg',
      '/fleet/camper-x4-studio.jpg',
      '/fleet/camper-interior.jpg',
      '/fleet/camper-rear.jpg'
    ]
  },
  {
    id: '5',
    name: 'BMW X7 M60i xDrive',
    model: 'X7 M60i',
    brand: 'BMW',
    doors: 5,
    seats: '6 seater',
    seatsNum: 6,
    transmission: 'Auto',
    fuel: 'Petrol V8',
    type: 'Luxury SUV',
    price: 289.00,
    angles: [
      '/fleet/bmw-x7.jpg',
      '/fleet/camper-cockpit.jpg',
      '/fleet/audi-q8.jpg',
      '/fleet/porsche-cayenne.jpg'
    ]
  },
  {
    id: '6',
    name: 'Audi RS Q8 Quattro',
    model: 'RS Q8 Performance',
    brand: 'Audi',
    doors: 5,
    seats: '5 seater',
    seatsNum: 5,
    transmission: 'Auto',
    fuel: 'Twin-Turbo V8',
    type: 'Performance SUV',
    price: 279.00,
    angles: [
      '/fleet/audi-q8.jpg',
      '/fleet/bmw-x7.jpg',
      '/fleet/porsche-cayenne.jpg',
      '/fleet/mercedes-g63.jpg'
    ]
  },
  {
    id: '7',
    name: 'Mercedes-Benz G63 AMG',
    model: 'G-Class 63',
    brand: 'Mercedes',
    doors: 5,
    seats: '5 seater',
    seatsNum: 5,
    transmission: 'Auto',
    fuel: 'BiTurbo V8',
    type: 'Off-Road Luxury',
    price: 349.00,
    angles: [
      '/fleet/mercedes-g63.jpg',
      '/fleet/mercedes-sprinter.jpg',
      '/fleet/audi-q8.jpg',
      '/fleet/bmw-x7.jpg'
    ]
  },
  {
    id: '8',
    name: 'Porsche Cayenne Turbo GT',
    model: 'Cayenne Turbo GT',
    brand: 'Porsche',
    doors: 5,
    seats: '4 seater',
    seatsNum: 4,
    transmission: 'Auto PDK',
    fuel: 'Twin-Turbo',
    type: 'Sports SUV',
    price: 319.00,
    angles: [
      '/fleet/porsche-cayenne.jpg',
      '/fleet/bmw-x7.jpg',
      '/fleet/audi-q8.jpg',
      '/fleet/mercedes-g63.jpg'
    ]
  }
];

const initialBlogs = [
  {
    id: '1',
    title: 'Top 10 Epic Mountain Road Trips in North America',
    date: 'October 14, 2024',
    category: 'Road Trip',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Discover the most breathtaking alpine passes, winding coastal switchbacks, and national park scenic byways to explore in a luxury camper.'
  },
  {
    id: '2',
    title: 'Van Life 101: Off-Grid Power & Starlink Setup Guide',
    date: 'November 02, 2024',
    category: 'Van Life',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
    description: 'Everything you need to know about lithium battery banks, rooftop solar, induction cooking, and staying connected on remote trails.'
  },
  {
    id: '3',
    title: 'Hidden Gem Campsites Along the Pacific Coast Highway',
    date: 'November 18, 2024',
    category: 'Travel Guide',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1513311068348-19c8fbdc0bb6?auto=format&fit=crop&w=800&q=80',
    description: 'From cliffside ocean overlooks in Big Sur to secluded redwood groves, here are the top spots to park your camper van for sunset.'
  },
  {
    id: '4',
    title: 'Essential Winter Driving Tips For Camper Vans & Luxury SUVs',
    date: 'December 05, 2024',
    category: 'Tips & Tricks',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1533873984035-25970ab07461?auto=format&fit=crop&w=800&q=80',
    description: 'Master snow-chain installation, heated water tank management, and AWD driving techniques for high-altitude ski adventures.'
  },
  {
    id: '5',
    title: 'The Ultimate Guide to Rocky Mountain National Park',
    date: 'December 20, 2024',
    category: 'Travel Guide',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    description: 'Explore Trail Ridge Road at 12,000 feet, pristine alpine lakes, and wildlife watching tips for an unforgettable Colorado getaway.'
  },
  {
    id: '6',
    title: 'Gourmet Camp Cooking: 5 Fast Recipes For Van Kitchens',
    date: 'January 12, 2025',
    category: 'Van Life',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?auto=format&fit=crop&w=800&q=80',
    description: 'Delicious chef-inspired meals made using simple ingredients and compact two-burner stovetops on the open road.'
  }
];

// Storage version to refresh seed data
const STORAGE_VERSION_KEY = 'airoame_db_version_v4';

// Helper to initialize seed data if not present or outdated
function initializeStorage() {
  const currentVersion = localStorage.getItem(STORAGE_VERSION_KEY);
  if (currentVersion !== '4.0' || !localStorage.getItem(STORAGE_KEYS.VEHICLES)) {
    localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(initialVehicles));
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(initialBlogs));
    localStorage.setItem(STORAGE_VERSION_KEY, '4.0');
  }
  if (!localStorage.getItem(STORAGE_KEYS.BLOGS)) {
    localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(initialBlogs));
  }
  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    // Default demo user
    const demoUser = [{
      id: 'usr_demo',
      firstName: 'John',
      lastName: 'Doe',
      username: 'demo@email.com',
      email: 'demo@email.com',
      country: 'IN',
      mobile: '+919994585226',
      password: 'password123'
    }];
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(demoUser));
  }
  if (!localStorage.getItem(STORAGE_KEYS.BOOKINGS)) {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CONTACT_MESSAGES)) {
    localStorage.setItem(STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS)) {
    localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify([]));
  }
}

// Storage Service API
export const storageService = {
  init() {
    initializeStorage();
  },

  // Vehicles
  getVehicles() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.VEHICLES) || '[]');
  },

  getVehicleById(id) {
    const vehicles = this.getVehicles();
    return vehicles.find(v => v.id === id);
  },

  filterVehicles({ search = '', seats = '', model = '', minPrice = 0, maxPrice = Infinity, sort = 'default' }) {
    let list = this.getVehicles();

    if (search) {
      const term = search.toLowerCase();
      list = list.filter(v => v.name.toLowerCase().includes(term) || v.model.toLowerCase().includes(term) || v.brand.toLowerCase().includes(term));
    }
    if (seats) {
      list = list.filter(v => v.seats.toLowerCase().includes(seats.toLowerCase()));
    }
    if (model) {
      list = list.filter(v => v.model.toLowerCase() === model.toLowerCase() || v.brand.toLowerCase() === model.toLowerCase());
    }
    list = list.filter(v => v.price >= minPrice && v.price <= maxPrice);

    if (sort === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  },

  // Bookings
  createBooking({ vehicleId, vehicleName, pricePerDay, days = 2, startDate, customerName, email, phone }) {
    initializeStorage();
    const bookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
    const newBooking = {
      id: 'bk_' + Date.now(),
      vehicleId,
      vehicleName,
      pricePerDay,
      days: parseInt(days, 10),
      totalPrice: (parseFloat(pricePerDay) * parseInt(days, 10)).toFixed(2),
      startDate: startDate || new Date().toISOString().split('T')[0],
      customerName,
      email,
      phone,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };
    bookings.unshift(newBooking);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    return newBooking;
  },

  getBookings() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKINGS) || '[]');
  },

  // Blogs
  getBlogs() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BLOGS) || '[]');
  },

  incrementBlogViews(id) {
    const blogs = this.getBlogs();
    const blog = blogs.find(b => b.id === id);
    if (blog) {
      blog.views = (blog.views || 0) + 1;
      localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
    }
    return blog;
  },

  // Auth & Users
  getUsers() {
    initializeStorage();
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
  },

  registerUser({ firstName, lastName, username, email, country, mobile, password }) {
    const users = this.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase() || u.username.toLowerCase() === username.toLowerCase())) {
      throw new Error('User with this email or username already exists');
    }
    const newUser = {
      id: 'usr_' + Date.now(),
      firstName,
      lastName,
      username,
      email,
      country,
      mobile,
      password
    };
    users.push(newUser);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    this.setCurrentUser(newUser);
    return newUser;
  },

  loginUser(identifier, password) {
    const users = this.getUsers();
    const user = users.find(u => (u.email.toLowerCase() === identifier.toLowerCase() || u.username.toLowerCase() === identifier.toLowerCase()) && u.password === password);
    if (!user) {
      throw new Error('Invalid username/email or password');
    }
    this.setCurrentUser(user);
    return user;
  },

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || 'null');
  },

  setCurrentUser(user) {
    if (user) {
      const { password, ...safeUser } = user;
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(safeUser));
    } else {
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    }
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  resetPassword(email, newPassword) {
    const users = this.getUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      throw new Error('No user found with this email address');
    }
    user.password = newPassword;
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    return true;
  },

  // Contact Form
  saveContactMessage({ name, email, subject, message }) {
    initializeStorage();
    const messages = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACT_MESSAGES) || '[]');
    const newMsg = {
      id: 'msg_' + Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString()
    };
    messages.unshift(newMsg);
    localStorage.setItem(STORAGE_KEYS.CONTACT_MESSAGES, JSON.stringify(messages));
    return newMsg;
  },

  // Newsletter
  subscribeNewsletter(email) {
    initializeStorage();
    const subs = JSON.parse(localStorage.getItem(STORAGE_KEYS.SUBSCRIBERS) || '[]');
    if (!subs.includes(email.toLowerCase())) {
      subs.push(email.toLowerCase());
      localStorage.setItem(STORAGE_KEYS.SUBSCRIBERS, JSON.stringify(subs));
    }
    return true;
  }
};

// Initialize on import
storageService.init();
