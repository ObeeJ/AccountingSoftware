"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Eye, Edit, Trash2, Send, Download } from "lucide-react"

export default function InvoicesModule() {
  const invoices = [
    {
      id: "INV-001",
      customer: "Dangote Group",
      date: "2025-01-15",
      dueDate: "2025-02-14",
      amount: "₦2,500,000.00",
      status: "Paid",
      type: "Sales Invoice",
    },
    {
      id: "INV-002",
      customer: "First Bank Nigeria",
      date: "2025-01-14",
      dueDate: "2025-02-13",
      amount: "₦1,750,000.00",
      status: "Sent",
      type: "Sales Invoice",
    },
    {
      id: "INV-003",
      customer: "MTN Nigeria",
      date: "2025-01-13",
      dueDate: "2025-02-12",
      amount: "₦3,200,000.00",
      status: "Overdue",
      type: "Sales Invoice",
    },
    {
      id: "INV-004",
      customer: "Zenith Bank",
      date: "2025-01-12",
      dueDate: "2025-02-11",
      amount: "₦950,000.00",
      status: "Draft",
      type: "Sales Invoice",
    },
    {
      id: "QUO-001",
      customer: "Access Bank",
      date: "2025-01-11",
      dueDate: "2025-01-25",
      amount: "₦1,200,000.00",
      status: "Pending",
      type: "Quote",
    },
    {
      id: "PRO-001",
      customer: "UBA Nigeria",
      date: "2025-01-10",
      dueDate: "2025-01-24",
      amount: "₦800,000.00",
      status: "Approved",
      type: "Proforma",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Sent":
        return "bg-blue-100 text-blue-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Approved":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Sales Invoice":
        return "bg-blue-100 text-blue-800"
      case "Quote":
        return "bg-orange-100 text-orange-800"
      case "Proforma":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">All Invoices</h1>
        <p className="text-gray-600 text-sm">Manage all your sales invoices, quotes, and proforma invoices.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">156</div>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">89</div>
            <p className="text-xs text-gray-500 mt-1">Completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">42</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">18</div>
            <p className="text-xs text-gray-500 mt-1">Past due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Draft</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">7</div>
            <p className="text-xs text-gray-500 mt-1">Not sent</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search invoices..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="invoice">Invoices</SelectItem>
              <SelectItem value="quote">Quotes</SelectItem>
              <SelectItem value="proforma">Proforma</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-status">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
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
            <Plus className="w-4 h-4 mr-2" />
            New Invoice
          </Button>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Invoice #</TableHead>
              <TableHead className="text-white font-medium">Customer</TableHead>
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Due Date</TableHead>
              <TableHead className="text-white font-medium">Amount</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Type</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={invoice.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{invoice.id}</TableCell>
                <TableCell className="text-gray-900">{invoice.customer}</TableCell>
                <TableCell className="text-gray-600">{invoice.date}</TableCell>
                <TableCell className="text-gray-600">{invoice.dueDate}</TableCell>
                <TableCell className="font-medium text-gray-900">{invoice.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(invoice.type)}`}>
                    {invoice.type}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Send className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
