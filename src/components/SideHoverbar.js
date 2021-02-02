import React from 'react';
import "./css/SideHoverbar.css";
import { MdAttachMoney } from 'react-icons/md'
import { GiWaterDrop } from 'react-icons/gi'
import { IoIosPeople } from "react-icons/io";
import { GrPlan } from "react-icons/gr";
import { BsFillTrashFill } from "react-icons/bs";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";
import { GiPineTree } from "react-icons/gi";

const SideHoverBar = () => {
  return (
    <>
      <div className="sb-container">
        <MdAttachMoney className="sb-icon" />
        <div>
          Make a Payment
      </div>
        <GiWaterDrop className="sb-icon" />
        <div>
          Utilities
      </div>
        <IoIosPeople className="sb-icon" />
        <div>
          Jobs &amp; Careers
      </div>
        <GrPlan className="sb-icon" />
        <div>
          Master Plans
      </div>
        <BsFillTrashFill className="sb-icon" />
        <div>
          Trash &amp; Recycling
      </div>
        <FaMapMarkedAlt className="sb-icon" />
        <div>
          GIS Maps
      </div>
        <FaPaw className="sb-icon" />
        <div>
          Animal Services
      </div>
        <GiPineTree className="sb-icon" />
        <div>
          Parks and Recreation
      </div>
      </div>
    </>
  );
};

export default SideHoverBar;