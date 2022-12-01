canv= document.getElementById("canvas")
ctx =canv.getContext('2d');
var z = 3/1000;
ctx.translate(300,300)
var x=1
function zmianaprd()
{
    var z = document.getElementById("speed")/100;
}

function animate(canvas, context) {
    //console.log("a");
    //context.clearRect(0, 0, innerWidth, innerHeight);
    generateb12()
    x += 2//0.0001;
    
    requestAnimationFrame(function() {
        animate(canvas, context);
    });
}

//var app = new OilPainting();
//app.initialize();
animate(canvas, ctx);
function generateb12()
{
    
    ctx.rotate(0*(Math.PI/180));
    ctx.beginPath();
    ctx.arc(0,0,300,0,2*Math.PI,true)
    ctx.fillStyle="blue"
    ctx.fill()
    var xoff = 100;
    var yoff = 0;
    ctx.beginPath();
    ctx.strokeStyle="white"
    ctx.lineWidth=80
    spacing=120
    drawkurwe(ctx);
    size=30
    var points = [[200,-200],[40,-220],[80,-50]
    ];
    drawfilledshape(ctx,points,"white",0,00)
    ctx.rotate(spacing*(Math.PI/180));
    drawkurwe(ctx);
    drawfilledshape(ctx,points,"white",0,00)
    ctx.rotate(spacing*(Math.PI/180));
    drawkurwe(ctx);
    drawfilledshape(ctx,points,"white",0,00)
    ctx.rotate(-document.getElementById("speed").value/100)
    
}



function drawkurwe(ctx)
{
    ctx.beginPath();
    bezpoints=[[205, 56],[250 ,71],[262 , 147],[239, 182]]
    for (let i = 0; i < bezpoints.length; i++) {
        const point = bezpoints[i];
        point[0] += -240
        point[1] += -120
        
    }
    for (let i = 0; i < bezpoints.length; i++) {
        const point = bezpoints[i];
        point[0] *= 1.9
        point[1] *= 1.9
        
    }
    for (let i = 0; i < bezpoints.length; i++) {
        const point = bezpoints[i];
        point[0] += 180
        point[1] += -25
        
    }
    ctx.moveTo(bezpoints[0][0],bezpoints[0][1]);
    ctx.bezierCurveTo(bezpoints[1][0],bezpoints[1][1],bezpoints[2][0],
    bezpoints[2][1],bezpoints[3][0],bezpoints[3][1]);
    ctx.stroke()
}

function drawfilledshape(ctx,points,color,x,y)
{
    ctx.fillStyle = color;
    ctx.moveTo(points[0][0]+x,points[0][1]+y);
    ctx.beginPath();
    ctx.moveTo(points[0][0]+x,points[0][1]+y);
    for (let point = 1; point < points.length; point++) {
        const element = points[point];
        ctx.lineTo(element[0]+x,element[1]+y);
    }
    ctx.fill()
    return ctx
}
function drawshape(ctx,points,width,color,x,y)
{
    ctx.strokeStyle = color;
    ctx.lineWidth=width;
    ctx.moveTo(points[0][0]+x,points[0][1]+y);
    ctx.beginPath()
    for (let point = 0; point < points.length; point++) {
        const element = points[point];
        ctx.lineTo(element[0]+x,element[1]+y)
        ctx.stroke()
        
    }
    
    ctx.lineTo(points[0][0]+x,points[0][1]+y);
    ctx.stroke()
    ctx.lineTo(points[1][0]+x,points[1][1]+y);
    ctx.stroke()
    return ctx
}

function generateastar(inner,outer,res)
{
    var points=[]
    const spacing=2*Math.PI/res;
    for (let i = 0; i < res; i++) 
    {
        if (i%2==0) 
        {
            points.push([inner*Math.cos(spacing*i),inner*Math.sin(spacing*i)])
        }
        else
        {
            points.push([outer*Math.cos(spacing*i),outer*Math.sin(spacing*i)])
        }
        
    }
    return points
}