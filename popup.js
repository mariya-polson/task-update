function switchVisible(index){
document.getElementById('content1').style.display = 'none';
 document.getElementById('content2').style.display = 'none';
document.getElementById('content3').style.display = 'none';
document.getElementById('content4').style.display = 'none';
document.getElementById('content5').style.display = 'none';
if(index==1){
document.getElementById('content1').style.display = 'block';                            
            }
else if(index==2){
    document.getElementById('content2').style.display = 'block';
            }
else if(index==3){
    document.getElementById('content3').style.display = 'block';
            }
else if(index==4){
    document.getElementById('content4').style.display = 'block';
            }
else {
    document.getElementById('content5').style.display = 'block';
            }
                      
}
                  // function visible(){
                  //     document.getElementById('testimony1').style.display = 'none';
                  //     document.getElementById('testimony2').style.display = 'none';
                  //     document.getElementById('testimony3').style.display = 'none';
                  //     document.getElementById('testimony4').style.display = 'none';
                  //     document.getElementById('testimony5').style.display = 'none';
                  // }