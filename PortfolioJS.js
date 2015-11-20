document.addEventListener('DOMContentLoaded',draw,false);
function draw(){
//function draw(){
var hC=document.getElementById("c");
hC.style.position="absolute";
        var con=hC.getContext("2d");
    z();

function z(){
    window.addEventListener('resize',size(),false);
        size();
}

        function re(){
            con.strokeStyle='blue';
            con.lineWidth="5";
            con.strokeRect(0,0,window.innerWidth,window.innerHeight);
        }
        function size(){
hC.width=window.innerWidth;
hC.height=window.innerHeight;
re();
}
//}
};
