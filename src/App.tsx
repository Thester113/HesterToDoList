import React from "react";
import ToDo from "./components/ToDo"; 
import { gql, useQuery } from '@apollo/client';

// GraphQL query to get location names
const GET_LOCATIONS = gql`
  query Locations {
    locations {
      name
    }
  }
`;

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px",
        marginBottom: "100px",
      }}
    >
      <h1>Hester Todo List</h1>
      <ToDo />
      <div>
        <h2>Location Names</h2>
        <table border={1} cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Location Name</th>
            </tr>
          </thead>
          <tbody>
            {data.locations.map((location: { name: string }, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{location.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

