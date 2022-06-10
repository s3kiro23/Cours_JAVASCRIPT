function draw(){
    let canvas = document.getElementById('canvas');
    let x = Math.random () * 300;
    let y = Math.random () * 300;
    var rectPos = {left:10, top:10}
    var rectWidth = 50
    var rectHeight = 50
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
 
        ctx.fillStyle = 'rgb(200, 0, 0)';ù
        ctx.fillRect(rectPos.left, rectPos.top, rectWidth, rectHeight);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(100, 100, 50, 50);

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(60, 60, 20, 20);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(60, 60, 50, 50);

        ctx.beginPath();
        ctx.fillStyle ='rgba(0, 0, 200, 0.5)';
        ctx.arc(x,y,20,0,2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'rgb(0, 200, 0)'
        ctx.moveTo(200,250)
        ctx.lineTo(290,245)
        ctx.lineTo(275,225)
        ctx.fill();
    }

    canvas.addEventListener('click', function(e){
        let clickPos = {x:e.pageX-canvas.offsetLeft, y:e.pageY-canvas.offsetTop}
        console.log(clickPos.x, clickPos.y)
        if((clickPos.x>=rectPos.left) && (clickPos.x<=rectPos.rectWidth) && (clickPos.y>=rectPos.top) && (clickPos.y<=rectPos.rectHeight)){
            console.log('Formes trouvées!')
            ctx.clearRect(rectPos.left, rectPos.top, rectWidth, rectHeight);
            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect((rectPos.left+=10), rectPos.top, rectWidth, rectHeight);           
        }
    })
}