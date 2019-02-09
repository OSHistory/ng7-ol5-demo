import { Component, OnInit } from '@angular/core';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import TileLayer from 'ol/layer/Tile';
import * as proj from 'ol/proj';
import Projection from 'ol/proj/Projection';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';

@Component({
  selector: 'nod-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  view: View;
  map: Map;

  constructor() { }

  ngOnInit() {
    // Reproduce the basic example from openlayers.org 
    // for testing Style and Icon
    // https://openlayers.org/en/latest/examples/icon.html
    const iconFeature = new Feature({
      geometry: new Point([0, 0]),
      name: 'Null Island',
      population: 4000,
      rainfall: 500
    });


    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: './assets/icon.png'
      })
    });
    iconFeature.setStyle(iconStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [iconFeature]
      })
    });

    this.view = new View({
      center: proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    });

    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: this.view
    });

    const my_proj: Projection = this.view.getProjection();
    console.log(my_proj.getUnits());
  }

  resetCenter() {
    this.view.setCenter(
      proj.fromLonLat([
        Math.random() * 170,
        Math.random() * 80
      ])
    );
  }

  exposeView(): View {
    return this.view;
  }

}
