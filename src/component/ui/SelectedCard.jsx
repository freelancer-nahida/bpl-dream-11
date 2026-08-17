import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedCard = ({ player, handleDelete }) => {
  return (
    <div
      key={player.playerName}
      className="border rounded-xl p-5 mb-4 flex items-center justify-between"
    >
      {/* Player Information */}
      <div className="flex items-center gap-5">
        <img
          src={player.playerImage}
          alt={player.playerName}
          className="w-20 h-20 object-cover rounded-lg"
        />

        <div>
          <h2 className="flex items-center gap-2 font-bold text-xl">
            <FaUser />
            {player.playerName}
          </h2>

          <p>{player.playerType}</p>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => handleDelete(player)}
        className="text-red-500 text-2xl hover:text-red-700"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default SelectedCard;
