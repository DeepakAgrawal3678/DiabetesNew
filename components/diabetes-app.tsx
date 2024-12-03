'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Activity, Book, Droplet, Home, PieChart, PillIcon as Pills, User } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useRouter } from 'next/navigation'

const bloodSugarData = [
  { time: '6am', level: 120 },
  { time: '9am', level: 140 },
  { time: '12pm', level: 100 },
  { time: '3pm', level: 130 },
  { time: '6pm', level: 110 },
  { time: '9pm', level: 125 },
]

export function DiabetesAppComponent() {
  const router = useRouter();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4CAF50] text-white p-6">
        <h1 className="text-2xl font-bold mb-8">DiabetesApp</h1>
        <nav>
          <ul className="space-y-4">
            <li><a href="#" className="flex items-center space-x-2 hover:bg-[#45a049] p-2 rounded"><Home size={20} /><span>Dashboard</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 hover:bg-[#45a049] p-2 rounded"><Droplet size={20} /><span>Blood Sugar</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 hover:bg-[#45a049] p-2 rounded"><Pills size={20} /><span>Medication</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 hover:bg-[#45a049] p-2 rounded"><Activity size={20} /><span>Activity</span></a></li>
            <li><a href="#" className="flex items-center space-x-2 hover:bg-[#45a049] p-2 rounded"><Book size={20} /><span>Resources</span></a></li>
            <li>
              <a 
                onClick={() => router.push('/profile')} 
                className="flex items-center space-x-2 hover:bg-[#45a049] p-2 rounded cursor-pointer"
              >
                <User size={20} />
                <span>Profile</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white p-4 rounded-lg mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#4CAF50]">
              <PieChart className="mr-2 h-4 w-4" /> Reports
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-[#4CAF50]"
              onClick={() => router.push('/profile')}
            >
              <User className="mr-2 h-4 w-4" /> Profile
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blood Sugar Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Sugar</CardTitle>
              <Droplet className="h-4 w-4 text-[#4CAF50]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">120 mg/dL</div>
              <p className="text-xs text-muted-foreground">Last reading 30 min ago</p>
              <Button className="mt-4 bg-[#4CAF50] hover:bg-[#45a049]">Log Blood Sugar</Button>
            </CardContent>
          </Card>

          {/* Medication Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medication</CardTitle>
              <Pills className="h-4 w-4 text-[#FFC107]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 doses today</div>
              <p className="text-xs text-muted-foreground">Next dose in 2 hours</p>
              <Button className="mt-4 bg-[#FFC107] hover:bg-[#FFA000] text-black">View Schedule</Button>
            </CardContent>
          </Card>

          {/* Activity Card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activity</CardTitle>
              <Activity className="h-4 w-4 text-[#2196F3]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7,543 steps</div>
              <Progress value={75} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">75% of daily goal</p>
              <Button className="mt-4 bg-[#2196F3] hover:bg-[#1E88E5]">Log Activity</Button>
            </CardContent>
          </Card>
        </div>

        {/* Blood Sugar Chart */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Blood Sugar Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bloodSugarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="level" stroke="#4CAF50" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Educational Resources */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Educational Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#2196F3] hover:underline">Understanding Diabetes: A Comprehensive Guide</a></li>
              <li><a href="#" className="text-[#2196F3] hover:underline">Nutrition Tips for Diabetics</a></li>
              <li><a href="#" className="text-[#2196F3] hover:underline">Exercise and Diabetes Management</a></li>
              <li><a href="#" className="text-[#2196F3] hover:underline">Medication Adherence: Why It&apos;s Important</a></li>
            </ul>
            <Button className="mt-4 bg-[#4CAF50] hover:bg-[#45a049]">Explore More Resources</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}