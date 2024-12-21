const sayilarListe= [ 
{
    sayi:6    
},
{
    sayi:12
},
{
    sayi:10
},
{
    sayi:8
}
];

function sayininKaresi(){
    const sayi= sayilarListe.map((sayilarListe)=> sayilarListe.sayi);
    for (let index = 0; index < sayi.length; index++) {
        const sayiKaresi = sayi[index]*sayi[index];
        console.log(sayiKaresi);
        
        
    }
    
}
sayininKaresi();
