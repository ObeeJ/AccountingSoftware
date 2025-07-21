"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, Eye, Download } from "lucide-react"

export default function BankLodgement() {
  const lodgements = [
    {
      id: "BL-001",
      date: "2025-01-15",
      bank: "First Bank Nigeria",
      accountNumber: "3012345678",
      amount: "₦2,500,000.00",
      reference: "Customer Payment - Dangote",
      type: "Customer Payment",
      status: "Cleared",
    },
    {
      id: "BL-002",
      date: "2025-01-14",
      bank: "Zenith Bank",
      accountNumber: "1234567890",
      amount: "₦1,200,000.00",
      reference: "Cash Sales Deposit",
      type: "Cash Sales",
      status: "Pending",
    },
    {
      id: "BL-003",
      date: "2025-01-13",
      bank: "GTBank",
      accountNumber: "0123456789",
      amount: "₦850,000.00",
      reference: "Invoice Payment - MTN",
      type: "Customer Payment",
      status: "Cleared",
    },
    {
      id: "BL-004",
      date: "2025-01-12",
      bank: "Access Bank",
      accountNumber: "0987654321",
      amount: "₦450,000.00",
      reference: "Miscellaneous Income",
      type: "Other Income",
      status: "Cleared",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Cleared":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Bank Lodgements</h1>
        <p className="text-gray-600 text-sm">Record and track all bank deposits and lodgements.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Lodgements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦5,000,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Cleared</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₦3,800,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Confirmed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">₦1,200,000.00</div>
            <p className="text-xs text-gray-500 mt-1">Awaiting clearance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">28</div>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search lodgements..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-32 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Banks</SelectItem>
              <SelectItem value="first-bank">First Bank</SelectItem>
              <SelectItem value="zenith">Zenith Bank</SelectItem>
              <SelectItem value="gtbank">GTBank</SelectItem>
              <SelectItem value="access">Access Bank</SelectItem>
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
            New Lodgement
          </Button>
        </div>
      </div>

      {/* Lodgements Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Lodgement #</TableHead>
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Bank</TableHead>
              <TableHead className="text-white font-medium">Account Number</TableHead>
              <TableHead className="text-white font-medium">Amount</TableHead>
              <TableHead className="text-white font-medium">Reference</TableHead>
              <TableHead className="text-white font-medium">Type</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lodgements.map((lodgement, index) => (
              <TableRow key={lodgement.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium text-gray-900">{lodgement.id}</TableCell>
                <TableCell className="text-gray-600">{lodgement.date}</TableCell>
                <TableCell className="text-gray-900">{lodgement.bank}</TableCell>
                <TableCell className="text-gray-600">{lodgement.accountNumber}</TableCell>
                <TableCell className="font-medium text-gray-900">{lodgement.amount}</TableCell>
                <TableCell className="text-gray-900">{lodgement.reference}</TableCell>
                <TableCell className="text-gray-600">{lodgement.type}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lodgement.status)}`}>
                    {lodgement.status}
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
