import { Component,OnInit } from '@angular/core';
import { TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  options = {
    useCheckbox: true
  };
 nodes;
  data = {
  "info": {
    "laptop": {
    },
    "config": {
      "properties": {
        "ram": {
        },
        "processor": {
        },
        "hdd": {

        }
      }
    },
    "link": {
     
    },
    "name": {
    
    },
    "company": {
      "properties": {
        "model": {
         
        },
        "maker": {
          "type": "integer"
        },
        "country": {
          "type": "text"
        },
        "enterprise": {
        
        }

      }
    }
  }
};
click(tree:TreeModel)
{
  console.log(tree.activeNodes);
    Object.keys(tree.selectedLeafNodeIds).forEach(x=>{
      let node:TreeNode=tree.getNodeById(x);
      if (node.isSelected)
      {
         console.log("Selected:",node.data.name,"Parent:",node.parent.data.name);

      }
  }) 

}
ngOnInit()
{
 const results = Object.keys(this.data.info).map(k => ({
  name: k,
  children: this.data.info[k].properties
    ? Object.keys(this.data.info[k].properties).map(kk => ({name: kk}))
    : []
}));

 this.nodes = results; 
 }

  

    







  
}
