import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { ChevronLeft, ChevronRight, AlertCircle, CheckCircle, User, CreditCard } from 'lucide-react';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Statistique ()  {
  const [currentMonth, setCurrentMonth] = useState('January 2019');

  // Data for charts
  const weeklyData = [
    { day: 'M', value: 300 },
    { day: 'T', value: 450 },
    { day: 'W', value: 250 },
    { day: 'T', value: 500 },
    { day: 'F', value: 600 },
    { day: 'S', value: 550 },
    { day: 'S', value: 400 }
  ];

  const dailyActivityData = [
    { day: '7', value: 400, color: '#EF4444' },
    { day: '8', value: 250, color: '#EF4444' },
    { day: '9', value: 730, color: '#3B82F6' },
    { day: '10', value: 600, color: '#EF4444' },
    { day: '11', value: 480, color: '#EF4444' }
  ];

  const timeSpentData = [
    { day: 'M', value: 3 },
    { day: 'T', value: 2 },
    { day: 'W', value: 4 },
    { day: 'T', value: 3.5 },
    { day: 'F', value: 2 },
    { day: 'S', value: 4.5 },
    { day: 'S', value: 5 }
  ];

  const performanceData = [
    { day: 'Mon 11', value: 78 },
    { day: 'Tue 12', value: 72 },
    { day: 'Wed 13', value: 76 },
    { day: 'Thu 14', value: 82 },
    { day: 'Fri 15', value: 80 },
    { day: 'Sat 16', value: 75 }
  ];

  const expenseData = [
    { day: '7', value: 35 },
    { day: '8', value: 42 },
    { day: '9', value: 28 },
    { day: '10', value: 38 },
    { day: '11', value: 45 }
  ];

  const weeklyOverviewData = [
    { day: 'M', value: 25 },
    { day: 'T', value: 30 },
    { day: 'W', value: 28 },
    { day: 'T', value: 32 },
    { day: 'F', value: 35 },
    { day: 'S', value: 28 },
    { day: 'S', value: 48 }
  ];

  const financialData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 42 },
    { month: 'Apr', value: 38 },
    { month: 'May', value: 35 },
    { month: 'Jun', value: 48 }
  ];

  const interruptionsData = [
    { day: '7', s1: 40, s2: 30 },
    { day: '8', s1: 35, s2: 45 },
    { day: '9', s1: 25, s2: 20 },
    { day: '10', s1: 50, s2: 10 },
    { day: '11', s1: 60, s2: 5 }
  ];

  const voiceData = [
    { day: '10', value: 72 },
    { day: '11', value: 68 },
    { day: '12', value: 65 },
    { day: '13', value: 70 },
    { day: '14', value: 68 },
    { day: '15', value: 69 },
    { day: '16', value: 66 }
  ];

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 12, color = '#EF4444', label, sublabel }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#FEE"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="text-center -mt-20">
          <div className="text-3xl font-bold text-gray-800">{percentage}</div>
          {label && <div className="text-sm text-gray-600 mt-1">{label}</div>}
          {sublabel && <div className="text-xs text-gray-500">{sublabel}</div>}
        </div>
      </div>
    );
  };

  const SpeedometerGauge = ({ value, max = 100 }) => {
    const percentage = (value / max) * 180;
    
    return (
      <div className="relative w-48 h-24">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="#FEE"
            strokeWidth="8"
          />
          {/* Progress arc */}
          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="#EF4444"
            strokeWidth="8"
            strokeDasharray={`${percentage * 1.4} 1000`}
            strokeLinecap="round"
          />
          {/* Tick marks */}
          {[...Array(11)].map((_, i) => {
            const angle = -180 + (i * 18);
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + 75 * Math.cos(rad);
            const y1 = 90 + 75 * Math.sin(rad);
            const x2 = 100 + 70 * Math.cos(rad);
            const y2 = 90 + 70 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#EF4444"
                strokeWidth="2"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-8">
          <div className="text-3xl font-bold text-gray-800">{value}</div>
          <div className="text-xs text-gray-500">Excellent</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='flex'>
          <Sidebar/>
          <main className='flex-1'>
            <div className="min-h-screen  p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Card 1: Daily Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <button className="p-2 hover:bg-gray-100 rounded"><ChevronLeft size={20} /></button>
                  <span className="font-semibold">{currentMonth}</span>
                  <button className="p-2 hover:bg-gray-100 rounded"><ChevronRight size={20} /></button>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={dailyActivityData}>
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {dailyActivityData.map((entry, index) => (
                        <Bar key={index} dataKey="value" fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Today</span>
                    <span className="font-semibold">345 Wt</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Highest</span>
                    <span className="font-semibold">730 Wt</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Average</span>
                    <span className="font-semibold">495 Wt</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Weekly Overview */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800">Weekly Overview</h3>
                  <p className="text-xs text-gray-500">Mon 1 - May 7</p>
                  <p className="text-xs text-red-500">100 Likes</p>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={weeklyData}>
                    <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 bg-red-50 rounded-lg p-3 flex items-start gap-2">
                  <AlertCircle size={16} className="text-red-500 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800">You are doing good!</p>
                    <p className="text-xs text-gray-600">You almost reached your target</p>
                  </div>
                </div>
              </div>

              {/* Card 3: Time Spent */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-2">4h 35m <span className="text-red-500 text-sm">▲</span></h3>
                <p className="text-xs text-gray-500 mb-4">Average time spent on "h" per day</p>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={timeSpentData}>
                    <Bar dataKey="value" fill="#93C5FD" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 pt-4 border-t flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Set Daily Reminder</p>
                    <p className="text-xs text-gray-500">Remind after you cross any limit</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Card 4: Overall Performance */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Overall Performance</h3>
                <div className="grid grid-cols-6 gap-2 text-xs text-center mb-2">
                  <div><div className="text-gray-500">Mon</div><div>11</div></div>
                  <div><div className="text-gray-500">Tue</div><div>12</div></div>
                  <div><div className="text-gray-500">Wed</div><div>19</div></div>
                  <div><div className="text-gray-500">Thu</div><div>14</div></div>
                  <div><div className="text-gray-500">Fri</div><div>15</div></div>
                  <div><div className="text-gray-500">Sat</div><div>16</div></div>
                </div>
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FCA5A5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FCA5A5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#EF4444" fillOpacity={1} fill="url(#colorPerf)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex justify-between mt-4 text-sm">
                  <div>
                    <p className="text-gray-600">Today</p>
                    <p className="font-semibold">$78.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600">Best</p>
                    <p className="font-semibold">$95.00</p>
                  </div>
                </div>
              </div>

              {/* Card 5: Merit Score */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
                <h3 className="font-semibold text-gray-800 mb-4 self-start">Merit Score</h3>
                <CircularProgress percentage={42} size={140} strokeWidth={16} />
                <p className="text-xs text-gray-500 text-center mt-4 mb-4">Here are some of the tricks to improve your score</p>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200">
                  Details
                </button>
              </div>

              {/* Card 6: Weekly Expense */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="text-red-500" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Average Weekly Expense is <span className="font-bold">$43.0</span></p>
                  </div>
                </div>
                <div className="flex items-end justify-between h-40 gap-2">
                  {expenseData.map((item, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-red-500 rounded-t-lg" style={{ height: `${item.value * 2}px` }}></div>
                      <span className="text-xs mt-2 text-gray-600">{item.day}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  Average
                </button>
              </div>

              {/* Card 7: Weekly Overview 2 */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800">Weekly Overview</h3>
                  <p className="text-xs text-gray-500">40 Views</p>
                  <p className="text-xs text-red-500">Sunday - May 12th</p>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={weeklyOverviewData}>
                    <Bar dataKey="value" fill="#FCA5A5" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                    <YAxis axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-800">40%</div>
                  <p className="text-xs text-gray-500">Your sales performance is 40% better than the last month</p>
                </div>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  Details
                </button>
              </div>

              {/* Card 8: Process Steps */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-4">2 Steps Left in the Process</h3>
                <CircularProgress percentage={50} size={140} strokeWidth={16} label="" sublabel="" />
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-sm text-gray-700">Email Verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                    <span className="text-sm text-gray-400">Add Profile Photo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                    <span className="text-sm text-gray-400">Link Bank Account</span>
                  </div>
                </div>
              </div>

              {/* Card 9: Channels */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-gray-800">Channels</h3>
                  <select className="text-xs text-red-500 border-none">
                    <option>Viewers</option>
                  </select>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'ZEE', sub: 'Zee Network', value: '5.6L', trend: 'up' },
                    { name: 'STAR', sub: 'Star Network', value: '7.2L', trend: 'up' },
                    { name: 'NDTV', sub: 'Ndtv Network', value: '4.3L', trend: 'down' }
                  ].map((channel, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{channel.name}</p>
                        <p className="text-xs text-gray-500">{channel.sub}</p>
                      </div>
                      <div className="w-16 h-8">
                        <svg viewBox="0 0 50 20" className="w-full h-full">
                          <polyline
                            points="0,15 10,10 20,12 30,8 40,10 50,7"
                            fill="none"
                            stroke="#EF4444"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold text-sm ml-4">{channel.value}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  Today
                </button>
              </div>

              {/* Card 10: Threshold Value */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
                <h3 className="font-semibold text-gray-800 mb-2 self-start">Threshold Value</h3>
                <p className="text-xs text-gray-500 mb-4 self-start">Here is the peak value for the server alert</p>
                <CircularProgress percentage={45} size={140} strokeWidth={16} />
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  Details
                </button>
              </div>

              {/* Card 11: Interruptions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-2">6780 <span className="text-xs font-normal">(Interruptions)</span></h3>
                <div className="flex gap-3 mb-4 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Sensor 1</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Sensor 2</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={interruptionsData}>
                    <Bar dataKey="s1" fill="#EF4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="s2" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                  </BarChart>
                </ResponsiveContainer>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  View Details
                </button>
              </div>

              {/* Card 12: Weekly Overview 3 */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-800">Weekly Overview</h3>
                  <p className="text-xs text-gray-500">20 Views</p>
                  <p className="text-xs text-red-500">Monday - May 12th</p>
                </div>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={weeklyOverviewData}>
                    <Bar dataKey="value" fill="#FCA5A5" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                  </BarChart>
                </ResponsiveContainer>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  Average
                </button>
              </div>

              {/* Card 13: Financial Performance */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-4">Financial Performance</h3>
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={financialData}>
                    <Bar dataKey="value" fill="#EF4444" radius={[4, 4, 0, 0]} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: '10px' }} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-800">40%</div>
                  <p className="text-xs text-gray-500">Your sales performance is 40% better than the last month</p>
                </div>
                <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-200 mt-4">
                  Details
                </button>
              </div>

              {/* Card 14: Average Voice */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Average voice</h3>
                <div className="text-3xl font-bold text-gray-800 mb-4">68.5k</div>
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={voiceData}>
                    <defs>
                      <linearGradient id="colorVoice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FCA5A5" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#FCA5A5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#EF4444" fillOpacity={1} fill="url(#colorVoice)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div>
                    <p className="text-xs font-semibold text-gray-800">Set Reminder</p>
                    <p className="text-xs text-gray-500">Reminder on when I reach the target</p>
                  </div>
                  <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Card 15: Almost There */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    {[...Array(40)].map((_, i) => {
                      const angle = (i * 9) - 90;
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 70 + 60 * Math.cos(rad);
                      const y1 = 70 + 60 * Math.sin(rad);
                      const x2 = 70 + 55 * Math.cos(rad);
                      const y2 = 70 + 55 * Math.sin(rad);
                      const isActive = i < 32;
                      return (
                        <line
                          key={i}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          stroke={isActive ? '#EF4444' : '#FEE'}
                          strokeWidth="3"
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="text-red-500" size={32} />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-800">Almost There</h3>
                <p className="text-xs text-gray-500 text-center mt-2">Here are some tips to improve your kit score</p>
              </div>

              {/* Card 16: Monthly Interruptions */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
                <h3 className="font-semibold text-gray-800 mb-4 self-start">Monthly Interruptions 9890</h3>
                <CircularProgress percentage={85} size={160} strokeWidth={20} />
              </div>

              {/* Card 17: Overall Sensor Performance */}
              <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center">
                <h3 className="font-semibold text-gray-800 mb-4 self-start">Overall Sensor Performance</h3>
                <div className="relative">
                  <CircularProgress percentage={75} size={160} strokeWidth={20} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="text-red-500" size={32} />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </main>
      </div>
    </>)
}