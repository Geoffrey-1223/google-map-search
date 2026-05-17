import { useState } from "react";
import { useDispatch } from "react-redux";

import places from "../mock/places";
import { searchPlaceRequest, resetSelectedPlace } from "../features/places/placesAction";
export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const dispatch = useDispatch();

  const handleSearch = (value) => {
  setQuery(value);

  if (!value.trim()) {
    setResults([]);

    // 🔥 RESET MAP + DETAIL WHEN INPUT IS EMPTY
    dispatch(resetSelectedPlace());

    return;
  }

  const filtered = places.filter((place) =>
    place.name.toLowerCase().includes(value.toLowerCase())
  );

  setResults(filtered);
};

  const handleSelect = (place) => {
    dispatch(searchPlaceRequest(place));

    setQuery(place.name);
    setResults([]);
  };

  /*
    =========================================================
    Google Places Autocomplete Integration (Reference Only)
    =========================================================

    This block shows how real Google API would replace mock data:

    new google.maps.places.Autocomplete(inputElement, {
      fields: ["formatted_address", "geometry", "name"],
    });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      dispatch(searchPlaceRequest({
        name: place.name,
        address: place.formatted_address,
        location: {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        },
      }));
    });

    NOTE:
    Currently using mock data for offline development.
  */

  return (
    <div className="position-relative w-100">
      
      {/* INPUT */}
      <input
        className="form-control mb-2"
        style={{
            borderRadius: "12px",
            padding: "12px 14px",
            border: "1px solid #e5e7eb",
            boxShadow: "none",
            fontSize: "14px",
        }}
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search places..."
      />

      {/* DROPDOWN */}
      {results.length > 0 && (
        <div
          className="list-group position-absolute w-100 shadow"
          style={{
                zIndex: 999,
                borderRadius: "12px",
                overflow: "hidden",
                marginTop: "6px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
        >
          {results.map((place) => (
            <button
              key={place.id}
              type="button"
              className="list-group-item list-group-item-action"
              style={{
                cursor: "pointer",
                border: "none",
                transition: "all 0.15s ease",
                textAlign: "left"
                }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f3f4f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white";
              }}
              onClick={() => handleSelect(place)}
            >
              <div className="fw-bold">{place.name}</div>
              <small className="text-muted">
                {place.address}
              </small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}