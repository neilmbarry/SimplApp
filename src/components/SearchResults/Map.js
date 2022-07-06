import React from "react";
import classes from "./Map.module.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "../../img-compressed/Icon.png";

const Map = ({ className }) => {
  const classesList = `${classes.main} ${className}`;
  const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [25, 35],
  });
  return (
    <div className={classesList} id="map">
      <MapContainer
        center={[43.65223, -79.401004]}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[43.64, -79.43]} icon={markerIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={markerIcon} position={[43.658, -79.4018]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={markerIcon} position={[43.7, -79.4019]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={markerIcon} position={[43.65, -79.45]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={markerIcon} position={[43.67, -79.42]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
