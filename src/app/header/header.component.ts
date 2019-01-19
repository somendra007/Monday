import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      let prev_scroll = window.pageYOffset;
      if (prev_scroll <= 0) {
        $('#nvbar').hide(); /* hide the scroll at the time of page load */
      }
      window.onscroll = function () {
        console.log('prev_s ', prev_scroll);
        const current_scroll = window.pageYOffset;
        console.log('curr_s ', current_scroll);
        if (current_scroll !== prev_scroll) {
          $('#nvbar').show();
        }
        if (current_scroll < 1) {
          $('#nvbar').hide();
        }
        prev_scroll = current_scroll;
      };
    });
  }

  // navbar() {
  //     $(document).ready(function () {

  //     let prev_scroll = window.pageYOffset;
  //     if (prev_scroll <= 0) {
  //       $('#nvbar').hide(); /* hide the scroll at the time of page load */
  //     }
  //     window.onscroll = function () {
  //       console.log('prev_s ', prev_scroll);
  //       const current_scroll = window.pageYOffset;
  //       console.log('curr_s ', current_scroll);
  //       if (current_scroll !== prev_scroll) {
  //         $('#nvbar').show();
  //       }
  //       if (current_scroll < 1) {
  //         $('#nvbar').hide();
  //       }
  //       prev_scroll = current_scroll;
  //     };
  //   });
  // }
}
