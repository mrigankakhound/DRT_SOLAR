// Static product catalog — can be migrated to MongoDB if needed
const products = [
  {
    id: 1,
    name: 'Residential Solar Kit',
    category: 'Residential',
    description:
      'Perfect for homes. Includes high-efficiency monocrystalline panels, grid-tie inverter, and mounting hardware. Covers 80–100% of average household electricity needs.',
    startingPrice: '₹1,20,000',
    capacity: '3 kW – 10 kW',
    warranty: '25 Years',
    features: ['High-efficiency panels', 'Grid-tie inverter', 'Smart monitoring app', 'Professional installation'],
    icon: 'home',
    badge: 'Most Popular',
  },
  {
    id: 2,
    name: 'Solar + Battery Bundle',
    category: 'Hybrid',
    description:
      'Go fully off-grid with our hybrid solar + lithium battery storage system. Zero power cuts, 24/7 clean energy, ideal for frequent power outage areas.',
    startingPrice: '₹2,50,000',
    capacity: '5 kW + 10 kWh Battery',
    warranty: '10 Years (Battery)',
    features: ['Lithium-ion battery', 'Hybrid inverter', 'Off-grid capability', 'Mobile monitoring'],
    icon: 'battery',
    badge: 'Best Value',
  },
  {
    id: 3,
    name: 'Commercial Solar Arrays',
    category: 'Commercial',
    description:
      'Scalable solar solutions for offices, factories, hotels, and large establishments. Reduce your business electricity costs dramatically with our commercial-grade systems.',
    startingPrice: '₹5,00,000',
    capacity: '20 kW – 500 kW',
    warranty: '25 Years',
    features: ['Industrial-grade panels', 'Three-phase inverter', 'Remote monitoring', 'DISCOM net metering support'],
    icon: 'building',
    badge: null,
  },
  {
    id: 4,
    name: 'Solar Water Heater',
    category: 'Water Heating',
    description:
      'Efficient solar thermal systems for domestic and commercial hot water needs. Reduce your water heating bill by up to 70% with zero electricity consumption.',
    startingPrice: '₹18,000',
    capacity: '100 LPD – 2000 LPD',
    warranty: '5 Years',
    features: ['Evacuated tube collector', 'Insulated storage tank', 'Backup electric heater', 'Low maintenance'],
    icon: 'droplets',
    badge: null,
  },
  {
    id: 5,
    name: 'Battery Storage Units',
    category: 'Storage',
    description:
      'Standalone lithium battery storage units to retrofit with your existing solar system or use as backup power. Available in modular configurations.',
    startingPrice: '₹80,000',
    capacity: '5 kWh – 50 kWh',
    warranty: '10 Years',
    features: ['Lithium-iron phosphate cells', 'BMS protection', 'Modular expansion', 'App monitoring'],
    icon: 'zap',
    badge: null,
  },
  {
    id: 6,
    name: 'AMC & Maintenance',
    category: 'Service',
    description:
      'Comprehensive Annual Maintenance Contract to keep your solar system performing at peak efficiency. Includes cleaning, inspection, performance reports, and 24/7 support.',
    startingPrice: '₹4,000/year',
    capacity: 'All System Sizes',
    warranty: 'Service Guaranteed',
    features: ['Quarterly cleaning', 'Performance inspection', 'Annual report', '24/7 helpline support'],
    icon: 'settings',
    badge: null,
  },
];

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = (req, res) => {
  const { category } = req.query;
  let filtered = products;
  if (category && category !== 'All') {
    filtered = products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  res.json({ success: true, count: filtered.length, data: filtered });
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
const getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
};

module.exports = { getProducts, getProductById };
