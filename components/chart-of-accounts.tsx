"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Edit, Trash2, Eye } from "lucide-react"

export default function ChartOfAccounts() {
  const accounts = [
    {
      code: "1000",
      name: "Cash at Bank",
      type: "Assets",
      category: "Current Assets",
      balance: "₦5,000,000.00",
      status: "Active",
    },
    {
      code: "1100",
      name: "Petty Cash",
      type: "Assets",
      category: "Current Assets",
      balance: "₦50,000.00",
      status: "Active",
    },
    {
      code: "1200",
      name: "Accounts Receivable",
      type: "Assets",
      category: "Current Assets",
      balance: "₦5,900,000.00",
      status: "Active",
    },
    {
      code: "1300",
      name: "Inventory",
      type: "Assets",
      category: "Current Assets",
      balance: "₦2,300,000.00",
      status: "Active",
    },
    {
      code: "1500",
      name: "Equipment",
      type: "Assets",
      category: "Fixed Assets",
      balance: "₦8,500,000.00",
      status: "Active",
    },
    {
      code: "2000",
      name: "Accounts Payable",
      type: "Liabilities",
      category: "Current Liabilities",
      balance: "₦3,600,000.00",
      status: "Active",
    },
    {
      code: "2100",
      name: "VAT Payable",
      type: "Liabilities",
      category: "Current Liabilities",
      balance: "₦450,000.00",
      status: "Active",
    },
    {
      code: "3000",
      name: "Share Capital",
      type: "Equity",
      category: "Equity",
      balance: "₦10,000,000.00",
      status: "Active",
    },
    {
      code: "4000",
      name: "Sales Revenue",
      type: "Revenue",
      category: "Operating Revenue",
      balance: "₦15,200,000.00",
      status: "Active",
    },
    {
      code: "5000",
      name: "Cost of Goods Sold",
      type: "Expenses",
      category: "Cost of Sales",
      balance: "₦8,500,000.00",
      status: "Active",
    },
    {
      code: "6000",
      name: "Operating Expenses",
      type: "Expenses",
      category: "Operating Expenses",
      balance: "₦2,800,000.00",
      status: "Active",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Assets":
        return "bg-blue-100 text-blue-800"
      case "Liabilities":
        return "bg-red-100 text-red-800"
      case "Equity":
        return "bg-purple-100 text-purple-800"
      case "Revenue":
        return "bg-green-100 text-green-800"
      case "Expenses":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Chart of Accounts</h1>
        <p className="text-gray-600 text-sm">Manage your company's account structure and view account balances.</p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search accounts..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="assets">Assets</SelectItem>
              <SelectItem value="liabilities">Liabilities</SelectItem>
              <SelectItem value="equity">Equity</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="expenses">Expenses</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="w-4 h-4 mr-2" />
          New Account
        </Button>
      </div>

      {/* Accounts Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Account Code</TableHead>
              <TableHead className="text-white font-medium">Account Name</TableHead>
              <TableHead className="text-white font-medium">Type</TableHead>
              <TableHead className="text-white font-medium">Category</TableHead>
              <TableHead className="text-white font-medium">Balance</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account, index) => (
              <TableRow key={account.code} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{account.code}</TableCell>
                <TableCell className="text-gray-900">{account.name}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(account.type)}`}>
                    {account.type}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">{account.category}</TableCell>
                <TableCell className="font-medium text-gray-900">{account.balance}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {account.status}
                  </span>
                </TableCell>
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
    </div>
  )
}
