"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Eye, Download, CreditCard } from "lucide-react"

export default function Payments() {
  const payments = [
    {
      id: "PAY-001",
      date: "2025-01-15",
      payee: "Nigerian Breweries",
      amount: "₦1,200,000.00",
      method: "Bank Transfer",
      reference: "PUR-001",
      account: "First Bank - 3012345678",
      status: "Completed",
    },
    {
      id: "PAY-002",
      date: "2025-01-14",
      payee: "Office Rent - Landlord",
      amount: "₦500,000.00",
      method: "Cash",
      reference: "RENT-JAN",
      account: "Petty Cash",
      status: "Completed",
    },
    {
      id: "PAY-003",
      date: "2025-01-13",
      payee: "Electricity Bill - PHCN",
      amount: "₦85,000.00",
      method: "Online Transfer",
      reference: "UTIL-001",
      account: "GTBank - 0123456789",
      status: "Pending",
    },
    {
      id: "PAY-004",
      date: "2025-01-12",
      payee: "Staff Salaries",
      amount: "₦2,800,000.00",
      method: "Bank Transfer",
      reference: "SAL-JAN",
      account: "Zenith Bank - 1234567890",
      status: "Completed",
    },
    {
      id: "PAY-005",
      date: "2025-01-11",
      payee: "Fuel Purchase",
      amount: "₦150,000.00",
      method: "Cash",
      reference: "FUEL-001",
      account: "Petty Cash",
      status: "Completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      case "Cancelled":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "Bank Transfer":
        return "bg-blue-100 text-blue-800"
      case "Cash":
        return "bg-green-100 text-green-800"
      case "Online Transfer":
        return "bg-purple-100 text-purple-800"
      case "Cheque":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payments</h1>
        <p className="text-gray-600 text-sm">Track and manage all outgoing payments to suppliers and vendors.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₦4,735,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦4,650,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Processed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">₦85,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">42</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search payments..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Methods</SelectItem>
              <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
              <SelectItem value="cash">Cash</SelectItem>
              <SelectItem value="online">Online Transfer</SelectItem>
              <SelectItem value="cheque">Cheque</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-green-500 hover:bg-green-600">
            <CreditCard className="w-4 h-4 mr-2" />
            New Payment
          </Button>
        </div>
      </div>

      {/* Payments Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Payment #</TableHead>
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Payee</TableHead>
              <TableHead className="text-white font-medium">Amount</TableHead>
              <TableHead className="text-white font-medium">Method</TableHead>
              <TableHead className="text-white font-medium">Reference</TableHead>
              <TableHead className="text-white font-medium">Account</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment, index) => (
              <TableRow key={payment.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{payment.id}</TableCell>
                <TableCell className="text-gray-600">{payment.date}</TableCell>
                <TableCell className="text-gray-900">{payment.payee}</TableCell>
                <TableCell className="font-medium text-gray-900">{payment.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(payment.method)}`}>
                    {payment.method}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">{payment.reference}</TableCell>
                <TableCell className="text-gray-600">{payment.account}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                    {payment.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
