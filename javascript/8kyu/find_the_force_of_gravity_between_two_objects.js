solution = (arr_val, arr_unit) => {
    //set constants
   const gravity= 6.67e-11
  const gravityUnit ='N⋅kg−2⋅m2'
  //standardize the units 
      arr_unit.forEach((element, index) => standardizeUnits(index));
      function standardizeUnits(index){
          if( arr_unit[index]=== 'g' || arr_unit[index]==='mm' ){
              arr_val[index]/=1e3
          }else if( arr_unit[index]=== 'mg' || arr_unit[index]=== 'μm' ){
              arr_val[index]/=1e6
          }else if( arr_unit[index]=== 'μg'  ){
              arr_val[index]/=1e9
          }else if( arr_unit[index]=== 'lb' ){
              arr_val[index]*=0.453592	
          }else if( arr_unit[index]=== 'ft' ){
            arr_val[2]*=0.3048	
          }else if( arr_unit[index]=== 'cm' ){
            arr_val[2]/=100
          }
      }	
  //return the answer
      return gravity* arr_val[0]*arr_val[1]/(arr_val[2]*arr_val[2]) 
  };