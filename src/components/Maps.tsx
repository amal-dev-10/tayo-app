import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, type LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useQuery } from 'react-query';
import axios from 'axios';

function Maps() {
    
    const [countriesData, setCountriesData] = useState<any[]>([]);

    const { data, error, isLoading } = useQuery('countryData', async ()=>{
        let d = await axios.get("https://disease.sh/v3/covid-19/countries");
        return d.data
    });

    useEffect(()=>{
        setCountriesData(data);
    }, [data])

  const center: LatLngTuple = [51.505, -0.09];
  return (
    (data && data?.length) ?
    <MapContainer center={center} zoom={2.5} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {countriesData?.map(country => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={new Icon({iconUrl: country.countryInfo.flag, iconSize: [27, 20]})}
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>Active: {country.active}</p>
              <p>Recovered: {country.recovered}</p>
              <p>Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    : <span>Loading...</span>
    // <div>
    // </div>
  )
}

export default Maps