import React from "react";
import "./Review.css";
const page = () => {
  return (
    <div className="reviews_container">
      <div className="reviews">
        <div className="top_review">
          <div className="profile">
            <div className="profile-img">
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F05%2F25%2FElizabeth-Olsen-01-052523.jpg"
                alt="pfp"
              />
            </div>
            <div className="name_username">
              <strong>John Doe</strong>
              <span>@johnDoe</span>
            </div>
          </div>
          <div className="stars_review">
          {/* addd stars here */}
            * * * * *
          </div>
        </div>
        <div className="bottom_review">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid iure unde, ipsa pariatur iusto ullam aspernatur asperiores tempore mollitia voluptates veniam atque quae sed tenetur molestiae temporibus impedit fugiat!</p>
        </div>
      </div>
    </div>
  );
};

export default page;
