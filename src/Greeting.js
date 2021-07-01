/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// Login or singup code
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>;
}
function LoginControl(props) {
    const handleLoginClick = () => {
        console.log('Logged in');
    };

    const handleLogoutClick = () => {
        console.log('Logged out');
    };

    const isLoggedIn = props.isLoggedIn;
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />;
    } else {
        button = <LoginButton onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}
export default LoginControl;
