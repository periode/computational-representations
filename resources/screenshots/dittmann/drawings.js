function draw() {
const canvas1 = document.getElementById('drawing-1');
const canvas2 = document.getElementById('drawing-2');

    const ctx1 = canvas1.getContext('2d');
    const ctx2 = canvas2.getContext('2d');

    draw1(ctx1);
    draw2(ctx2);
}

function draw1(ctx) {
    /*
    ctx.fillStyle = 'red';
    ctx.rect(10, 10, 100, 200);
    ctx.fill();
    */

    const points = []
    for (let i = 0; i < 30; i++) {
        points.push({
            x: Math.random() * ctx.canvas.width,
            y: Math.random() * ctx.canvas.height
        });
    }

    ctx.fillStyle = '#808080';
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();

    for (const p1 of points) {
        const pointColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        ctx.fillStyle = pointColor;
        ctx.beginPath();
        ctx.ellipse(p1.x, p1.y, 4, 4, 0, 0, 2 * Math.PI);
        ctx.fill();
        for (const p2 of points.filter(p => p !== p1)) {
            const lineColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            ctx.strokeStyle = lineColor;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke()
        }
    }
}

function draw2(ctx) {
    ctx.fillStyle = '#808080';
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();

    const enough = 500;

    const maxSideLength = 400;
    const minSideLength = 100;

    const minX = -20;
    const minY = -20;
    const maxX = ctx.canvas.width + 20;
    const maxY = ctx.canvas.height + 20;

    for (let i = 0; i < enough; i++) {
        const x = Math.random() * (maxX - minX) + minX;
        const y = Math.random() * (maxY - minY) + minY;
        const w = Math.random() * (maxSideLength - minSideLength) + minSideLength;
        const h = Math.random() * (maxSideLength - minSideLength) + minSideLength;

        ctx.fillStyle = (i % 2) ? 'white' : 'black';
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
    }

    /*
    const count = 20 * 20;
    const colors = [];
    let i;
    for (i = 0; i < Math.floor(count / 2); i++) {
        colors.push('white');
    }
    for (; i < count; i++) {
        colors.push('black');
    }

    function pickRandom() {

    }

    const w = ctx.canvas.width / 20;
    const h = ctx.canvas.height / 20;
    for (let x = 0; x < ctx.canvas.width; x += w) {
        for (let y = 0; y < ctx.canvas.height; y += h) {
            ctx.fillColor = '';
            ctx.beginPath()
            ctx.rect(x, y, w, h);
            ctx.fill();
        }
    }
    */
}