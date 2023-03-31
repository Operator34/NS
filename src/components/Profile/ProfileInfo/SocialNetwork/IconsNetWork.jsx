import React from "react";
import facebook from "../../../../assets/images/icons_social_network/icon-facebook.png"
import website from "../../../../assets/images/icons_social_network/icon-web.png"
import vk from "../../../../assets/images/icons_social_network/icon-vkontakte.png"
import twitter from "../../../../assets/images/icons_social_network/icon-twitter.png"
import instagram from "../../../../assets/images/icons_social_network/icon-instagram.png"
import youtube from "../../../../assets/images/icons_social_network/icon-youtube.png"
import github from "../../../../assets/images/icons_social_network/icon-github.png"

import s from "./style.module.css"
const IconsNetWork = ({ contacts}) => {
    const contactsNew = {...contacts}
    for (const key in contactsNew) {
        if (typeof contactsNew[key] != "string") {
            delete contactsNew[key]
        }
    }

    return (
        <>
        <div className={s.iconNetWork}>
                {Object.entries(contactsNew).map(elem => {
                    switch(elem[0]){
                        case "facebook":  return <a key={1} href={`https://${elem[1]}`}><img alt={"facebook"} src={facebook}/></a>
                        case "website" : return <a key={2} href={`https://${elem[1]}`}><img alt={"website"} src={website}/></a>
                        case "twitter" : return <a key={3} href={`https://${elem[1]}`}><img alt={"twitter"} src={twitter}/></a>
                        case "instagram" : return <a key={4} href={`https://${elem[1]}`}><img alt={"instagram"} src={instagram}/></a>
                        case "youtube" : return <a key={5} href={`https://${elem[1]}`}><img alt={"youtube"} src={youtube}/></a>
                        case "github" : return <a key={6} href={`https://${elem[1]}`}><img alt={"github"} src={github}/></a>
                        case "vk" : return <a key={7} href={`https://${elem[1]}`}><img alt={"vk"} src={vk}/></a>
                    }
                })}
            </div>
        </>
    )
}
export default IconsNetWork