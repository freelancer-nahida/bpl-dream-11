import React from "react";

import Card from "../../ui/Card";

const AvailablePlayers = ({
  Players,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  // console.log(Players, "Players");

  return (
    <div className=" grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Players.map((Player, index) => (
        <Card
          key={Player.id || index}
          Player={Player}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
