import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Edit({addProduct}) {


//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//יצרתי סטייט של מוצר. בהתחלה השדות ריקים ו-האם למכירה זה כן! כי כשנוסיף אותו נרצה שיופיע מייד בעמוד הבית כמוצר למכירה
const [pro,setPro]=useState({
    name:'',
    price:0,
    forSale:true
});

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה שמקבלת אלמנט מהאינפוט של השם. יצרתי משתנה מקומי של שם כדי להכיל את מה שהוקלד באינפוט באותו הרגע 
// בלי לחכות לרינדור מחדש שיקרה רק כאשר הפונקציה תסיים את הריצה שלה
// לאחר מכן עשיתי סט לאובייקט המוצר החדש. השם הוא השם שהוכנס והשאר הם מה שהיו מקודם
const changeName=e=>{
let pName=e.target.value;
setPro({
    name:pName,
    price:pro.price,
    forSale:pro.forSale
})
}

// פונקציה שמקבלת אלמנט מהאינפוט של הסיסמא. יצרתי משתנה מקומי של סיסמא כדי להכיל את מה שהוקלד באינפוט באותו הרגע 
// בלי לחכות לרינדור מחדש שיקרה רק כאשר הפונקציה תסיים את הריצה שלה
// לאחר מכן עשיתי סט לאובייקט המוצר החדש. הסיסמא היא הסיסמא שהוכנסה והשאר הם מה שהיו מקודם
const changePrice=e=>{
    let pPrice=e.target.value;
    setPro({
        name:pro.name,
        price:pPrice,
        forSale:pro.forSale
    })
    }

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//פונקציה להוספת מוצר ומקבלת ארגומנט "איבנט" בשביל ההמשך
// הפונקציה תרוץ כאשר יש אירוע לחיצה על הלינק. לאחר מכן תבדוק את שם המוצר, אם לא נכתב כלום אז הלינק נחסם ולא נעבור לעמוד הבית
//בנוסף תוצג הודעת שגיאה והפונקציה לא תרוץ יותר.
// אם הכל בסדר עם השם אז הפונקציה תקרא לפונקציה מ-אפ ותשלח אלייה את אובייקט המוצר החדש. הפונקציה תוסיפ את המוצר שהתקבל למערך המוצרים
    const addP = ( event) => {
        debugger;
        if (pro.userName===''){
            event.preventDefault();
            alert('Error') 
            return
        }
        addProduct(pro)       
    }
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------



    return (
        <div>
            <form>
<label>product name:</label><br/>
<input onChange={e=>changeName(e)}></input><br/><br/>

<label>product price:</label><br/>
<input onChange={e=>changePrice(e)}></input>
<br/><br/>

<Link to='/' onClick={addP} ><button>add</button></Link>


            </form>
            
        </div>
    )
}
