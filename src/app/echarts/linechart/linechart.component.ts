import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as echarts from 'echarts';
import * as webix from 'webix'
// import{webixModule} from 'webix'
// import  $ from 'jquery';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  chart: any;
  options: any;
  // private ui : webix.ui.datatable | undefined;
  @ViewChild('#main') echarts!: ElementRef;
  constructor(private elm: ElementRef) {
    var datatable = webix.ui({
      view: "datatable",
      columns: [
        { id: "rank", header: "", width: 50 },
        { id: "title", header: "Film title", width: 200 },
        { id: "year", header: "Released", width: 80 },
        { id: "votes", header: "Votes", width: 100 }
      ],
      data: [
        { id: 1, title: "The Shawshank Redemption", year: 1994, votes: 678790, rank: 1 },
        { id: 2, title: "The Godfather", year: 1972, votes: 511495, rank: 2 }
      ]
    });
  }
  ngOnInit() {

    //  echarts.init(this.echarts.nativeElement);
    this.chart = echarts.init(document.getElementById('main') as HTMLDivElement);
    this.chart.setOption({
      title: {
        id: 1, show: true, left: "center",
        text: 'Customer Ratings', target: 'blank', link: 'linechart', subtext: "Weekly Updates ", textStyle: {
          color: 'blue', fontStyle: 'oblique',
        }
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }],
    })
    console.log(document.getElementById('m') as HTMLDivElement)
  }

  @ViewChild('m') container!: ElementRef;
  // @ViewChildren('.m') inputs!: QueryList<ElementRef>;

  ngAfterViewInit() {
    var element = document.getElementById('m') as HTMLDivElement;
    // webix.ui(
    //   {
    //     view: "button",
    //     label: "Click me",
    //     container: element
    //   }
    // );



    // console.log(this.container.nativeElement.value)
  }


}
