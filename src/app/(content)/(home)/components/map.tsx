/* Since the map was loaded on client side,
we need to make this component client rendered as well */
'use client';

// Map component Component from library
import { GoogleMap } from '@react-google-maps/api';

// Map's styling
const defaultMapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '15px 0px 0px 15px',
};

// K2's coordinates
const defaultMapCenter = {
  lat: 49.842957,
  lng: 24.031111,
};

// Default zoom level, can be adjusted
const defaultMapZoom = 18;

// Map options
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
  mapTypeId: 'satellite',
};

const MapComponent = () => {
  return (
    <div className="mb-20 mt-5 flex h-[300px] w-full flex-col justify-between gap-10 lg:flex-row">
      <div className="w-full text-text-tugrenya-black lg:w-1/2">
        Text will be here
      </div>
      <div className="w-full lg:w-1/2">
        <GoogleMap
          mapContainerStyle={defaultMapContainerStyle}
          center={defaultMapCenter}
          zoom={defaultMapZoom}
          options={defaultMapOptions}
        >
        </GoogleMap>
      </div>
    </div>
  );
};

export { MapComponent };
