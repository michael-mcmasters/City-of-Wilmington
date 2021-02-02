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

        <div>
          <MdAttachMoney className="sb-icon" />
          <div>
            Make a Payment
          </div>
        </div>

        <div>
          <GiWaterDrop className="sb-icon" />
          <div>
            Utilities
          </div>
        </div>

        <div>
          <IoIosPeople className="sb-icon" />
          <div>
            Jobs &amp; Careers
          </div>
        </div>

        <div>
          <GrPlan className="sb-icon" />
          <div>
            Master Plans
          </div>
        </div>

        <div>
          <BsFillTrashFill className="sb-icon" />
          <div>
            Trash &amp; Recycling
          </div>
        </div>

        <div>
          <FaMapMarkedAlt className="sb-icon" />
          <div>
            GIS Maps
          </div>
        </div>

        <div>
          <FaPaw className="sb-icon" />
          <div>
            Animal Services
          </div>
        </div>

        <div>
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