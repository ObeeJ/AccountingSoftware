"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, Download } from "lucide-react"

export default function GeneralLedger() {
  const ledgerEntries = [
    {
      date: "2025-01-15",
      reference: "INV-001",
      description: "Sales Invoice - Dangote Group",
      account: "1200 - Accounts Receivable",
      debit: "₦2,500,000.00",
      credit: "",
      balance: "₦2,500,000.00",
    },
    {
      date: "2025-01-15",
      reference: "INV-001",
      description: "Sales Invoice - Dangote Group",
      account: "4000 - Sales Revenue",
      debit: "",
      credit: "₦2,500,000.00",
      balance: "₦2,500,000.00",
    },
    {
      date: "2025-01-14",
      reference: "PUR-001",
      description: "Purchase - Nigerian Breweries",
      account: "5000 - Cost of Goods Sold",
      debit: "₦1,200,000.00",
      credit: "",
      balance: "₦1,200,000.00",
    },
    {
      date: "2025-01-14",
      reference: "PUR-001",
      description: "Purchase - Nigerian Breweries",
      account: "2000 - Accounts Payable",
      debit: "",
      credit: "₦1,200,000.00",
      balance: "₦1,200,000.00",
    },
    {
      date: "2025-01-13",
      reference: "PAY-001",
      description: "Payment to Supplier",
      account: "1000 - Cash at Bank",
      debit: "",
      credit: "₦500,000.00",
      balance: "₦4,500,000.00",
    },
    {
      date: "2025-01-13",
      reference: "PAY-001",
      description: "Payment to Supplier",
      account: "2000 - Accounts Payable",
      debit: "₦500,000.00",
      credit: "",
      balance: "₦700,000.00",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">General Ledger</h1>
        <p className="text-gray-600 text-sm">
          View all accounting transactions and account balances in chronological order.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Debits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">₦4,200,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦4,200,000.00</div>
            <p className="text-xs text-gray-500 mt-1">This period</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Trial Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₦0.00</div>
            <p className="text-xs text-gray-500 mt-1">Balanced</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">156</div>
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
            <SelectTrigger className="w-40 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Accounts</SelectItem>
              <SelectItem value="assets">Assets</SelectItem>
              <SelectItem value="liabilities">Liabilities</SelectItem>
              <SelectItem value="equity">Equity</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="expenses">Expenses</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <Button className="bg-green-600 hover:bg-green-700">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Ledger Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-600 hover:bg-green-600">
              <TableHead className="text-white font-medium">Date</TableHead>
              <TableHead className="text-white font-medium">Reference</TableHead>
              <TableHead className="text-white font-medium">Description</TableHead>
              <TableHead className="text-white font-medium">Account</TableHead>
              <TableHead className="text-white font-medium">Debit</TableHead>
              <TableHead className="text-white font-medium">Credit</TableHead>
              <TableHead className="text-white font-medium">Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ledgerEntries.map((entry, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="text-gray-600">{entry.date}</TableCell>
                <TableCell className="font-medium text-gray-900">{entry.reference}</TableCell>
                <TableCell className="text-gray-900">{entry.description}</TableCell>
                <TableCell className="text-gray-600">{entry.account}</TableCell>
                <TableCell className="font-medium text-blue-600">{entry.debit}</TableCell>
                <TableCell className="font-medium text-green-600">{entry.credit}</TableCell>
                <TableCell className="font-medium text-gray-900">{entry.balance}</TableCell>
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
        <div>Displaying 1 - 6 of 156</div>
      </div>
    </div>
  )
}
