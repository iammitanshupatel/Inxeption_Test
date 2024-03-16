import React from "react";

interface TableProps {
  stations: any[];
  notes: Record<string, string>;
  onNoteChange: (stationId: string, note: string) => void;
}

// const StyledTable = styled.table`
//   border-collapse: collapse;
//   width: 100%;
// `;

// const TableHeader = styled.th`
//   padding: 10px;
//   text-align: left;
//   border: 1px solid #ddd;
// `;

// const TableCell = styled.td`
//   padding: 10px;
//   border: 1px solid #ddd;
// `;

const TrainStationsTable: React.FC<TableProps> = ({
  stations,
  notes,
  onNoteChange,
}) => {
  console.log(Object.keys(stations[0] || {}));
  const headers = ["name", "latitude", "longitude"];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {stations.map((station) => (
          <tr key={station.id}>
            <td>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${station.latitude},${station.longitude}`}
                target="_blank"
              >
                {station.name}
              </a>
            </td>
            <td>{station.latitude}</td>
            <td>{station.longitude}</td>
            <td>
              <input
                type="text"
                value={notes[station.id] || ""}
                onChange={(e) => onNoteChange(station.id, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrainStationsTable;
