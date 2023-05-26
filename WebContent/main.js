//拿html值用
function getValue(ID) {
    return document.getElementById(ID).value;
}

//delay
function sleep () {  
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(true)
      }, 0.00001)
    })
  }

//主程式
function main() {   //async=非同步
    var coinsum = getValue("sum");
    var cointype = [];
    cointype.push(parseInt(getValue("A1")), parseInt(getValue("A2")), parseInt(getValue("A3")), parseInt(getValue("A4")));
    
    //排序由大到小
    for(var k=0; k<cointype.length-1; k++)
    {
        for(var j=0; j<cointype.length-1; j++)
        {
            if(cointype[j+1]>cointype[j])
            cointype[j]=cointype[j+1];
        }
    }

    var get_table = document.getElementById("list");
    var out_count=document.getElementById("out_count");
    get_table.border = "10";
    get_table.innerHTML = "<tr><td>組合/硬幣</td><td align='center'>" + cointype[0] + "</td><td align='center'>" + cointype[1] + "</td><td align='center'>" + cointype[2] + "</td><td align='center'>" + cointype[3] + "</td></tr></table>";
    //var getallstring = ""; //2種幣值使用

    var MAX_A = Math.floor(coinsum / cointype[0]); //各幣值能拿到的最多硬幣數
    var MAX_B = Math.floor(coinsum / cointype[1]);
    var MAX_C = Math.floor(coinsum / cointype[2]);
    var MAX_D = Math.floor(coinsum / cointype[3]);
    
    var count=0;
    

//視覺性作法但是會跑很久
for (var a=0; a<=MAX_A; a++)
{
    //await sleep (); //迴圈跑太久網頁會當掉
    for(var b=0; b<=MAX_B; b++)
    {
        for(var c=0; c<=MAX_C; c++)
        {
            for(var d=0; d<=MAX_D; d++)
            {
                if (cointype[0] * a + cointype[1] * b + cointype[2] * c + cointype[3] * d == coinsum)
                {
                    sleep(); //迴圈跑太久網頁會當掉處理
                    count++;
                    out_count.innerHTML="<h2>總組合數:"+count+"組</h2>";
                    get_table.innerHTML+= "<tr><td>"+ count +"</td><td align='center'>" + a + "</td><td align='center'>" + b + "</td><td align='center'>" + c + "</td><td align='center'>" + d + "</td></tr></table>";                    
                }
            }
        }
    }
} 


/*
    //只用兩種幣值組合
    for (var a=0; a<=MAX_A; a++)
    {
        for(var b=0; b<=MAX_B; b++)
        {
            //if (cointype[0] * a + cointype[1] * b + cointype[2] * 0 + cointype[3] * 0 == coinsum)
            if (cointype[0] * a + cointype[1] * b == coinsum)
            {
                //getallstring+= cointype[0]+"="+a+"|"+ cointype[1]+"="+b+"|"+cointype[2]+"="+c+"|"+cointype[0]+"="+d+"|";
                //getallstring+= cointype[0]+"="+a+"|"+ cointype[1]+"="+b;
                get_table.innerHTML+= "<tr><td>組合/硬幣</td><td align='center'>" + a + "</td><td align='center'>" + b + "</td><td align='center'>" + "</td><td align='center'>" + "</td></tr></table>";
            }
        }
        //alert(getallstring);
    }
*/

}