import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import * as proj from 'ol/proj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map: Map;
  view: View;

  ngOnInit() {
    // this.view = new View({
    //   center: proj.fromLonLat([37.41, 8.82]),
    //   zoom: 4
    // });
    // this.map = new Map({
    //   target: 'map',
    //   layers: [
    //     new TileLayer({
    //       source: new OSM()
    //     })
    //   ],
    //   view: this.view
    // });

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
