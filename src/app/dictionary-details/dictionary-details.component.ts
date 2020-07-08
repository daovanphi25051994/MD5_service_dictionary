import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../dictionary.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-details',
  templateUrl: './dictionary-details.component.html',
  styleUrls: ['./dictionary-details.component.css']
})
export class DictionaryDetailsComponent implements OnInit {

  word: IWord;
  sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {key: key, meaning: meaning};
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
