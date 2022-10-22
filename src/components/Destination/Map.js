import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Loader from '../common/Loader';

const Map = () => {
    const [myDestination, setMyDestination] = useState(undefined);

    // get booking info from local storage
    const booking = localStorage.getItem('booking');
    const { destination } = JSON.parse(booking);

    useEffect(() => {
        if (destination === 'Sundarban') {
            setMyDestination([22.29723336985138, 89.56771238885267]);
        } else if (destination === "Cox's Bazar") {
            setMyDestination([21.416573440442196, 91.9808629877609]);
        } else if (destination === 'Sajek Valley') {
            setMyDestination([23.384729561564498, 92.29180728754946]);
        } else if (destination === 'Bandarban') {
            setMyDestination([22.202857104631715, 92.21444788634261]);
        }
    }, [destination]);

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    console.log(myDestination)

    return !myDestination ? (
        <Loader />
    ) : (
        <div className="bg-white p-5 rounded-lg shadow-lg">
            <MapContainer
                center={myDestination}
                zoom={13}
                scrollWheelZoom={false}
                style={{ borderRadius: '8px' }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={myDestination}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;
