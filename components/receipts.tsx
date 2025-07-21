"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Eye, Download, Receipt } from "lucide-react"

export default function Receipts() {
  const receipts = [
    {
      id: "REC-001",
      date: "2025-01-15",
      customer: "Dangote Group",
      amount: "₦2,500,000.00",
      method: "Bank Transfer",
      reference: "INV-001",
      account: "First Bank - 3012345678",
      status: "Cleared",
    },
    {
      id: "REC-002",
      date: "2025-01-14",
      customer: "MTN Nigeria",
      amount: "₦1,750,000.00",
      method: "Cheque",
      reference: "INV-002",
      account: "Zenith Bank - 1234567890",
      status: "Pending",
    },
    {
      id: "REC-003",
      date: "2025-01-13",
      customer: "First Bank Nigeria",
      amount: "₦950,000.00",
      method: "Cash",
      reference: "INV-003",
      account: "Cash Account",
      status: "Cleared",
    },
    {
      id: "REC-004",
      date: "2025-01-12",
      customer: "Zenith Bank",
      amount: "₦1,200,000.00",
      method: "Online Transfer",
      reference: "INV-004",
      account: "GTBank - 0123456789",
      status: "Cleared",
    },
    {
      id: "REC-005",
      date: "2025-01-11",
      customer: "Walk-in Customer",
      amount: "₦85,000.00",
      method: "Cash",
      reference: "CASH-001",
      account: "Cash Account",
      status: "Cleared",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Cleared":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Bounced":
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Receipts</h1>
        <p className="text-gray-600 text-sm">Track and manage all incoming payments from customers.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Receipts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦6,485,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cleared</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₦4,735,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Confirmed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">₦1,750,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting clearance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">38</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search receipts..." className="pl-10 w-64 border-gray-300" />
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
            <Receipt className="w-4 h-4 mr-2" />
            New Receipt
          </Button>
        </div>
      </div>

      {/* Receipts Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Receipt #</TableHead>
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Customer</TableHead>
              <TableHead className="text-white font-medium">Amount</TableHead>
              <TableHead className="text-white font-medium">Method</TableHead>
              <TableHead className="text-white font-medium">Reference</TableHead>
              <TableHead className="text-white font-medium">Account</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receipts.map((receipt, index) => (
              <TableRow key={receipt.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{receipt.id}</TableCell>
                <TableCell className="text-gray-600">{receipt.date}</TableCell>
                <TableCell className="text-gray-900">{receipt.customer}</TableCell>
                <TableCell className="font-medium text-gray-900">{receipt.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(receipt.method)}`}>
                    {receipt.method}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">{receipt.reference}</TableCell>
                <TableCell className="text-gray-600">{receipt.account}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(receipt.status)}`}>
                    {receipt.status}
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
