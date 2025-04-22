import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{

  mockTrackList: Array<TrackModel> = []

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.mockTrackList = data
  }

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

}
