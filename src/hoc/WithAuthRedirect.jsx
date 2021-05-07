
import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth){
                console.log(this.props.isAuth)
                return  <Redirect to={'/login'} />
            }
            return <Component {...this.props} />
        }
    }
    let ConnectedRedirectComponent =  connect(mapStateToPropsRedirect)(RedirectComponent)
    return ConnectedRedirectComponent;
}