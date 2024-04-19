import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopDeals = () => {
  const dealsData = [
    {
    id: 1,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/7/UY/XH/VY/96555944/fertilizer-packaging-bags-500x500.jpg",
    offer: "25% Off",
    link: "/deal1",
    },
    {
    id: 2,
    image: "https://www.justgotochef.com/img/1545640883-ACCEPT-ORGANIC%20Premium%20Basmati%20Rice%20(Long%20Grain,%20Unpolished)-Front.jpg",
    offer: "Buy 1 Get 1 Free",
    link: "/deal1",
    },
    {
    id: 3,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/5/SL/FN/SL/310912/packed-whole-onion-seed-500x500.png",
    offer: "25% Off",
    link: "/deal1",
    },
    {
    id: 4,
    image: "https://www.fieldking.com/images/tillage/plough/lg/mounted-disc-plough.png",
    offer: "10% Off",
    link: "/deal1",
    },
    {
    id: 5,
    image: "https://oxfarm.co.ke/wp-content/uploads/2018/07/nursery-shade-net.jpg",
    offer: "25% Off",
    link: "/deal1",
    },
    {
    id: 6,
    image: "https://m.media-amazon.com/images/I/81UI54J9btL._AC_UF1000,1000_QL80_.jpg",
    offer: "Buy 1 Get 2 Free",
    link: "/deal1",
    },
    ];
    

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Top Deals</h2>
      <Slider {...settings}>
        {dealsData.map((deal) => (
          <div key={deal.id} style={styles.dealItem}>
            <a href={deal.link}>
              <img src={deal.image} alt={`Product ${deal.id}`} style={styles.image} />
            </a>
            <div style={styles.offerContainer}>
              <p style={styles.offerText}>{deal.offer}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "#ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
    textAlign: "center",
  },
  dealItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px",
    borderRadius: "8px solid red",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "300px",
    height: "250px",
    borderRadius: "8px",
    marginBottom: "12px",
    objectFit: "cover",
    cursor: "pointer",
  },
  offerContainer: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
  },
  offerText: {
    fontSize: "14px",
    color: "#007bff",
    textAlign: "center",
  },
};

export default TopDeals;
