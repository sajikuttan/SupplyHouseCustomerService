import AddSpecialHours from "./AddSpecialHours";

const DisplayUsersHours = () => {
    return (
        <>
            <div>
                <h1>Customer Service Hours</h1>
                <h2>Default Hours</h2>
                <ul>
                    <li>Monday - Thursday: 8:00 AM - 7:45 PM</li>
                    <li>Friday: 9:00 AM - 7:45 PM</li>
                    <li>Saturday - Sunday: 9:00 AM - 5:45 PM</li>
                </ul>
            </div>
            <div>
                <AddSpecialHours />
            </div>
        </>
    );
}

export default DisplayUsersHours;