import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login({ users, userInLogged }) {

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//  יצרתי סטייטים לשני האינפוטים שיכילו את מה שמוכנס לאינפוט. בתחילה שניהם מוגדרים כמחרוזת ריקה 
    const [inputName, setInputName] = useState('');
    const [inputPass, setInputPass] = useState('');

// יצרתי סטייט חדש למשתמש לפי הנתונים כדי להכניס אליו את הנתונים שהוכנסו באינפוט
    const [user, setUser] = useState({})
    console.log(users)

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------


//פונקציה אשם מקבלת אלמנט מהאינפוט כשמתבצע שינוי. יצרתי משתנה מקומי כדי להכיל את הערך הנוכחי שהוכנס לאינפוט
// כדי לא לחכות לרינדור שיתבצע רק כאשר הפונקציה תסיים את הריצה שלה
// לאחר מכן עדכנתי את הסטייט של השם והכנסתי לתוכו את המשתנה המקומי 
    const changeUserName = e => {
        let un = e.target.value;
        setInputName(un);
    }

//פונקציה אשם מקבלת אלמנט מהאינפוט כשמתבצע שינוי. יצרתי משתנה מקומי כדי להכיל את הערך הנוכחי שהוכנס לאינפוט
// כדי לא לחכות לרינדור שיתבצע רק כאשר הפונקציה תסיים את הריצה שלה
// לאחר מכן עדכנתי את הסטייט של הסיסמא והכנסתי לתוכו את המשתנה המקומי 
    const changePassword = e => {
        let up = e.target.value;
        setInputPass(up);
    }

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה אשם מקבלת אירוע. הפונקציה תרוץ כאשר יש לחיצה על הלינק. 
// בתחילה הפונקציה תעבור על מערך המשתמשים ותבדוק האם השם שהוכנס והסיסמא שהוכנסה קיימים במערך המשתמשים
// אם כן- מעדכנת את הסטייט של המשמתמש המקומי, ומעדכנת את מערך המשתמשים בעזרת קריאה לפונקציה מ-אפ שמשנה את 
// האם מחובר של משתמש ספציפי. במקרה הזה, של עמוד ההתחברות היא משנה אותו ל-אמת
// לאחר מכן יוצא מהפונקציה כי אנחנו לא רוצים להמשיך בה
// אם אחד השם או הסיסמא לא קיימים במערך המשתמשים- חוסם את הלינק בעזרת איבנט, ומציג שגיאה.
    const checkLogInDetails = (event) => {
        debugger;
        for (let i = 0; i < users.length; i++) {
            if (users[i].userName === inputName && users[i].password === inputPass) {
                setUser(users[i])
                userInLogged({
                    userName: users[i].userName,
                    password: users[i].password,
                    isLoggedIn: true
                })
                return;
            }

        }
        event.preventDefault()
        alert('Error!')
    }
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------


    return (
        <div>
            <h3>log in</h3>
            <form>
                <label>insert you user name:</label><br />
                <input onChange={changeUserName}></input>
                <br />
                <label>insert your password</label><br />
                <input type='password' onChange={changePassword}></input>
                <br /><br />

                <Link to='/' onClick={checkLogInDetails}><button>log in</button></Link>



            </form>

        </div>
    )
}
