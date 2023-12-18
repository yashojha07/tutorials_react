const { format } = require('date-fns');

const DateFun = () => {
  const time = new Date();
  console.log(time);
  
  const testTime = format(
    time,
    "MMM','dd yyyy 'at' kk:mm a",
    { timeZone: 'auto' }
  );

 
  

  console.log(testTime);
};

DateFun();
