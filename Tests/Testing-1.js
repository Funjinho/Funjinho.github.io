// Write function below
function groceries (itemList) {

    const itemNames = itemList.map(item => item.item);
    
    if (itemList.length === 1) {
      console.log(`${itemNames[0]}`)
    }
    
    if (itemList.length === 2) {
     console.log(`${itemNames[0]} and ${itemNames[1]}`) 
    }
    // 3 or more items
    const lastTwo = itemNames.slice(-2) //This retrieves the last 2 items
    const firstPart = itemNames.slice(0, -2) // this recovers everything except the last 2
    console.log(`${firstPart.join(', ')}, ${lastTwo[0]} and ${lastTwo[1]}`);
    
    }
    
    /* 

const groceries = list => {
    let listString = ''
  
    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i == list.length - 2){
        listString += ' and ';
      }
    }
    
    return listString;
    */
    
    
    groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]);
    // returns 'Carrots, Hummus, Pesto and Rigatoni'
    
    
    
    
    
    
    
    
    
  
 