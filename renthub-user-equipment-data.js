window.RentHubItems = [
  ["Canon EOS R6", "Camera & Photography", "Lagos, Nigeria", 45000, "📷", "https://res.cloudinary.com/crvidoqc/image/upload/v1791545675/images_ggjivf.jpg", 30000],
  ["Canon EOS R8", "Camera & Photography", "Lagos, Nigeria", 45000, "📷", "https://res.cloudinary.com/crvidoqc/image/upload/v1791545675/images_ggjivf.jpg", 30000],
  ["Bosch Hammer Drill", "Power Tools", "Ibadan, Nigeria", 12000, "🔧", "https://res.cloudinary.com/crvidoqc/image/upload/v1791545455/images_ch0tiy.jpg"],
  ["Generator 5KVA", "Equipment", "Abuja, Nigeria", 35000, "⚙️", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546683/images_nr2qid.jpg"],
  ["Macbook Pro 14", "Electronics", "Lagos, Nigeria", 60000, "💻", "https://res.cloudinary.com/crvidoqc/image/upload/v1791547078/images_l6cxvp.jpg"],
  ["Projector", "Electronics", "Port Harcourt, Nigeria", 25000, "📽️", "https://res.cloudinary.com/crvidoqc/image/upload/v1791549443/images_owj6fp.jpg"],
  ["Event Tent (10x10)", "Event & Party Items", "Enugu, Nigeria", 18000, "⛺", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546534/mg79jbr6sp43goslkuay.jpg"],
  ["Office Chair", "Furniture", "Lagos, Nigeria", 8000, "🪑", "https://res.cloudinary.com/crvidoqc/image/upload/v1791547198/images_pjhcgm.jpg"],
  ["DJ Sound System", "Event & Party Items", "Abuja, Nigeria", 40000, "🔊", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546164/sqbbhrhgvnzuk5e1vzgz.jpg"],
  ["Excavator", "Equipment", "Lagos, Nigeria", 85000, "🚜", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546652/images_g56xjy.jpg"],
  ["Cordless Impact Driver", "Power Tools", "Benin City, Nigeria", 10000, "🛠️", "https://res.cloudinary.com/crvidoqc/image/upload/v1791545744/images_gc0lyz.jpg"],
  ["Sony Alpha A7 III", "Camera & Photography", "Lagos, Nigeria", 50000, "📸", "https://res.cloudinary.com/crvidoqc/image/upload/v1791549909/images_h7u3ha.jpg"],
  ["Godox SL60W Light", "Lighting", "Lagos, Nigeria", 18000, "💡", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546766/images_quslla.jpg"],
  ["DJI Mavic 3 Drone", "Drones", "Lagos, Nigeria", 45000, "🚁", "https://res.cloudinary.com/crvidoqc/image/upload/v1791545794/images_edhgmb.jpg"],
  ["LED TV 55-inch", "Electronics", "Lagos, Nigeria", 20000, "📺", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546989/vckv6pbauvqhqjriuqkt.jpg"],
  ["3-Seater Sofa", "Furniture", "Ibadan, Nigeria", 12000, "🛋️", "https://res.cloudinary.com/crvidoqc/image/upload/v1791550132/pbgs8dxcrhifwywajkc1.jpg"],
  ["Party Lighting Kit", "Event & Party Items", "Abuja, Nigeria", 15000, "✨", "https://res.cloudinary.com/crvidoqc/image/upload/v1791548991/uj87tfqk9qxwxy5nbuas.jpg"],
  ["Drill Press", "Power Tools", "Lagos, Nigeria", 14000, "🔩", "https://res.cloudinary.com/crvidoqc/image/upload/v1791546273/images_hpmsmh.jpg"]
];

window.getRentHubItemImage = (name) => {
  const imageName = name === "Canon EOS R8" ? "Canon EOS R6" : name;
  return window.RentHubItems.find(([itemName]) => itemName === imageName)?.[5] || "";
};
