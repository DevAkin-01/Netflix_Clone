import React from 'react';
import './Images.css';

const reasonsData = [
  {
    id: 1,
    title: "Enjoy on your TV",
    text: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: "📺" 
  },
  {
    id: 2,
    title: "Download your shows to watch offline",
    text: "Save your favorites easily and always have something to watch.",
    icon: "📥"
  },
  {
    id: 3,
    title: "Watch everywhere",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "🚀"
  },
  {
    id: 4,
    title: "Create profiles for kids",
    text: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    icon: "👤"
  }
];



const Images = () => {
  return (
    <section className="img_section">
      <h2 className="image_header">More Reasons to Join</h2>
      
      <div className="image_container">
        {reasonsData.map((item) => (
          <div className="image_card" key={item.id}>
            <h3 className="image_title">{item.title}</h3>
            <p className="image_text">{item.text}</p>
            <div className="image_icon">{item.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Images;