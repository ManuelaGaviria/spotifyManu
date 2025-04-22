import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service'; 
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  
  mockCover: TrackModel = {
    cover: '',
    album: 'holix2',
    name: 'BEBE(Oficial)',
    url: '',
    _id: 1
  }

  ngOnInit(): void {
      
  }

}