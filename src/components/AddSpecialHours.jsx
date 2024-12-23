import { useState } from "react";
import ListSpecialHours from "./ListSpecialHours";

const AddSpecialHours = () => {
    const [specialHours, setSpecialHours] = useState([
        { date: "2024-11-30", opentime: "10:00 AM", closeTime: "11:00 AM", message: "Internal Meeting" },
    ]);

    const [newSpecialHours, setNewSpecialHours] = useState({
        date: "",
        opentime: "",
        closeTime: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { date, opentime, closeTime, message } = newSpecialHours;
        if (opentime >= closeTime || closeTime < opentime) {
            alert("Time is not in valid range")
        } else {
            setSpecialHours([...specialHours, newSpecialHours]);
            setNewSpecialHours({ date: "", opentime: "", closeTime: "", message: "" });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={newSpecialHours.date}
                    onChange={(e) => setNewSpecialHours({ ...newSpecialHours, date: e.target.value })}
                    required
                    min={new Date().toISOString().split('T')[0]}
                />
                <input
                    type="time"
                    placeholder="Open Time"
                    value={newSpecialHours.hours}
                    onChange={(e) => setNewSpecialHours({ ...newSpecialHours, opentime: e.target.value })}
                    required
                />
                <input
                    type="time"
                    placeholder="Close Time"
                    value={newSpecialHours.hours}
                    onChange={(e) => setNewSpecialHours({ ...newSpecialHours, closeTime: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Message"
                    value={newSpecialHours.message}
                    onChange={(e) => setNewSpecialHours({ ...newSpecialHours, message: e.target.value })}
                    required
                />
                <button type="submit">Add</button>
            </form>
            {
                specialHours.length > 0 && (
                    <ListSpecialHours specialHours={specialHours} />
                )
            }
        </>
    );
}

export default AddSpecialHours;