 function dataDigit(digit,num){  
        return   num.toFixed(digit);  
  
    }  
 var x = 116.360853;
    var y = 39.958371; 
    function main(x, y){
    var x_pi = 3.14159265358979324 * 3000.0 / 180.0; 
      var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);  
      var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x *  x_pi);  
      var latitude; //经度
      latitude=dataDigit(6,z * Math.cos(theta) + 0.0065);
      var longtitude;  //纬度
      longtitude=dataDigit(6,z * Math.sin(theta) + 0.006);
      console.log("经度="+latitude+"\n"+"纬度="+longtitude);
}
main(x, y);