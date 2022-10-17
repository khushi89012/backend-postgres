import data from '../db.json'

function Logic(){
    let total = [];
    let percen = 0;
    
    let cgpa =0;
      data[0].part_1.subject.map(el=>{
        total.push(el.total)
      })
    
    let sum = 0;
    let count = 0;
      for(let i = 0; i < total.length; i++){
        if(!isNaN(total[i])){
          count++;
          sum += total[i]
      }
      }
     percen = ((sum/count*100)/100)
     cgpa = parseFloat(percen/9.5)
}
export default Logic;