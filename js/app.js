// 2. four digit a onk smy choto mane doi or tin digit o ashte pare tai condition diye check hocce
function getPin(){
    const pin=genaratePin();
    const pinString=pin+'';
    if(pinString.length===4){
        return pin;
    }
    else{
        // jodi 4 digit na hoy abr getPin function a phatano hoy jeno 4 digit er pin dey
        return getPin();
    }
}
// step1 ai dke 4 digit er number generate kora hocche
function genaratePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}
//  ai dke genaratePin button a event handelar jog kora hoise 
document.getElementById('generate-pin').addEventListener('click',function(){
    // ai dke 4 digit er pin nicche
    const pin=getPin();
    // ai dke jai dke amra pin ta dhekabo take newa hocce
    const displayPinField=document.getElementById('display-pin');
    // jeheto aida input value tai tar modde .value use kore pin ta diye dsi
    displayPinField.value=pin;
})
// ai dke calculator er fuction a event use kora hosie akta nirdisto jinish paite ar ta hocce target
document.getElementById('calculator').addEventListener('click',function(event){
    const number=event.target.innerText;
          // ai dke ja ja type korbo jai dke dheka jabe tar id nicchi
          const typeNumberField=document.getElementById('typed-numbers');
        //   ai jinish ta else a chilo upor a utaisi arro er kaj er jonno
         // ai dke jeheto akdik buttonn a press korbo tai akta previous type number variable nisi
         const previousTypeNumber=typeNumberField.value;
         

    if (isNaN(number)){
        if (number==='C'){
            typeNumberField.value='';

        }
        else if(number==='<'){
            // jeheto ai chinno diye amra last value tare katbo. ar number gula string akare ai ache .tai amra split kore dlam ai dke split ar join use korte sabdhan karon '' ai gula dte hobe jeheto akta akta kore bhag kortesi
            const digits=previousTypeNumber.split('')
            // akon digit pop kore dicchi mane last value ta chole jabe
            digits.pop();
            // jeheto aigula array er modde chilo sob gula jora lagate join use korci
            const remaingDigits =digits.join('');
            // ai dke jai dke amra value ta dhekabo tar modde remaing digits gula diye dicchi
            typeNumberField.value=remaingDigits;

        }
    }
    else{
  
       
        // notun tar modde puran plus jai number ta event handler theke ashtse tare conactinate kore dicce
        const newTypeNumber=previousTypeNumber+number;
        // value set kore dicche
        typeNumberField.value=newTypeNumber;
    }
    
})
document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField=document.getElementById('display-pin');
    const currentPin=displayPinField.value ;

    const typedNumberField=document.getElementById('typed-numbers');
    const typedNumber=typedNumberField.value;
    // ai dke doitar msg id diye newa hoise
    const pinSucsessMsg=document.getElementById('pin-sucsess');
    const pinWrongMsg=document.getElementById('pin-wrong');
    if (typedNumber===currentPin){
        // ai dke jodi pin ok thake right dhekane ar wrong none thakbe
        pinWrongMsg.style.display='none';
        pinSucsessMsg.style.display='block';

    }
    else{
        // ai dke if er ulta ta
        pinWrongMsg.style.display='block';
        pinSucsessMsg.style.display='none';
    }
})