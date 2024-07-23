// protect the home page 

import { useEffect } from "react";
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"


const RequireAuth = ({user, children}) => {
    const navigate = useNavigate();
    useEffect(() => { 
        if (!user) { 
            navigate("/", {replace: true});
            return ;
        }
    }, [user])
    return children;
}

const mapStateToprops = (state) => { 
    return  { 
        user: state.userState.user ,
    }
}

export default connect(mapStateToprops)(RequireAuth)