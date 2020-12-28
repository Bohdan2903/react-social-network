const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_PROGRESSING = 'FOLLOWING_PROGRESSING ';
let initialState = {
    users: [],
    pageSize: 20,
    totalUsers: 0,
    currentPage : 1,
    isFetching: false,
    followingProgressing: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return  {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return  {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsers: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case FOLLOWING_PROGRESSING:
            return {
                ...state,
                followingProgressing: action.isFetching ?
                    [...state.followingProgressing, action.userId]
                    : state.followingProgressing.filter(id=> id!== action.userId)

            }

        default: return state;
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    };
};

export const unfollow = ( userId) => {
    return {
        type: UNFOLLOW,
        userId
    };
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    };
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    };
};
export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount
    };
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    };
};
export const toggleFollowingProgressing = (isFetching, userId) => {
    return {
        type: FOLLOWING_PROGRESSING,
        isFetching: isFetching,
        userId: userId
    };
};
export default usersReducer;