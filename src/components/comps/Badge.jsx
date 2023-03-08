import React from "react";

const Badge = ({ Icon, title }) => {
   return (
      <button className="px-5 py-2 flex items-center gap-5 text-sm text-third capitalize rounded-md border border-third">
         <Icon size={20} /> <span>{title}</span>
      </button>
   );
};

export default Badge;
