import React from "react";
import CarouselSection from "./Courasel";
import Header from "./Header";
import HighOnFeature from "./HighOnFeature";
import OurDealsIn from "./OurDealsIn";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content" style={{ marginTop: "6rem" }}>
        <CarouselSection />
        <HighOnFeature />
        <OurDealsIn />
      </div>

      <div>DashboardSection</div>
    </React.Fragment>
  );
};

export default Dashboard;
