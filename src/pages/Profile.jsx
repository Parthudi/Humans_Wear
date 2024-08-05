import React from "react";
import UserDashboard from "../components/UserDashboard";

const Profile = React.memo(() => {

    return(
       <UserDashboard>
            <h6> MY PROFILE </h6>
       </UserDashboard>
    )
});

export default Profile;