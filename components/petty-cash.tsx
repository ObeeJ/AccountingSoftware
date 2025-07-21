"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Minus, Eye } from "lucide-react"

export default function PettyCash() {
  const pettyCashTransactions = [
    {
      id: "PC-001",
      date: "2025-01-15",
      description: "Office Supplies - Stationery",
      category: "Office Expenses",
      amount: "₦15,000.00",
      type: "Expense",
      balance: "₦35,000.00",
      receipt: "Yes",
    },
    {
      id: "PC-002",
      date: "2025-01-14",
      description: "Transportation - Taxi Fare",
      category: "Travel & Transport",
      amount: "₦8,500.00",
      type: "Expense",
      balance: "₦50,000.00",
      receipt: "Yes",
    },
    {
      id: "PC-003",
      date: "2025-01-13",
      description: "Petty Cash Replenishment",
      category: "Cash Transfer",
      amount: "₦25,000.00",
      type: "Replenishment",
      balance: "₦58,500.00",
      receipt: "N/A",
    },
    {
      id: "PC-004",
      date: "2025-01-12",
      description: "Refreshments - Staff Meeting",
      category: "Entertainment",
      amount: "₦12,000.00",
      type: "Expense",
      balance: "₦33,500.00",
      receipt: "Yes",
    },
    {
      id: "PC-005",
      date: "2025-01-11",
      description: "Cleaning Supplies",
      category: "Office Expenses",
      amount: "₦7,500.00",
      type: "Expense",
      balance: "₦45,500.00",
      receipt: "Yes",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Expense":
        return "bg-red-100 text-red-800"
      case "Replenishment":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Petty Cash Management</h1>
        <p className="text-gray-600 text-sm">Track petty cash transactions and maintain proper documentation.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦35,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Available cash</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">This Month Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">₦43,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Total spent</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Replenishments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₦25,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">18</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search transactions..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="expense">Expenses</SelectItem>
              <SelectItem value="replenishment">Replenishments</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Replenish
          </Button>
          <Button className="bg-green-500 hover:bg-green-600">
            <Minus className="w-4 h-4 mr-2" />
            New Expense
          </Button>
        </div>
      </div>

      {/* Petty Cash Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Transaction #</TableHead>
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Description</TableHead>
              <TableHead className="text-white font-medium">Category</TableHead>
              <TableHead className="text-white font-medium">Amount</TableHead>
              <TableHead className="text-white font-medium">Type</TableHead>
              <TableHead className="text-white font-medium">Balance</TableHead>
              <TableHead className="text-white font-medium">Receipt</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pettyCashTransactions.map((transaction, index) => (
              <TableRow key={transaction.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{transaction.id}</TableCell>
                <TableCell className="text-gray-600">{transaction.date}</TableCell>
                <TableCell className="text-gray-900">{transaction.description}</TableCell>
                <TableCell className="text-gray-600">{transaction.category}</TableCell>
                <TableCell className="font-medium text-gray-900">{transaction.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(transaction.type)}`}>
                    {transaction.type}
                  </span>
                </TableCell>
                <TableCell className="font-medium text-gray-900">{transaction.balance}</TableCell>
                <TableCell className="text-gray-600">{transaction.receipt}</TableCell>
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
