import { useSelector } from "react-redux";

export default function PlaceDetail() {
  const selectedPlace = useSelector(
    (state) => state.places.selectedPlace
  );

  if (!selectedPlace) {
    return (
      <div className="card mt-3">
        <div className="card-body text-muted">
          No place selected
        </div>
      </div>
    );
  }

  return (
    <div 
      className="card mt-3 shadow-sm" 
      style={{
        border: "1px solid #eef2f7",
        borderRadius: "12px",
        background: "#fafafa",
      }}>
      <div 
        className="card-body"  
        style={{
          background: "#ffffff",
          borderRadius: "12px"
        }}>
        <h5 className="card-title" style={{ fontWeight: "600", color: "#111827" }}>
          {selectedPlace.name}
        </h5>

        <p className="card-text" style={{ color: "#6b7280", fontSize: "13px" }}>
          {selectedPlace.address}
        </p>

         <p style={{ fontSize: "14px", color: "#374151" }}>
          {selectedPlace.description}
        </p>

        <hr />

        <p className="mb-1">
          <strong>Latitude:</strong>{" "}
          {selectedPlace.location.lat}
        </p>

        <p className="mb-0">
          <strong>Longitude:</strong>{" "}
          {selectedPlace.location.lng}
        </p>
      </div>
    </div>
  );
}