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

        <div className="sb-item-container">
          <MdAttachMoney className="sb-icon" />
          <div>
            Make a Payment
          </div>
        </div>

        <div className="sb-item-container">
          <GiWaterDrop className="sb-icon" />
          <div>
            Utilities
          </div>
        </div>

        <div className="sb-item-container">
          <IoIosPeople className="sb-icon" />
          <div>
            Jobs &amp; Careers
          </div>
        </div>

        <div className="sb-item-container">
          <GrPlan className="sb-icon" />
          <div>
            Master Plans
          </div>
        </div>

        <div className="sb-item-container">
          <BsFillTrashFill className="sb-icon" />
          <div>
            Trash &amp; Recycling
          </div>
        </div>

        <div className="sb-item-container">
          <FaMapMarkedAlt className="sb-icon" />
          <div>
            GIS Maps
          </div>
        </div>

        <div className="sb-item-container">
          <FaPaw className="sb-icon" />
          <div>
            Animal Services
          </div>
        </div>

        <div className="sb-item-container">
          <GiPineTree className="sb-icon" />
          <div>
            Parks and Recreation
          </div>
        </div>

      </div>
    </>
  );
};

export default SideHoverBar;