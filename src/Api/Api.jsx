import axios from "axios";
import React from "react";


const instance = axios.create({
         withCredentials: true,
         baseURL: 'https://social-network.samuraijs.com/api/1.0/',
         headers: {
             'API-KEY': '9627d395-d6dc-40fb-b44d-d3c921770a44'
         }
});

export const usersAPI = {
    getUsers (currentPage= 1, pageSize= 10)  {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`,
        ).then(response =>{
            return response.data;
        });

    },
    follow(userid = 1)  {
        return instance.post( `follow/${userid}`).then(response =>{
                return response.data;
            });
    },
    unfollow(userid = 1){
        return instance.delete( `follow/${userid}`).then(response =>{
            return response.data;
        });
    },
    getProfile(userId = 2){
        return instance.get( `profile/${userId} `).then(response =>{
            return response.data;
        });
    }
};
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    }
};