import React from "react";

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://webmg.ru/wp-content/uploads/2022/11/i-25-52-2048x1365.jpeg' alt='card'></img>
            </div>
            <div className='avatar'>
                <img src='https://cs6.pikabu.ru/avatars/1785/x1785044-1840373740.png' alt='avatar'/>
            </div>
            <div>
                My post
                <div>
                    <input></input>
                </div>
            </div>
            <div>
                <div>post1</div>
                <div>post2</div>
                <div>post3</div>
            </div>
        </div>
    )
}

export default Profile