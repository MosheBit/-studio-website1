import  { useState } from 'react';

const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // שלח את הנתונים ל-backend או עשה משהו עם הנתונים
        console.log({ name, date, time });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>שם:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>תאריך:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label>שעה:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            <button type="submit">שלח</button>
        </form>
    );
};

export default AppointmentForm;
