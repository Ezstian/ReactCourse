type UserProps={
    isLoggedIn: boolean;
    username: string;
};

function UserGreetings(props: UserProps) {

    const welcomeMessage = <h2 className="welcome-message">
                                      Hello {props.username}
                                     </h2>
    const loginPrompt = <h2 className="login-prompt">
                                Log in to continue
                                </h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt );
}

export default UserGreetings;