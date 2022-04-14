import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule, Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const markers = [
    { markerOffset: 25, coordinates: [-78.51883778390454, 44.08326956478143] },
    { markerOffset: -15, coordinates: [-79.44983763182422, 43.93355303429411] },
    { markerOffset: -15, coordinates: [-79.43499486175271, 43.94935965730071] }
  ];

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [80, -45.0, 20],
        scale:1500
      }}
    >
      <Graticule stroke="#EAEAEC" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9f62d9"
              stroke="#EAEAEC"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
        <g
          fill="none"
          stroke="#FF5533"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-12, -24)"
        >
          <circle cx="12" cy="10" r="3" />
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
        </g>
        <text
          textAnchor="middle"
          y={markerOffset}
          style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
        >
          {name}
        </text>
      </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
