"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Eye, Edit, Trash2 } from "lucide-react"

export default function PurchasesModule() {
  const purchasesData = [
    {
      id: "PUR-001",
      supplier: "Nigerian Breweries",
      date: "2025-01-15",
      dueDate: "2025-02-14",
      amount: "₦1,200,000.00",
      status: "Paid",
      type: "Invoice",
    },
    {
      id: "PUR-002",
      supplier: "Flour Mills Nigeria",
      date: "2025-01-14",
      dueDate: "2025-02-13",
      amount: "₦850,000.00",
      status: "Pending",
      type: "Invoice",
    },
    {
      id: "PUR-003",
      supplier: "Oando PLC",
      date: "2025-01-13",
      dueDate: "2025-02-12",
      amount: "₦2,100,000.00",
      status: "Overdue",
      type: "Invoice",
    },
    {
      id: "PO-001",
      supplier: "Nestle Nigeria",
      date: "2025-01-12",
      dueDate: "2025-01-26",
      amount: "₦650,000.00",
      status: "Draft",
      type: "Purchase Order",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Overdue":
        return "bg-red-100 text-red-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Purchases</h1>
        <p className="text-gray-600 text-sm">Manage your purchase transactions, supplier invoices, and payments.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₦4,800,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Outstanding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">₦2,950,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Pending payment</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₦2,100,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Past due date</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">12</div>
            <p className="text-xs text-gray-500 mt-1">Total purchases</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search purchases..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="w-4 h-4 mr-2" />
          New Purchase
        </Button>
      </div>

      {/* Purchases Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-600 hover:bg-green-600">
              <TableHead className="text-white font-medium">Reference #</TableHead>
              <TableHead className="text-white font-medium">Supplier</TableHead>
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Due Date</TableHead>
              <TableHead className="text-white font-medium">Amount</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Type</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchasesData.map((purchase, index) => (
              <TableRow key={purchase.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{purchase.id}</TableCell>
                <TableCell className="text-gray-900">{purchase.supplier}</TableCell>
                <TableCell className="text-gray-600">{purchase.date}</TableCell>
                <TableCell className="text-gray-600">{purchase.dueDate}</TableCell>
                <TableCell className="font-medium text-gray-900">{purchase.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(purchase.status)}`}>
                    {purchase.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">{purchase.type}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
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
