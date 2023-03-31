import axios from "axios";
const baseURL = "https://social-network.samuraijs.com/api/1.0/"

const instance = axios.create({
    withCredentials:true,
    baseURL: baseURL,
    headers:{
        "API-KEY":"683839a5-e667-4b4e-9b5e-e1f997c3b2bd"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {    //вернется только data, без лишних данных
                return response.data
            })

    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        console.log("Obsolete method. Please profileApi object")
        return profileAPI.getProfile(userId)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status:status})
    }
}


export const authAPI = {
    me()  {
        return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`,{
            email:email,
            password:password,
            rememberMe: rememberMe
        })
            .then(response => {
                return response.data
            })
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data
            })
    }

}





