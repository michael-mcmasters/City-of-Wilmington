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
        <MdAttachMoney />
        <div>
          Make a Payment
      </div>
        <GiWaterDrop />
        <div>
          Utilities
      </div>
        <IoIosPeople />
        <div>
          Jobs &amp; Careers
      </div>
        <GrPlan />
        <div>
          Master Plans
      </div>
        <BsFillTrashFill />
        <div>
          Trash &amp; Recycling
      </div>
        <FaMapMarkedAlt />
        <div>
          GIS Maps
      </div>
        <FaPaw />
        <div>
          Animal Services
      </div>
        <GiPineTree />
        <div>
          Parks and Recreation
      </div>
      </div>
    </>
  );
};

export default SideHoverBar;