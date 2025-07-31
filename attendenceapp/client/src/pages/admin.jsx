

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

// Table components will be built inline
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];



export default function UserManagementPage() {
  const [users, setUsers] = useState();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(() =>
    String(new Date().getMonth() + 1).padStart(2, "0")
  );
  const [selectedYear, setSelectedYear] = useState(() =>
    String(new Date().getFullYear())
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://mern-projects-production-c94e.up.railway.app/user", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
      

        setUsers(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchUsers();
  }, []);

  const availableYears = useMemo(() => {
    if (!selectedUser) return [];
    const years = new Set(
      selectedUser.attendanceHistoryArray?.map((r) =>
        new Date(r.date).getFullYear().toString()
      )
    );
    years.add(String(new Date().getFullYear()));
    return Array.from(years).sort((a, b) => b - a);
  }, [selectedUser]);

  const filteredHistory = useMemo(() => {
    if (!selectedUser) return [];
    return (
      selectedUser.attendanceHistory?.filter((record) => {
        const d = new Date(record.date);
        return (
          String(d.getMonth() + 1).padStart(2, "0") === selectedMonth &&
          d.getFullYear().toString() === selectedYear
        );
      }) || []
    );
  }, [selectedUser, selectedMonth, selectedYear]);

  return (
    <div className="min-h-screen bg-black p-4">
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader className="border-b border-gray-700">
          <CardTitle className="text-sky-400 text-2xl font-bold">
            User Management
          </CardTitle>
          <CardDescription className="text-gray-300">
            View and manage users with their attendance data.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex justify-between mb-6">
          
            
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-gray-800">
                  <th className="text-left p-4 text-sky-400 font-semibold">Name</th>
                  <th className="text-left p-4 text-sky-400 font-semibold">Role</th>
                  <th className="text-left p-4 text-sky-400 font-semibold">Email</th>
                  <th className="text-left p-4 text-sky-400 font-semibold">Phone</th>
                  <th className="text-left p-4 text-sky-400 font-semibold">Attendance</th>
                  <th className="text-left p-4 text-sky-400 font-semibold">Check-in Limit</th>
                  <th className="text-left p-4 text-sky-400 font-semibold">Admin</th>
                  <th className="text-right p-4 text-sky-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr 
                    key={user._id} 
                    className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    <td className="p-4 text-white font-medium">{user.name}</td>
                    <td className="p-4 text-gray-300">{user.role}</td>
                    <td className="p-4 text-gray-300">{user.email}</td>
                    <td className="p-4 text-gray-300">{user.phoneNumber}</td>
                    <td className="p-4 text-gray-300">{user.totalAttendance}%</td>
                    <td className="p-4 text-gray-300">{user.checkInLimit}%</td>
                    <td className={`p-4 ${user.isAdmin ? "text-sky-400 font-medium" : "text-gray-300"}`}>
                      {user.isAdmin ? "Yes" : "No"}
                    </td>
                    <td className="p-4 text-right">
                      <Button
                        size="sm"
                        className="bg-sky-600 hover:bg-sky-700 text-white"
                        onClick={() => {
                          setSelectedUser(user);
                          setDialogOpen(true);
                        }}
                      >
                        View Attendance
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Dialog for attendance history */}
      <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-4xl">
          <DialogHeader className="border-b border-gray-700 pb-4">
            <DialogTitle className="text-sky-400 text-xl font-bold">
              {selectedUser?.name}'s Attendance
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Filter by month and year to view attendance records.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex gap-4 mb-6 pt-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[150px] bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {months.map((m) => (
                  <SelectItem 
                    key={m.value} 
                    value={m.value}
                    className="text-white hover:bg-gray-700 focus:bg-gray-700"
                  >
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[100px] bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {availableYears.map((y) => (
                  <SelectItem 
                    key={y} 
                    value={y}
                    className="text-white hover:bg-gray-700 focus:bg-gray-700"
                  >
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {filteredHistory.length > 0 ? (
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-800">
                    <th className="text-left p-4 text-sky-400 font-semibold">Date</th>
                    <th className="text-left p-4 text-sky-400 font-semibold">Check-in</th>
                    <th className="text-left p-4 text-sky-400 font-semibold">Check-out</th>
                    <th className="text-left p-4 text-sky-400 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map((r, i) => (
                    <tr key={i} className="border-b border-gray-700 hover:bg-gray-700">
                      <td className="p-4 text-white">
                        {new Date(r.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </td>
                      <td className="p-4 text-gray-300">{r.checkInTime}</td>
                      <td className="p-4 text-gray-300">{r.checkOutTime}</td>
                      <td className={`p-4 ${
                        r.status === "Present" ? "text-green-400 font-medium" :
                        r.status === "Late" ? "text-yellow-400 font-medium" :
                        r.status === "Absent" ? "text-red-400 font-medium" :
                        "text-gray-300"
                      }`}>
                        {r.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400 text-lg">No records found for this selection.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}