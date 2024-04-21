import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopDeals = () => {
  const dealsData = [
    {
      id: "001",
      img: "./Product_images/cp4.png",
      offer: "25% Off",
      link: "/product",
    },
    {
      id: "002",
      img: "./Product_images/f2.png",
      offer: "20% Off",
      link: "/product",
    },
    {
      id: "003",
      img: "./Product_images/fc7.png",
      offer: "35% Off",
      link: "/product",
    },
    {
      id: "004",
      img: "./Product_images/ph4.png",
      offer: "2% Off",
      link: "/product",
    },
    {
      id: "005",
      img: "./Product_images/ft5.png",
      offer: "45% Off",
      link: "/product",
    },
    {
      id: "006",
      img: "./Product_images/ph6.png",
      offer: "25% Off",
      link: "/product",
    },
    {
      id: "007",
      img: "./Product_images/se5.png",
      offer: "4% Off",
      link: "/product",
    },
    // Add other deal items here
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
              <img src={deal.img} alt={`Product ${deal.id}`} style={styles.image} />
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
    height: "400px",
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
    color: "red",
    textAlign: "center",
  },
};

export default TopDeals;
