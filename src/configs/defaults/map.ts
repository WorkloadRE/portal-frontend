import { type MapOptions } from 'mapbox-gl'

import { type ApiLocation } from 'services/API'

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY || ''

const config = {
  // Mapbox access token and default options
  mapboxDefaults: {
    // Spring, TX — Bruno Fine Properties home base (77379 centroid)
    center: [-95.4172, 30.0799] as [number, number],
    zoom: 10,
    minZoom: 8,
    maxZoom: 18,
    dragRotate: false,
    doubleClickZoom: true,
    attributionControl: false,
    logoPosition: 'bottom-left',
    accessToken
  } as Partial<MapOptions>,
  // Mapbox map styles
  mapStyles: {
    map: 'streets-v12',
    hybrid: 'satellite-streets-v12',
    satellite: 'satellite-v9'
  },
  // zoom levels for search area and addresses
  defaultAreaZoom: 13,
  fallbackAreaZoom: 11,
  defaultAddressZoom: 15,
  propertyPageAddressZoom: 18,
  // Default polygon — Greater Houston MSA (HAR board 147 coverage area)
  // Bounding box from ~Galveston (south) to ~Conroe (north), ~Katy (west) to ~Baytown (east)
  defaultPolygon: [
    { lat: 30.55, lng: -96.0 },
    { lat: 30.55, lng: -94.8 },
    { lat: 29.1, lng: -94.8 },
    { lat: 29.1, lng: -96.0 }
  ] as ApiLocation[],
  // proximity search — biases autosuggest toward north Houston / Spring
  proximitySearchCenter: { lat: 30.0799, lng: -95.4172 } as ApiLocation,
  proximitySearchLanguage: 'en',
  proximitySearchCountry: 'US',
  proximitySearchLimit: 10
}

export type MapStyle = keyof typeof config.mapStyles

export default config
