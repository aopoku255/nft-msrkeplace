import axie from "../tile.jpeg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { GetIpfsUrlFromPinata } from "../utils";
import { useEffect } from "react";

function NFTTile(data) {
  const newTo = {
    pathname: "/nftPage/" + data.data.address,
  };

  const handleClick = () => {
    sessionStorage.setItem("image", data.data.image);
    sessionStorage.setItem("name", data.data.name);
    sessionStorage.setItem("price", data.data.price);
    sessionStorage.setItem("description", data.data.description);
    sessionStorage.setItem("address", data.data.address);
  };

  const IPFSUrl = GetIpfsUrlFromPinata(data.data.image);

  return (
    <Link to={newTo} onClick={handleClick}>
      <div className="border-2 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg w-48 md:w-72 shadow-2xl">
        <img
          src={data.data.image}
          alt=""
          className="w-72 h-80 rounded-lg object-cover"
          crossOrigin="anonymous"
        />
        <div className="text-white w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
          <strong className="text-xl">{data.data.name}</strong>
          <p className="display-inline">{data.data.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default NFTTile;
