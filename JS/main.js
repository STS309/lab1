function random()
{
    let x0, x1, k;
    let c1=[];
    k=Number(document.querySelector('#k').value);
    x0=document.querySelector('#x0').value;
    x1=document.querySelector('#x1').value;
    n=document.querySelector('#n').value;
    document.querySelector('#randout').innerHTML = "";
    if (String(x0).length!=String(x1).length ) {
        alert('Числа неоднозначные');
        return 0;
    }
    for (i=0; i<n; i++) {
        C= x0*x1;
        c1[i]=Math.floor((C-Math.floor(C/Math.pow(10,k*3))*Math.pow(10, k*3))/Math.pow(10, k));
        document.querySelector('#randout').innerHTML+=" "+String(c1[i]);
        x0=x1;
        x1=c1[i];
        console.log(C, k, c1[i])
    }  
    //9044
}