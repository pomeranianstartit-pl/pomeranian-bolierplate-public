import React from 'react';

export function IfExercise() {
    let age = 18;
    let hasDriverLicense = true;
    let hasCar = true;
    let string = "abcdef"
    function canDrive(age,licene,car){
    }
    function longStr(string){
        let length = string.length;
        if (length >= 10){
            return "jestem długim str"
        }
        else {
            return "jestem kruciutki"
        }
    }
    function circle(r){
        let pole= (r**2) * Math.PI
        return pole;
    }
    function degree(number){
        switch (number){
            case(1):return "jedne";
            case(2):return "dwa";
            case(3):return "trzy";
            case(4):return "cztery";
            case(5):return "pięć";
            case(6):return "sześć";
            default:return "złe wjeście";
        }
    }
    function max(jedne,dwa,trzy){
        let tablica = [jedne, dwa, trzy];
        let maxi=tablica[0]
        for (let i=1; i <= tablica.length; i++){
            if (tablica[i]>maxi){maxi = tablica[i];}
        }
        return maxi; 
    }
    return(<>
        <p>{longStr(string)}</p>
        <p>{circle(3)}</p>
        <p>{degree(3)}</p>
        <p>{max(4,7,6)}</p>
        </>);
}; 