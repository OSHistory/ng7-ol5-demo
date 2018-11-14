import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import * as proj from 'ol/proj';

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
    this.view = new View({
      center: proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    });
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: this.view
    });

  }

  resetCenter() {
    this.view.setCenter(
      proj.fromLonLat([
        Math.random() * 170,
        Math.random() * 80
      ])
    );
  }

}
