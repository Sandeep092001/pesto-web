import React from "react";
import OurVideos from "./OurVideos";

function page() {
  return (
    <div>
      <div className="text-black text-3xl font-bold text-center p-10">
        Our <span className="text-[#0077B6]">Videos</span>
      </div>
      <div>
        <OurVideos />
      </div>
    </div>
  );
}

export default page;
