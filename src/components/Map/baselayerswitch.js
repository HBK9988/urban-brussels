// Rendering of the search bar
const BaseLayerSwitch = {
    displayBaseLayerSwitch: (container_idname) => {
      document.getElementById(container_idname).innerHTML = /* html */`
      <nav id="menu">
      <button id="grayscale">URBIS</button>
      <button id="aerial">Aerial Imagery</button>
      <button id="mapbox">OpenStreetMap</button>
    </nav>
          `
    },
    showGrayScale: (map) => {
    map.addLayer({
        id: 'wms-layer-grayscale',
        type: 'raster',
        source: 'wms-source-grayscale',
        paint: {}
        })
        if (map.getLayer('wms-layer-aerial')) {
        map.removeLayer('wms-layer-aerial')
        }
    },
    showAerial: (map) => {
        map.addLayer({
            id: 'wms-layer-aerial',
            type: 'raster',
            source: 'wms-source-aerial',
            paint: {}
          })
          if (map.getLayer('wms-layer-grayscale')) {
            map.removeLayer('wms-layer-grayscale')
          }
    },
    showMapbox: (map) => {
        if (map.getLayer('wms-layer-grayscale')) {
            map.removeLayer('wms-layer-grayscale')
          }
          if (map.getLayer('wms-layer-aerial')) {
            map.removeLayer('wms-layer-aerial')
          }
    },
    addEventListener: (map) => {
        document.getElementById('grayscale').addEventListener('click', () => {
            BaseLayerSwitch.showGrayScale(map)
        })
        document.getElementById('aerial').addEventListener('click', () => {
            BaseLayerSwitch.showAerial(map)
        })
        document.getElementById('mapbox').addEventListener('click', () => {
            BaseLayerSwitch.showMapbox(map)
        })
    },
    initSources : (map, language) => {
    // Dutch grayscale layer//
      map.addSource('wms-source-grayscale', {
        type: 'raster',
        tiles: [
            `https://geoservices-urbis.irisnet.be/geoserver/ows/?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=urbis${language.toUpperCase()}Gray`
        ],
        tileSize: 256
    })
    // Aerial Imagery layer //
    map.addSource('wms-source-aerial', {
      type: 'raster',
      tiles: [
        'https://geoservices-urbis.irisnet.be/geoserver/ows/?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Urbis:Ortho2019'
      ],
      tileSize: 256
    })
}
}
export default BaseLayerSwitch 