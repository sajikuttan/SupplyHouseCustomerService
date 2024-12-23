
const ListSpecialHours = ({ specialHours }) => {
    return (
        <>
            <div>
                <h2>Special Hours</h2>
                <ul>
                    {specialHours.map((hours, index) => (
                        <li key={index}>
                            {hours.date}: {hours.opentime} - {hours.closeTime} ({hours.message})
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ListSpecialHours;