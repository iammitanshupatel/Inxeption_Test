import React, { useState, useEffect } from "react";
import axios from "axios";
import TrainStationsTable from "@/components/Table";

interface Station {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  favorite: boolean;
}

const TrainStations: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.irail.be/stations/?format=json&lang=en"
      );
      const stationData = response.data.station || [];
      setStations(
        stationData.map((station: any) => ({
          id: station.id,
          name: station.name,
          latitude: station.locationY,
          longitude: station.locationX,
        }))
      );
    };
    fetchData();
  }, []);

  const handleNoteChange = (stationId: string, note: string) => {
    setNotes({ ...notes, [stationId]: note });
  };

  return (
    <div>
      <h1>Train Stations (Belgium)</h1>
      <TrainStationsTable
        stations={stations}
        notes={notes}
        onNoteChange={handleNoteChange}
      />
    </div>
  );
};

export default TrainStations;
