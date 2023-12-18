const { format } = require('date-fns');

const DateFun = () => {
  const time = new Date();
  console.log(time);
  const t2 = time.getTimezoneOffset();
  console.log(t2);
  console.log(time.toString());
  console.log(time.getDay());
  console.log(time.toLocaleTimeString());
  console.log(time.toUTCString());
  console.log(time);

  const testTime = format(
    time,
    "MMM','dd yyyy 'at' kk:mm a",
    { timeZone: 'auto' }
  );

  // const constructLateUpdateTime = () => {
  //   if (summaryaData) {
  //     const lastRefreshedTime = new Date(summaryaData?.lastRefreshedTime);
  
  //     try {
  //       // Convert lastRefreshedTime to a string in the browser's timezone
  //       return lastRefreshedTime.toLocaleString();
  //     } catch {
  //       // Handle the error, if any
  //       return lastRefreshedTime.toUTCString();
  //     }
  //   }
  // };
  

  console.log(testTime);
};

DateFun();
