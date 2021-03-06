import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

export default function Home({users,loggedIn,titleUser,setTitleUser,products}) {

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// סטייט של מערך מוצרים חדש. המערך הוא פיזור של מערך המוצרים המקורי.
// יצרתי אותו כדי שרק המערך יתרנדר מחדש ולא כל האתר עם כל שינוי שיחול במערך בהמשך
    const [pForSale,setPForSale]=useState([...products]);
 
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
 
// פונצירה שתרוץ כאשר יש לחיצה על כפתור הפלוס. הפונצקיה מקבלת מוצר ספציפי שנבחר על ידי משתמש.
// בודקת האם ברוכים הבאים זה אורח,כלומר, האם המשתמש מחובר למערכת. אם כן- לא ממשיכה.
//  אם יש משתמש מחובר למערכת. יצרתי משתנה זמני שיכיל את המוצר. לאחר מכן שיניתי את שדה הלמכירה של המשתנה הזמני ל-שקר
// לאחר מכן הגדרתי משתנה שיהיה האינדקס של המוצר שהשם שלו שווה לשם המוצר שהתקבל במערך המוצרים המקומי.
//שיניתי את במוצר באינדקס המתאים בהתאם למוצר שהתקבל. לבסוף עשיתי סט למערך המקורי ופיזרתי אותו עם השינויים בתוכו.
// התוצאה משנה כמובן גם את המערך המקורי שעכשיו המוצר שנבחר שנמצא בו, הוא לא למכירה יותר.
 const plusButton=(p)=>{
    debugger;
if (titleUser==='guest'){
    return;
}
    let temp=p;
    temp.forSale=false;
    let pIndex=pForSale.findIndex(pro=>pro.name===p.name);
    pForSale[pIndex].forSale=p.forSale;
    setPForSale([...pForSale])
    
 }
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
       
// תנאי שבודק האם הברוכים הבאים שונה מאורח, כלומר האם יש משתמש אשר מחובר למערכת.
// אם כן- תעבור על מערך המשתמשים ותבדוק, אם יש משתמש מחובר תשנה את הברוכים הבאים לשם המשתמש של המשתמש שמחובר
// כרגע עדיין לא ברור העניין
      if (titleUser!=='guest'){
      for (let i=0;i<users.length;i++){
        if (users[i].isLoggedIn===true){
          setTitleUser=users[i].userName;
        }
    }
      }
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// חשוב לשים לב איך עשיתי את המאפ. כל הג'אווהסקריפט בתוך מסולסליים מההתחלה ועד הסוף, חשוב לזכור זאת להמשך!
    return (
        <div>
           <h2> welcome {titleUser}</h2>
           <br/>
           
        {pForSale.map((p)=>{
        if(p.forSale===true){
        return (
<div style={{border:'1px solid black' ,width:'300px',marginLeft:'390px',borderRadius:'3px',marginTop:'10px'}}>
    <div>
{'neme:'+p.name}
{'   price:'+p.price}
</div>
<div style={{paddingLeft:'200px'}}>
<button onClick={()=>plusButton(p)} style={{marginLeft:'40px',backgroundColor:'navy',color:'white'}}>+</button>
</div>
</div>

        )
    }})}
        </div>
    )
}
