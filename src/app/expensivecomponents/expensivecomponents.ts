import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ImageService } from '../image.service';
import { createGlobalPositionStrategy } from '@angular/cdk/overlay';
import {MatCardModule} from '@angular/material/card'
import { Router, RouterLink } from '@angular/router';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

@Component({
  selector: 'app-expensivecomponents',
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatTableModule, MatCardModule],
  templateUrl: './expensivecomponents.html',
  styleUrl: './expensivecomponents.css',
})
export class Expensivecomponents implements OnInit {

  imageService = inject(ImageService);
  private ctr = inject(ChangeDetectorRef);
  private router = inject(Router);

  EXAMPLE_DATA: any[] = [
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
    {
      "data": { "name": "Applications", "size": "200mb", "type": "Folder" },
      "children": [
        {
          "data": { "name": "Angular", "size": "25mb", "type": "Folder" },
          "children": [
            {
              "data": {
                "name": "angular.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://img.icons8.com/color/1200/angularjs.jpg"
              }
            },
            {
              "data": {
                "name": "cli.app",
                "size": "10mb",
                "type": "Application",
                "image": "https://user-images.githubusercontent.com/7990614/27530684-09d7c75a-5a5a-11e7-9893-1395507feb2e.png"
              }
            },
            {
              "data": {
                "name": "mobile.app",
                "size": "5mb",
                "type": "Application",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFj_pp6GTAfwMc9f8D7H_d80eC3mw5ORDTg&s"
              }
            }
          ]
        },
        {
          "data": {
            "name": "editor.app",
            "size": "25mb",
            "type": "Application",
            "image": "https://i.pinimg.com/1200x/24/fc/3d/24fc3d5fd2ea3bd1a4b330b7ea5ba73d.jpg"
          }
        },
        {
          "data": {
            "name": "settings.app",
            "size": "50mb",
            "type": "Application",
            "image": "https://play-lh.googleusercontent.com/rDmfMQWx6P8pPZd1lyHlLMognLeaaJQUWEH33jz9qKjgHcxw5Dzv9OWcfeHpYIegZQ"
          }
        }
      ]
    },
  ]

  dataSource = this.EXAMPLE_DATA;
  products = [];


  displayedColumns: string[] = ['Code', 'Name', 'Category', 'Quantity'];

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  async ngOnInit() {
    // this.imageService.getImages().then((images: any) => this.imageService.set(images));
    //     this.imageService.getFilesystem().then((files) => (this.files = files));
    (this.products as any) = await this.imageService.getProductsMini();
    this.ctr.detectChanges();
  }

  getImageDetails(node: any) {
    console.log(node);
  }

  viewDetails() {
    console.log("router");
    this.router.navigate(['/under-develop']);
  }

}
