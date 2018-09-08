var array = [1,2,3,4,5,6,7];

var i,j,pivote,maximo=7,minimo = 1 , promedio,medio;
// Boolean n;
var tt,res;
var b = 5;


for(i=0; i<array.length; i++){
    for(j=0; j<array.length; j++){
        if(array[j] > array[j+1]){
            pivote = array[j];
            array[j] = array[j+1];
            array[j+1] = pivote;
        }
    }
}
for(i=0; i<array.length; i++){
    console.log(array[i])
    }
    for(i=0; i<array.length; i++){
        if(array[i] >maximo) {
            console.log("El numero mas alto es: "+array[i])
        }
    }
        for(i=0; i<array.length; i++){
        if(array[i] == minimo) {
            console.log("El numero mas minimo es: "+array[i])
        }
    }			
    for(i=0; i<=array.length; i++) {
            
            if(array[i] == b){
                tt = true;
                res = array[i];
            }
        }
        if (tt) {
            console.log("Se ha encontrado el numero: "+res);
            document.body.style.backgroundColor="yellow";
        }
        else{
            console.log("No se han encontrado numero con: "+b)
            document.body.style.backgroundColor="red";
        }
        if(b < array[minimo] || b > array[maximo]){
            console.log("El numero no pudo ser encontrado");
        }
        else{
            while(minimo <= maximo){
            medio = (maximo + minimo) / 2;
            if(b == array[medio]){
                console.log("Se ha encontrado en el indice: "+medio);
                minimo = maximo + 1;
            }
            else{
                if(b < arrays[minimo]){
                    maximo = medio - 1;
                }
                else{
                    minimo = medio + 1;
                }
            }
        }
    }
        











