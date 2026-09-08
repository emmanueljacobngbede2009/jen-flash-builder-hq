function buildWebsite(type) {
  if (type === "business") {
    return "<h1>Welcome to My Business</h1><p>We help you grow</p>";
  }
  if (type === "store") {
    return "<h1>My Store</h1><p>Shop with us today</p>";
  }
  if (type === "portfolio") {
    return "<h1>My Portfolio</h1><p>See my work</p>";
  }
  return "<h1>JEN FLASH BUILDER</h1><p>Tell me what you want to build</p>";
}

module.exports = { buildWebsite };
