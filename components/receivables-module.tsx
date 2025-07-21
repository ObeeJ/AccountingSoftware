"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Mail, Phone } from "lucide-react"

export default function ReceivablesModule() {
  const receivablesData = [
    {
      id: "INV-001",
      customer: "Dangote Group",
      invoiceDate: "2025-01-15",
      dueDate: "2025-02-14",
      originalAmount: "₦2,500,000.00",
      outstanding: "₦0.00",
      daysOverdue: 0,
      status: "Paid",
    },
    {
      id: "INV-002",
      customer: "First Bank Nigeria",
      invoiceDate: "2025-01-14",
      dueDate: "2025-02-13",
      originalAmount: "₦1,750,000.00",
      outstanding: "₦1,750,000.00",
      daysOverdue: 0,
      status: "Current",
    },
    {
      id: "INV-003",
      customer: "MTN Nigeria",
      invoiceDate: "2024-12-13",
      dueDate: "2025-01-12",
      originalAmount: "₦3,200,000.00",
      outstanding: "₦3,200,000.00",
      daysOverdue: 18,
      status: "Overdue",
    },
    {
      id: "INV-004",
      customer: "Zenith Bank",
      invoiceDate: "2025-01-10",
      dueDate: "2025-02-09",
      originalAmount: "₦950,000.00",
      outstanding: "₦950,000.00",
      daysOverdue: 0,
      status: "Current",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Current":
        return "bg-blue-100 text-blue-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Receivables</h1>
        <p className="text-gray-600 text-sm">Track outstanding customer invoices and manage collections.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Outstanding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₦5,900,000.00</div>
            <p className="text-xs text-gray-500 mt-1">All receivables</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Current (0-30 days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦2,700,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Not yet due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">1-30 Days Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">₦3,200,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Recently overdue</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">31-60 Days Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">₦0.00</div>
            <p className="text-xs text-gray-500 mt-1">Moderate risk</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">60+ Days Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₦0.00</div>
            <p className="text-xs text-gray-500 mt-1">High risk</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search customers..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="current">Current</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Mail className="w-4 h-4 mr-2" />
            Send Reminders
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Record Payment
          </Button>
        </div>
      </div>

      {/* Receivables Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-600 hover:bg-green-600">
              <TableHead className="text-white font-medium">Invoice #</TableHead>
              <TableHead className="text-white font-medium">Customer</TableHead>
              <TableHead className="text-white font-medium">Invoice Date</TableHead>
              <TableHead className="text-white font-medium">Due Date</TableHead>
              <TableHead className="text-white font-medium">Original Amount</TableHead>
              <TableHead className="text-white font-medium">Outstanding</TableHead>
              <TableHead className="text-white font-medium">Days Overdue</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {receivablesData.map((receivable, index) => (
              <TableRow key={receivable.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{receivable.id}</TableCell>
                <TableCell className="text-gray-900">{receivable.customer}</TableCell>
                <TableCell className="text-gray-600">{receivable.invoiceDate}</TableCell>
                <TableCell className="text-gray-600">{receivable.dueDate}</TableCell>
                <TableCell className="font-medium text-gray-900">{receivable.originalAmount}</TableCell>
                <TableCell className="font-medium text-gray-900">{receivable.outstanding}</TableCell>
                <TableCell className="text-gray-600">
                  {receivable.daysOverdue > 0 ? (
                    <span className="text-red-600 font-medium">{receivable.daysOverdue}</span>
                  ) : (
                    <span>-</span>
                  )}
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(receivable.status)}`}>
                    {receivable.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-gray-600 mt-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="bg-green-600 text-white border-green-600 hover:bg-green-700">
            First
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
            1
          </Button>
          <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
            Last
          </Button>
        </div>
        <div>Displaying 1 - 4 of 4</div>
      </div>
    </div>
  )
}
