"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, DollarSign, Users, FileText, AlertCircle, Plus, Eye } from "lucide-react"

export default function Dashboard() {
  const recentTransactions = [
    {
      id: "INV-001",
      type: "Sales Invoice",
      customer: "Dangote Group",
      amount: "₦2,500,000.00",
      status: "Paid",
      date: "2025-01-15",
    },
    {
      id: "PUR-001",
      type: "Purchase",
      customer: "Nigerian Breweries",
      amount: "₦1,200,000.00",
      status: "Pending",
      date: "2025-01-14",
    },
    {
      id: "REC-001",
      type: "Receipt",
      customer: "MTN Nigeria",
      amount: "₦3,200,000.00",
      status: "Cleared",
      date: "2025-01-13",
    },
  ]

  const overdueInvoices = [
    {
      id: "INV-003",
      customer: "First Bank Nigeria",
      amount: "₦1,750,000.00",
      daysOverdue: 15,
    },
    {
      id: "INV-005",
      customer: "Zenith Bank",
      amount: "₦950,000.00",
      daysOverdue: 8,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 text-sm">
          Welcome to your Promix accounting dashboard. Get insights into your business performance.
        </p>
      </div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <DollarSign className="w-4 h-4 mr-2 text-green-600" />
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₦15,200,000.00</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-600" />
              Outstanding Receivables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₦5,900,000.00</div>
            <div className="flex items-center text-sm text-red-600 mt-1">
              <TrendingDown className="w-4 h-4 mr-1" />
              +5.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-orange-600" />
              Pending Payables
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₦3,600,000.00</div>
            <div className="flex items-center text-sm text-orange-600 mt-1">
              <AlertCircle className="w-4 h-4 mr-1" />
              18 days average
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-600">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-purple-600" />
              Net Profit Margin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">18.5%</div>
            <div className="flex items-center text-sm text-green-600 mt-1">
              <TrendingUp className="w-4 h-4 mr-1" />
              +2.1% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="bg-green-600 hover:bg-green-700 h-16 flex flex-col items-center justify-center">
              <Plus className="w-5 h-5 mb-1" />
              New Invoice
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 h-16 flex flex-col items-center justify-center bg-transparent"
            >
              <Plus className="w-5 h-5 mb-1" />
              Record Payment
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 h-16 flex flex-col items-center justify-center bg-transparent"
            >
              <Plus className="w-5 h-5 mb-1" />
              Add Expense
            </Button>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 h-16 flex flex-col items-center justify-center bg-transparent"
            >
              <Eye className="w-5 h-5 mb-1" />
              View Reports
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900">Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{transaction.id}</div>
                    <div className="text-sm text-gray-600">{transaction.customer}</div>
                    <div className="text-xs text-gray-500">{transaction.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{transaction.amount}</div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : transaction.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Overdue Invoices */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
              Overdue Invoices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {overdueInvoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200"
                >
                  <div>
                    <div className="font-medium text-gray-900">{invoice.id}</div>
                    <div className="text-sm text-gray-600">{invoice.customer}</div>
                    <div className="text-xs text-red-600 font-medium">{invoice.daysOverdue} days overdue</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900">{invoice.amount}</div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-1 border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      Send Reminder
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cash Flow Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">Cash Flow Summary (This Month)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">₦6,485,000.00</div>
              <div className="text-sm text-gray-600 mt-1">Money In</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">₦4,735,000.00</div>
              <div className="text-sm text-gray-600 mt-1">Money Out</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">₦1,750,000.00</div>
              <div className="text-sm text-gray-600 mt-1">Net Cash Flow</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
