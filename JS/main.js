function random()
{
    let x0, x1, k;
    let c1=[];
    k=Number(document.querySelector('#k').value);
    x0=document.querySelector('#x0').value;
    x1=document.querySelector('#x1').value;
    n=document.querySelector('#n').value;
    document.querySelector('#randout').innerHTML = "";
    if (String(x0).length!=String(x1).length || String(x0).length!=2*k|| String(x1).length!=2*k) {
        alert('k= '+String(k)+" !");
        return 0;
    }
    for (i=0; i<n; i++) {
        C= x0*x1;
        c1[i]=Math.floor((C-Math.floor(C/Math.pow(10,k*3))*Math.pow(10, k*3))/Math.pow(10, k));
        document.querySelector('#randout').innerHTML+=" "+String(c1[i]);
        x0=x1;
        x1=c1[i];
    }  
    //9044
    return c1;
}

function frequency_test(data)
{
    N = 200;
    p = 0.1;
    p2 = 0.01;
    let w_data = [];
    for (let i = 0; i < 10; i++) {
        w_data.push([]);
        for (let j = 0; j < 10; j++) {
            w_data[i][j] = [data[i*10+j], data[i*10+j*2]];
            while (w_data[i][j][0] > 10) {
                w_data[i][j][0] = parseInt(w_data[i][j][0]/10)
            }
            while (w_data[i][j][1] > 10) {
                w_data[i][j][1] = parseInt(w_data[i][j][1]/10)
            }
        }
    }

    wi_data = [];
    for (let i = 0; i < 10; i++) {
        wi_data[i] = 0;
        for (let j = 0; j < 10; j++) {
            if(w_data[i][j][0]==i){
                wi_data[i]++;
            }
        }
    }

    wj_data = [];
    for (let j = 0; j < 10; j++) {
        wj_data[j] = 0;
        for (let i = 0; i < 10; i++) {
            if(w_data[i][j][1]==j){
                wj_data[i]++;
            } 
        }
    }

    let wij_data = [];
    for (let i = 0; i < 10; i++) {
        wij_data[i] = wi_data[i] + wj_data[i];
    }
    console.log(wij_data)

    let xi2_1 = 0;
    for (let i = 0; i < 10; i++) {
        xi2_1 += Math.pow(wi_data[i] - p * N, 2);
    }
    xi2_1 = xi2_1 / (p * N);
    document.querySelector(".test1").innerHTML = xi2_1
    return xi2_1
}

function indep_test_0(r, data)
{
    for (let i = 0; i < data.length; i++) {
        while (data[i] > 10) {
            data[i] = parseInt(data[i] / 10);
        }
    }
    let w1_data = 0;
    let w2_data = 0;
    let w3_data = 0;
    for (let i = 0; i < data.length; i++) {
        w1_data += (data[i] - 0.5) * (data[i] + r - 0.5);
        w2_data += Math.pow(data[i] - 0.5, 2);
        w3_data += Math.pow(data[i] + r - 0.5, 2);
    }
    let w_data = w1_data / Math.sqrt(w2_data * w3_data);


    return w_data
}

function indep_test_1(data)
{
    N = data.length
    for (let i = 0; i < data.length; i++) {
        while (data[i] > 10) {
            data[i] = parseInt(data[i] / 10);
        }
    }
    let w1_data = 0;
    let w2_data = 0;
    let w3_data = 0;
    let w4_data = 0;
    for (let i = 0; i < data.length; i++) {
        w1_data += (i + 1) * data[i];
        w2_data += data[i] * (N + 1) / 2;
        w3_data += Math.pow(data[i], 2);
        w4_data += data[i];
    }
    let w_data = (1 / N * w1_data - 1 / N * w2_data) / Math.sqrt((1 / N * w3_data - 1 / N * w4_data) * (Math.pow(N, 2) - 1) / 12);
    console.log(w_data);
    let otvet = 35 * (1 - Math.pow(w_data, 2)) / Math.sqrt(N);
    document.querySelector(".test2").innerHTML = otvet
    return otvet
}

let data
document.querySelector('input[type=button]').addEventListener('click', ()=>{
    data = random()
})

document.querySelector('button').addEventListener('click', ()=>{
    xi2 = frequency_test(data)
    otvet = indep_test_1(data)
})





