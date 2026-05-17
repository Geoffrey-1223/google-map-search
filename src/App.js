import SearchBox from "./components/SearchBox";
import MapView from "./components/MapView";
import PlaceDetail from "./components/PlaceDetail";

function App() {
  return (
      <div 
        className="container mt-4"  
        style={{
           background: "linear-gradient(135deg, #3c3d3d 0%, #667587 100%)",
           minHeight: "100vh", 
           paddingTop: "20px", 
           borderRadius: "10px",
           fontFamily: "Inter, system-ui, sans-serif",
         }}>
        
        <div className="text-center mb-4" >
          <h2 
            style={{
              fontWeight: "700",
              letterSpacing: "-0.5px",
              color: "#d7dce4",
            }}
          >
            Google Place Search App
          </h2>
          <p  style={{ color: "#bdd5ea", fontSize: "14px" }}>
            Search places and view location details
          </p>
        </div>

          
        <div className="row g-4">
          
          {/* LEFT SIDE */}
          <div 
            className="col-md-4"
             style={{
              background: "linear-gradient(135deg, #3c3d3d 0%, #667587 100%)",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}  
          >
            <SearchBox />
            <PlaceDetail />
          </div>

          {/* RIGHT SIDE */}
          <div 
            className="col-md-8"
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "12px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            <MapView />
          </div>

        </div>
      </div>

    
  );
}

export default App;