import React from "react";

import SelectedCard from "../../ui/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
  coin,
}) => {
  // Delete Player
  const handleDelete = (player) => {
    const remainingPlayers = selectedPlayers.filter(
      (p) => p.playerName !== player.playerName,
    );

    // Selected player list থেকে delete
    setSelectedPlayers(remainingPlayers);

    // Player-এর price আবার coin-এ যোগ
    setCoin((prevCoin) => prevCoin + Number(player.price));
  };

  return (
    <div>
      <div className="space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-xl font-bold">No Players Selected</h2>
            <p className="text-gray-500">
              Go to Available tab to select playersk
            </p>
          </div>
        ) : (
          selectedPlayers.map((player,index) => (
            // <div
            //   key={player.playerName}
            //   className="border rounded-xl p-5 mb-4 flex items-center justify-between"
            // >
            //   {/* Player Information */}
            //   <div className="flex items-center gap-5">
            //     <img
            //       src={player.playerImage}
            //       alt={player.playerName}
            //       className="w-20 h-20 object-cover rounded-lg"
            //     />

            //     <div>
            //       <h2 className="flex items-center gap-2 font-bold text-xl">
            //         <FaUser />
            //         {player.playerName}
            //       </h2>

            //       <p>{player.playerType}</p>
            //     </div>
            //   </div>

            //   {/* Delete Button */}
            //   <button
            //     onClick={() => handleDelete(player)}
            //     className="text-red-500 text-2xl hover:text-red-700"
            //   >
            //     <MdDelete />
            //   </button>
            // </div>
            <SelectedCard
            key={index}
              player={player}
              handleDelete={handleDelete}
            ></SelectedCard>
          ))
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
