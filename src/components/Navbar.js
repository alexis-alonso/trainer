import { useState } from "react";

export default function Navbar() {
  const [selectedLink, setSelectedLink] = useState("Rewards");

  const handleLinkClick = (link) => {
    if (link === selectedLink) {
      setSelectedLink("Rewards");
    } else {
      setSelectedLink(link);
    }
  };

  const getLinkClass = (link) => {
    if (link === selectedLink) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className="Navbar">
       <div className="navbar">
        <a 
          href="#Rewards"
          onClick={() => handleLinkClick("Rewards")} 
          className={getLinkClass("Rewards")}
        >Rewards</a>

        <a 
          href="#Punishments"
          onClick={() => handleLinkClick("Punishments")} 
          className={getLinkClass("Punishments")}
        >Punishments</a>

        <a 
          href="#Habits"
          onClick={() => handleLinkClick("Habits")} 
          className={getLinkClass("Habits")}
        >
          Habits
        </a>
        </div>
      </div> 
  );
}