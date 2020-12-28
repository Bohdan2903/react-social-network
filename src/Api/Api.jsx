import axios from "axios";
import React from "react";


const instance = axios.create({
         withCredentials: true,
         baseURL: 'https://social-network.samuraijs.com/api/1.0/',
         headers: {
             'API-KEY': '128615c5-bfff-411c-a976-d72515da088e'
         }
});

export const usersAPI = {
    getUsers (currentPage= 1, pageSize= 10)  {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`,
        ).then(response =>{
            return response.data;
        });

    }
}
export const followAPI = {
    getFollow(follow= false, userid = 1)  {
        if(follow){
            return instance.delete( `follow/${userid}`).then(response =>{
                return response.data;
            });
        } else {
            return instance.post( `follow/${userid}`).then(response =>{
                return response.data;
            });
        }
    }
}
