import s from "./../Friends.module.css"

const Friends = ({name}) =>{
    return(
            <div>
                <div className={s.myCircle}></div>
                {name}
            </div>
    )

}
export default Friends