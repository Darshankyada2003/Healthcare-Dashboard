import "../styles/Dashboard.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaTooth, FaLungs, FaUserDoctor, FaHeart } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faBone, faThermometer, faEye, faPersonWalking } from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import humanAntomy from "../assets/image/human-antomy.png";

const statusCards = [
    { title: "Lungs", icon: <FaLungs style={{ color: "#e21212", width: '20px' }} />, date: "26 Oct 2021", progress: 40, color: "#ef4444" },
    { title: "Teeth", icon: <FontAwesomeIcon icon={faTooth} style={{ color: 'rgb(211 208 208)', width: '20px' }} />, date: "26 Oct 2021", progress: 90, color: "#10b981" },
    { title: "Bone", icon: <FontAwesomeIcon icon={faBone} rotation={150} style={{ color: "#d1d5dc", width: '20px' }} />, date: "26 Oct 2021", progress: 30, color: "#f97316" },
];

const schedule = [
    {
        day: "On Thursday",
        events: [
            {
                title: "Health checkup complete", time: "11:00 AM", icon: <FontAwesomeIcon icon={faThermometer} style={{ color: "#d38d9b", }} />
            },
            { title: "Ophthalmologist", time: "14:00 PM", icon: <FontAwesomeIcon icon={faEye} style={{ color: "#505358", }} /> },
        ],
    },
    {
        day: "On Saturday",
        events: [
            { title: "Cardiologist", time: "12:00 AM", icon: <FaHeart style={{ color: "#ef0606" }} /> },
            { title: "Neurologist", time: "16:00 PM", icon: <FaUserDoctor /> },
        ],
    },
];

const activityData = [
    { day: "Mon", appointments: 1 },
    { day: "Tue", appointments: 0 },
    { day: "Wed", appointments: 2 },
    { day: "Thu", appointments: 3 },
    { day: "Fri", appointments: 1 },
    { day: "Sat", appointments: 1 },
    { day: "Sun", appointments: 0 },
];

const Dashboard = () => {
    const [date, setDate] = useState(new Date("2021-10-26"));

    const appointmentsToday = [
        {
            title: "Dentist",
            time: "09:00-11:00",
            doctor: "Dr. Cameron Williamson",
            icon: <FaTooth />,
            bgColor: "#4338ca",
            textColor: "white",
            date: "2021-10-26",
        },
        {
            title: "Physiotherapy",
            time: "11:00-12:00",
            doctor: "Dr. Kevin Djones",
            icon: <FontAwesomeIcon icon={faPersonWalking} style={{ color: '#bbb4bb' }} />,
            bgColor: "#e0e7ff",
            textColor: "#1e3a8a",
            date: "2021-10-26",
        },
    ];

    const totalAppointments = activityData.reduce((acc, curr) => acc + curr.appointments, 0);

    return (
        <div className="dashboard-wrapper">
            <h3 className="dashboard-heading">Dashboard</h3>
            <div className="dashboard">
                {/* LEFT PANEL */}
                <div className="dashboard-left">
                    <div className="dashboard-top">
                        <div className="human-column">
                            <div className="human-box">
                                <img
                                    src={humanAntomy}
                                    alt="Human Anatomy"
                                    loading="lazy"
                                />
                                <div className="tag heart"> <FaHeart style={{ color: "#ef0606" }} /> Healthy Heart</div>
                                <div className="tag leg"><FontAwesomeIcon icon={faPersonWalking} style={{ color: '#bbb4bb' }} /> Healthy Leg</div>
                            </div>
                        </div>
                        <div className="status-column">
                            {statusCards.map((item, i) => (
                                <div className="status-card" key={i}>
                                    <div className="status-header">
                                        <div className="icon">{item.icon}</div>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <p>Date: {item.date}</p>
                                    <div className="progress-bar">
                                        <div
                                            className="progress"
                                            style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="activity-chart">
                        <h3>Activity</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={activityData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Bar
                                    dataKey="appointments"
                                    fill="#6366f1"
                                    radius={[10, 10, 0, 0]}
                                    barSize={35}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                        <p>{totalAppointments} appointments this week</p>
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div className="dashboard-right">
                    <div className="calendar-box">
                        <h4>October 2021</h4>
                        <div className="calendar-center">
                            <Calendar onChange={setDate} value={date} />
                        </div>
                        <p>
                            {/* <strong>Selected:</strong> {date.toDateString()} */}
                        </p>

                        <div className="appointment-list">
                            <h4 className="appointment-title">Appointments</h4>
                            {appointmentsToday.length ? (
                                <div className="appointment-grid">
                                    {appointmentsToday.map((appt, i) => (
                                        <div
                                            className={`appointment-card ${appt.textColor === 'white' ? 'dark' : ''}`}
                                            key={i}
                                            style={{ backgroundColor: appt.bgColor, color: appt.textColor }}
                                        >
                                            <div className="appointment-info">
                                                <div className="appt-row">
                                                    <h4 className="appt-title">{appt.title}</h4>
                                                    <div className="appointment-icon">{appt.icon}</div>
                                                </div>
                                                <p className="appt-time">{appt.time}</p>
                                                <p className="appt-doctor">{appt.doctor}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-appt">No appointments on this date.</p>
                            )}
                        </div>
                    </div>

                    <div className="schedule-section">
                        <h3>The Upcoming Schedule</h3>
                        {schedule.map((day, i) => (
                            <div key={i} className="schedule-day-block">
                                <h5>{day.day}</h5>
                                <div className="schedule-event-grid">
                                    {day.events.map((event, j) => (
                                        <div key={j} className="event-box">
                                            <div className="event-info">
                                                <h4>{event.title}</h4>
                                                <p>{event.time}</p>
                                            </div>
                                            <div className="event-icon">{event.icon}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
