const longestPtos2 = (arr, pto) => {
  let vacation = 0, tempPto = pto, start = 0;
  while(start < arr.length) {
    let tempVacation = 0;
    for(let i=start; i<arr.length;i++) {
      if(arr[i]) {
        tempVacation++;
      } else {
        if(!tempPto) break;
        tempVacation++;
        tempPto--;
      }
    }
    if(tempVacation>vacation) vacation = tempVacation;
    if(start < vacation) break;
    start++;
  }
  return vacation;
}

const longestPtos = (arr, pto) => {
  let vacation = 0, temp = 0, count = 0;
  const sum = [];
  arr.forEach((element, index) => {
    if(!element) {
      if(temp) sum.push(temp);
      temp = 0;
      sum.push(false);
      count++;
    } else {
      temp++;
    }
  })
  if(temp) sum.push(temp);
  let tempVacation = 0, index = 0;
  while(index < sum.length) {
    tempPto = pto;
    for(let i=index; i<sum.length;i++) {
      if(sum[i]) {
        tempVacation += sum[i];
      } else {
        if(!tempPto) break;
        tempPto--;
        tempVacation++;
      }
    }
    if(tempVacation>vacation) vacation = tempVacation;
    tempVacation=0;
    index++;
  }
  return vacation;
}

console.log(longestPtos([true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, true], 3))
