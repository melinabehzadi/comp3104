import React, { useState } from 'react';

function App() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [major, setMajor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && age && major) {
            const newStudent = { name, age, major };
            setStudents([...students, newStudent]);
            setName('');
            setAge('');
            setMajor('');
        }
    };

    return (
        <div className="App">
            <h1>Student Information System</h1>
            <h3>Developed By: 101447858 || Melina Behzadi Nejad || DevOps</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Major:</label>
                    <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
                </div>
                <button type="submit">Add Student</button>
            </form>

            <h2>Student List</h2>
            {students.length === 0 ? (
                <p>No students added yet</p>
            ) : (
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.name} - Age: {student.age}, Major: {student.major}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
