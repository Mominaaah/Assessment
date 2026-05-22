import { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCountry = async () => {
    if (!country) {
      setError("Please enter a country name");
      setData(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );

      if (!response.ok) {
        throw new Error("Country not found");
      }

      const result = await response.json();
      setData(result[0]);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🌍 Country Explorer</h1>

      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button onClick={fetchCountry}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {data && (
        <div className="card">
          <img src={data.flags.png} alt="flag" />

          <h2>{data.name.common}</h2>

          <p>
            <strong>Capital:</strong> {data.capital}
          </p>

          <p>
            <strong>Population:</strong> {data.population}
          </p>

          <p>
            <strong>Region:</strong> {data.region}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;