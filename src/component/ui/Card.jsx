import React, { useState } from "react";

import { FaUser, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";
const Card = ({
  Player,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    let newCoin = coin - Player.price;
    if (newCoin >= 0) {
      setCoin(coin - Player.price);
    } else {
      toast.error("Not enough coin to purchase this player");
      return;
    }
    toast.success(`${Player.playerName} is selected`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, Player]);
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={Player.playerImage} alt={Player.playerName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser /> {Player.playerName}
        </h2>
        <div className=" flex justify-between gap-2 items-center">
          <div className="flex gap-2  item-center">
            <FaFlag />
            <p>{Player.playerCountry}</p>
          </div>
          <button className="btn">{Player.playerType}</button>
        </div>
        <div className="divider  w-full"></div>

        <h2 className="font-bold">({Player.rating})</h2>
        <div className="flex justify-between gap-4 font-bold">
          <p>{Player.battingStyle}</p>
          <p className="text-right">{Player.battingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center">
          <p className="font-semibold">{Player.price}</p>
          <button
            className="btn "
            onClick={handleChoosePlayer}
            disabled={isSelected}
          >
            {isSelected ? "Selected " : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
