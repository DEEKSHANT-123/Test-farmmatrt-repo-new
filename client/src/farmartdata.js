const list = [
  {
    id: 1,
    title: "Neptune Sprayers",
    author: " High Quality fibre made color: Orange",
    price: 789,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980437/ft1_b3sbtl.png",
    amount: 1
  },
  {
    id: 2,
    title: "Tarpaulin",
    author: " High Quality fibre made color: Black Highly Durable",
    price: 879,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980437/ft2_hm9vua.png",
    amount: 1
  },
  {
    id: 3,
    title: "Brush Cutter",
    author: " High Quality Durable Color: Red",
    price: 4899,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980436/ft3_yq5alq.png",
    amount: 1
  },
  {
    id: 4,
    title: "Power Weeder",
    author: " Durable color : orange and black strong and easy to hold",
    price: 3299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980435/ft4_vzejhz.png",
    amount: 1
  },
  {
    id: 5,
    title: "Power Weeder",
    author: " Brand : shrachi  weight: 30 kg easy to hold and made with non rustable material",
    price: 5349,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980436/ft5_xheke0.png",
    amount: 1
  },
  {
    id: 6,
    title: "Earth Auger",
    author: " Brand : shrachi  weight: 10 kg easy to hold and made with non rustable material",
    price: 1299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980436/ft6_m9ttvl.png",
    amount: 1
  },
  {
    id: 7,
    title: "Mowers and Trimmers",
    author: " High Qulaity strong and durable",
    price: 3299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980436/ft7_z8s3g0.png",
    amount: 1
  },
  {
    id: 8,
    title: "Ploughers",
    author: " High Quality Made of Non Rustable material color : Red",
    price: 2299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713980436/ft8_gwncq1.png",
    amount: 1
  },
  {
    id: 9,
    title: "High Quality Hybrid seeds",
    author: "Pack of 6",
    price: 399,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878155/se1_a2xv95.png",
    amount: 1,
  },
  {
    id: 10,
    title: "Seminis",
    author: "High Quality Hybrid Tomato seeds",
    price: 249,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878151/se2_nlxzh2.png",
    amount: 1,
  },
  {
    id: 11,
    title: "Seminis",
    author: "Hybrid Bitterground seeds weight 250 gm",
    price: 399,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878151/se3_jr2gjh.png",
    amount: 1,
  },
  {
    id: 12,
    title: "VNR-212",
    author: "High Quality Brinjal seeds weight: 240 pack of 2",
    price: 329,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878149/se4_rl4ti9.png",
    amount: 1,
  },
  {
    id: 13,
    title: "VNR-145",
    author: "F1 Hybrid Chilli Seeds",
    price: 239,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878149/se5_psjim6.png",
    amount: 1,
  },
  {
    id: 14,
    title: "Farm nets",
    author: "100 metres length pack of 5 transparent",
    price: 349,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713877998/cp1_ip3hqr.png",
    amount: 1,
  },
  {
    id: 15,
    title: "INDOFIL-M45",
    author: "Contact Fungicide highly toxic weight: 500 gm",
    price: 456,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878001/cp2_u40oc9.png",
    amount: 1,
  },
  {
    id: 16,
    title: "Cubex Power",
    author: "Insecticide",
    price: 149,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878001/cp3_mkpyh2.png",
    amount: 1,
  },
  {
    id: 17,
    title: "Abacin",
    author: "Insecticide 1 litre pack",
    price: 349,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713877994/cp4_s6xvdq.png",
    amount: 1,
  },
  {
    id: 18,
    title: "Plant covers",
    author: "pack of 5 transparent made of good quality material",
    price: 249,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1713878002/cp5_to11iy.png",
    amount: 1,
  },
  {
    id: 19,
    title: "Glyphosite Herbicide combo",
    author: " 1 Litres pack of 2",
    price: 349,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714038021/ph1_jchqfu.png",
    amount: 1
  },
  {
    id: 20,
    title: "Sempra Herbicide",
    author: "weight 500 gm Halosulphuron Methyl 75 %",
    price: 560,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714037908/ph2_ukwayf.png",
    amount: 1
  },
  {
    id: 21,
    title: "Ronfen Insecticide",
    author: " 1 Litre Pack highly toxic",
    price: 399,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202167/ph3_npi32q.png",
    amount: 1
  },
  {
    id: 22,
    title: "Glycocin",
    author: " Herbicide weight 5 Litres",
    price: 1299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202166/ph4_qzwzeh.png",
    amount: 1
  },
  {
    id: 23,
    title: "Kalichakra",
    author: " Biological Insecticide Pack of 3",
    price: 699,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714038217/ph5_l1xzgq.png",
    amount: 1
  },
  {
    id: 24,
    title: "Phoskill and Solomon",
    author: "Insecticides 1 litres each",
    price: 499,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714038114/ph6_vqa6v7.png",
    amount: 1
  },
  {
    id: 25,
    title: "Exponus",
    author: "Insecticide contains Brofanilide chemical",
    price: 387,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714037672/ph7_daq0z2.png",
    amount: 1
  },
  {
    id: 26,
    title: "Glybin",
    author: "Glyphosphate Herbicide contains 41 % concentration",
    price: 567,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714038358/ph8_hv2mvz.png",
    amount: 1
  },
  {
    id: 27,
    title: "Krishi shikshan",
    author: "writeen By : Dr M.M.Aggrawal Language : Hindi",
    price: 240,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202410/fe1_lyypzt.png",
    amount: 1
  },
  {
    id: 28,
    title: "BIO NPK",
    author: " RATAN GOLD Publication net weight 1 kg language : English",
    price: 237,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202410/fe2_cfoud0.png",
    amount: 1
  },
  {
    id: 29,
    title: "From the farm to the table",
    author: "farm guide for health food from the farms language :English",
    price: 149,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714039620/fe3_o0w4dt.png",
    amount: 1
  },
  {
    id: 30,
    title: "Advances in Extension Education",
    author: "By Dr.D. K Dangi & Dr. K.S Kadian language : English",
    price: 399,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714039395/fe4_yna4nt.png",
    amount: 1
  },
  {
    id: 31,
    title: "Farm Production",
    author: "By Dr. Rangalal Mohapatra language: English",
    price: 349,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202553/fe5_aheeku.png",
    amount: 1
  },
  {
    id: 32,
    title: "Ploughing up the farm",
    author: "Modern technology and the state of world's Farmers language : english",
    price: 459,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202554/fe6_x5jnhi.png",
    amount: 1
  },
  {
    id: 33,
    title: "Why We Farm",
    author: " By Elvira Digrit language: english",
    price: 299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714039441/fe7_roqjh0.png",
    amount: 1
  },
  {
    id: 34,
    title: "Krishi samanya adhyayan",
    author: " Language : Hindi",
    price: 99,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714038595/fe8_begdse.png",
    amount: 1
  },
  {
    id: 35,
    title: "URJA",
    author: "Carrier based consotia available in Both HIndi and English",
    price: 149,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714039010/fe9_pnl97x.png",
    amount: 1
  },
  {
    id: 36,
    title: "Boron Fertilizer",
    author: "weight: 50kg Good Quality 20% boron concentrate",
    price: 499,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064082/f1_mn7ktb.png",
    amount: 1
  },
  {
    id: 37,
    title: "Phosphate Fertilizer",
    author: "Brand: PHOM weight: 30 kg",
    price: 999,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064079/f2_xufumf.png",
    amount: 1
  },
  {
    id: 38,
    title: "Magnesium Sulphate Fertilizer",
    author: "weight: 20 kg magnesium: 9.5% sulphur:12 %",
    price: 799,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064078/f3_nhoaq9.png",
    amount: 1
  },
  {
    id: 39,
    title: "Bio Fertilizer",
    author: "weight: 50kg brand: Calsiphos",
    price: 499,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064077/f4_el1etq.png",
    amount: 1
  },
  {
    id: 40,
    title: "Ammonium Sulphate Fertilizer",
    author: "Brand: Gacil weight :10 kg",
    price: 1299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064086/f5_rqjtgi.png",
    amount: 1
  },
  {
    id: 41,
    title: "Multi Micronutrient Fertilizer",
    author: "Brand: ProKissan weight: 20 kg",
    price: 1499,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064081/f6_ky94xz.png",
    amount: 1
  },
  {
    id: 42,
    title: "Plant Fertilizer",
    author: "Brand: Gardeco weight: 10 kg",
    price: 499,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064081/f7_hkdhgx.png",
    amount: 1
  },
  {
    id: 43,
    title: "DAP & MOP",
    author: "Good Quality flower and fruit fertilizers weight: 5 kg each",
    price: 599,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064088/f8_ziu19k.png",
    amount: 1
  },
  {
    id: 44,
    title: "Full Farm Safety Kit",
    author: "High Grade Quality contains all necessary equipments",
    price: 1299,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064171/fc1_dzpekb.png",
    amount: 1
  },
  {
    id: 45,
    title: "Personal Protective Equipment",
    author: "color: White Highly Durable stretchable fit",
    price: 1599,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064170/fc2_yoo64d.png",
    amount: 1
  },
  {
    id: 46,
    title: "Farm Gloves and Mask",
    author: "Branded Highly Durable ventilated",
    price: 567,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064171/fc3_mobd22.png",
    amount: 1
  },
  {
    id: 47,
    title: "Kisan Kavach",
    author: "Former Respiratory, Eye & Hand protection kit",
    price: 1199,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064178/fc4_rnzb8u.png",
    amount: 1
  },
  {
    id: 48,
    title: "Promax Farm Mask",
    author: "PS 410 SLV color: yellow",
    price: 99,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064170/fc5_pizdfm.png",
    amount: 1
  },
  {
    id: 49,
    title: "Farm Boots",
    author: "Durable High Quality easy fit color: Blue",
    price: 349,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064172/fc6_agkwvl.png",
    amount: 1
  },
  {
    id: 50,
    title: "Farm Apron",
    author: "Protects from harmful chemicals large sized color: yellow",
    price: 149,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714064167/fc7_uxrrxl.png",
    amount: 1
  },
  {
    id: 51,
    title: "KIT PHYTOSANITAIRE",
    author: "complete farm protection kit protects from harmful rays and chemicals",
    price: 679,
    img: "https://res.cloudinary.com/dwqbg2rt6/image/upload/v1714202997/fc8_g131ri.png",
    amount: 1
  },
];

export default list;
