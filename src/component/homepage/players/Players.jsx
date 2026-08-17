
import { use, useState } from "react";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const players = use(playerPromise);

  const [selectedType, setSelectedType] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto my-[60px]">
      {/* Heading + Buttons */}
      <div className="flex justify-between gap-4 items-center mb-[20px]">
        {selectedType === "available" ? (
          <h2 className="font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-bold text-3xl">
            Selected Players({selectedPlayers.length}/{players.length})
          </h2>
        )}

        {/* Buttons */}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn rounded-l-2xl rounded-r-none ${
              selectedType === "available" ? "bg-[#E7FE29]" : "bg-red-500"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setSelectedType("selected")}
            className={`btn rounded-l-none rounded-r-2xl ${
              selectedType === "selected" ? "bg-[#E7FE29]" : "bg-red-500"
            }`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {/* Available / Selected Players */}
      {selectedType === "available" ? (
        <AvailablePlayers
          Players={players}
          setCoin={setCoin}
          coin={coin}
          setSelectedPlayers={setSelectedPlayers}
          selectedPlayers={selectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        />
      )}
    </div>
  );
};

export default Players;
