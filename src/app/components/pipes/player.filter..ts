

import { Pipe, PipeTransform } from "@angular/core";
import { Iplayer } from "../models/player";

@Pipe({
    name : 'playerFilter'
})
export class playerFilterPipe implements PipeTransform {
   transform(arr: Array<Iplayer>, searchVal : string) : Array<Iplayer> {
      if(!searchVal){
         return arr
        }
     if(!arr){
        return []
      }

   //   let filteredArr = arr.filter(p =>p.name.toLowerCase().includes(searchVal.toLowerCase()));
   //   return filteredArr
   
      // If search is empty, return full list
    
      return arr.filter(player => {
        return (
          player.name.toLowerCase().includes(searchVal.toLowerCase()) ||
          player.team.toLowerCase().includes(searchVal.toLowerCase()) ||
          player.odiRuns.toString().includes(searchVal) ||
          player.testRuns.toString().includes(searchVal) ||
          player.debutYear.toString().includes(searchVal)
        );
      });
    };
    
  
   
    
   }
    

  

   
    
    
   
