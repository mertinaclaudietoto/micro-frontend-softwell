import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CardCalendar () {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 21)); // Jan 21, 2025
  const [selectedDate, setSelectedDate] = useState(21);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const days = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
        isToday: i === 21 && month === 0, // Jan 21
        hasEvent: [10, 12, 20, 21, 22].includes(i)
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    return days;
  };

  const getDayStyle = (dayInfo) => {
    if (!dayInfo.isCurrentMonth) {
      return 'text-gray-300';
    }
    
    if (dayInfo.day === 10 || dayInfo.day === 12) {
      return 'bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium';
    }
    
    if (dayInfo.day === 20) {
      return 'bg-red-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-medium';
    }
    
    if (dayInfo.day === 21) {
      return 'bg-yellow-400 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center font-medium';
    }
    
    if (dayInfo.day === 22) {
      return 'text-red-500 font-medium';
    }
    
    return 'text-gray-700 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center';
  };

  const days = getDaysInMonth(currentDate);

  const events = [
    {
      id: 1,
      title: 'Award Show Discussion',
      time: '09:00 AM - 10:00 AM',
      color: 'teal',
      icon: '🎬',
      startHour: 9,
      duration: 1
    },
    {
      id: 2,
      title: 'New Branding work Ave',
      time: '11:00 AM - 12:30 PM',
      color: 'yellow',
      icon: '💡',
      startHour: 11,
      duration: 1.5
    },
    {
      id: 3,
      title: 'Development Discussion',
      time: '12:00 PM - 03:30 AM',
      color: 'red',
      icon: '🎤',
      startHour: 12,
      duration: 1.5
    }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', 
    '10:30', '11:00', '11:30', '12:00', '12:30'
  ];

  return (
    <div className="w-full max-w-md    h-max">
      {/* Calendar Header */}
      <div className="bg-white p-6 border-b-1 border-gray-200 ">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Jan, 21 <span className="font-normal text-gray-600">Tuesday</span>
            </h2>
          </div>
        <div class="flex gap-2">
            <button class="iconerond10">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            <button class="iconerond10indigo">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((dayInfo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 relative"
            >
              <button
                className={getDayStyle(dayInfo)}
                onClick={() => dayInfo.isCurrentMonth && setSelectedDate(dayInfo.day)}
              >
                {dayInfo.day}
              </button>
              {dayInfo.hasEvent && dayInfo.day !== 10 && dayInfo.day !== 12 && dayInfo.day !== 20 && dayInfo.day !== 21 && (
                <div className="absolute bottom-1 w-1 h-1 bg-red-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Schedule Section */}
      <div className="p-6 space-y-4  overflow-y-auto">
        {timeSlots.map((time, index) => {
          const hour = parseInt(time.split(':')[0]);
          const event = events.find(e => e.startHour === hour);
          
          return (
            <div key={time} className="relative">
              <div className="text-xs text-gray-400 mb-2">{time}</div>
              
              {event && (
                <div className={`
                  ml-12 p-4 rounded-2xl shadow-md relative
                  ${event.color === 'teal' ? 'bg-teal-50 border-l-4 border-teal-600' : ''}
                  ${event.color === 'yellow' ? 'bg-yellow-50 border-l-4 border-yellow-400' : ''}
                  ${event.color === 'red' ? 'bg-red-50 border-l-4 border-red-400' : ''}
                `}>
                  <div className="absolute -left-16 top-1/2 -translate-y-1/2">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center shadow-md
                      ${event.color === 'teal' ? 'bg-teal-600' : ''}
                      ${event.color === 'yellow' ? 'bg-yellow-400' : ''}
                      ${event.color === 'red' ? 'bg-red-400' : ''}
                    `}>
                      <span className="text-lg">{event.icon}</span>
                    </div>
                  </div>
                  
                  <h3 className={`
                    font-semibold mb-1
                    ${event.color === 'teal' ? 'text-teal-900' : ''}
                    ${event.color === 'yellow' ? 'text-yellow-900' : ''}
                    ${event.color === 'red' ? 'text-red-900' : ''}
                  `}>
                    {event.title}
                  </h3>
                  <p className={`
                    text-xs
                    ${event.color === 'teal' ? 'text-teal-700' : ''}
                    ${event.color === 'yellow' ? 'text-yellow-700' : ''}
                    ${event.color === 'red' ? 'text-red-700' : ''}
                  `}>
                    {event.time}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

