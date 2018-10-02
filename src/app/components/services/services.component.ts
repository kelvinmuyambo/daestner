import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Array<any> = [
    {
      name: 'DIGITAL BUSINESS DEVELOPMENT SOLUTIONS',
      description: 'Our digital business thrives much in shaping the future of businesses by developing new generation business models which are vibrant enough to overcome challenges and improve business performance. We inspire Product modernization and sustainable growth.',
      image: 'assets/img/services/business_dev_sol.jpg'
    }, {
      name: 'DIGITAL BUSINESS OPERATIONS SOLUTIONS',
      description: 'Our digital business operation solution is an inspired set of business processes regeneration technologies which thrives to reimagine modern business processes by implementing modern reengineered automated processes which improves business performance by innovative design, consolidation, and automation of business processes to generate customer value.',
      image: 'assets/img/services/business-op-sol.jpg'
    }, {
      name: 'RETAIL CONSULTING SERVICES AND SOLUTIONS',
      description: 'As the retail trading continues to evolve at an unprecedented pace in the global new digital economy, more and more traditional and savvy retailers are at large adopting the new generation trading practices. Daestner systems as a fully fledged industry expert with wide knowledge, experience and industrial experience capacitated with modern technologies is keen for working with specialty retailers to enhance their businesses through the use of cutting-edge technologies, innovative strategies and industry best practices  as a way of gaining  competitive and profitable advantage.',
      image: 'assets/img/services/retail_consu_sol.jpg'
    }, {
      name: 'DIGITAL BUSINESS SYSTEMS AND TECHNOLOGIES',
      description: 'Daestner digital systems and technology seeks to improve the business systems and infrastructure by increasing ease of use, functionality, and modernization. The organization seeks to provide Simplified information and technology infrastructure solutions to businesses in various industries.',
      image: 'assets/img/services/systems_tech.jpg'
    }, {
      name: 'DIGITAL BUSINESS DEVELOPMENT SOLUTIONS',
      description: 'Our digital business thrives much in shaping the future of businesses by developing new generation business models which are vibrant enough to overcome challenges and improve business performance. We inspire Product modernization and sustainable growth.',
      image: 'assets/img/services/business_dev_sol.jpg'
    }, {
      name: 'DIGITAL BUSINESS DEVELOPMENT SOLUTIONS',
      description: 'Our digital business thrives much in shaping the future of businesses by developing new generation business models which are vibrant enough to overcome challenges and improve business performance. We inspire Product modernization and sustainable growth.',
      image: 'assets/img/services/business_dev_sol.jpg'
    }
  ];
  service: any;
  constructor() { }

  ngOnInit() {
  }

  select(service){
    this.service = service;
    console.log(service);
  }
}
