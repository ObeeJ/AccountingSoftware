"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import SalesInvoice from "@/components/sales-invoice"
import PurchaseInvoice from "@/components/purchase-invoice"
import ProductsServices from "@/components/products-services"
import SalesModule from "@/components/sales-module"
import PurchasesModule from "@/components/purchases-module"
import ReceivablesModule from "@/components/receivables-module"
import PayablesModule from "@/components/payables-module"
import GeneralLedger from "@/components/general-ledger"
import ChartOfAccounts from "@/components/chart-of-accounts"
import JournalEntries from "@/components/journal-entries"
import PettyCash from "@/components/petty-cash"
import BankLodgement from "@/components/bank-lodgement"
import Payments from "@/components/payments"
import Receipts from "@/components/receipts"
import InvoicesModule from "@/components/invoices-module"
import Dashboard from "@/components/dashboard"
import {
  Home,
  CreditCard,
  Calculator,
  BarChart3,
  Building2,
  Settings,
  Bell,
  ChevronDown,
  FileText,
  Users,
  Wallet,
  Receipt,
  BookOpen,
  PiggyBank,
  Banknote,
  ArrowUpDown,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function PromixAccounting() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Exact match to screenshot */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Logo - Exact match */}
            <div className="text-2xl font-bold text-green-600">Promix.</div>

            {/* Navigation - Exact match to screenshot */}
            <nav className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className={`text-gray-700 hover:text-green-600 ${activeTab === "dashboard" ? "text-green-600" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Transactions
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem onClick={() => setActiveTab("sales-module")}>
                    <FileText className="w-4 h-4 mr-2" />
                    Sales
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("purchases-module")}>
                    <Wallet className="w-4 h-4 mr-2" />
                    Purchases
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("receipts")}>
                    <Receipt className="w-4 h-4 mr-2" />
                    Receipts
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("payments")}>
                    <Banknote className="w-4 h-4 mr-2" />
                    Payments
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                    <Calculator className="w-4 h-4 mr-2" />
                    Accounting
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem onClick={() => setActiveTab("general-ledger")}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    General Ledger
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("chart-of-accounts")}>
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Chart of Accounts
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("journal-entries")}>
                    <FileText className="w-4 h-4 mr-2" />
                    Journal Entries
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab("receivables")}>
                    <Users className="w-4 h-4 mr-2" />
                    Receivables
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("payables")}>
                    <Wallet className="w-4 h-4 mr-2" />
                    Payables
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setActiveTab("petty-cash")}>
                    <PiggyBank className="w-4 h-4 mr-2" />
                    Petty Cash
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setActiveTab("bank-lodgement")}>
                    <Building2 className="w-4 h-4 mr-2" />
                    Bank Lodgement
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                <BarChart3 className="w-4 h-4 mr-2" />
                Reports
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                <Building2 className="w-4 h-4 mr-2" />
                Banking
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </nav>
          </div>

          {/* User Section - Exact match */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium">
              AO
            </div>
          </div>
        </div>
      </header>

      {/* Quick Access Buttons */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={activeTab === "sales-invoice" ? "default" : "outline"}
            size="sm"
            className={
              activeTab === "sales-invoice"
                ? "bg-green-600 hover:bg-green-700"
                : "border-gray-300 hover:border-green-600 hover:text-green-600"
            }
            onClick={() => setActiveTab("sales-invoice")}
          >
            New Sales Invoice
          </Button>
          <Button
            variant={activeTab === "purchase-invoice" ? "default" : "outline"}
            size="sm"
            className={
              activeTab === "purchase-invoice"
                ? "bg-green-600 hover:bg-green-700"
                : "border-gray-300 hover:border-green-600 hover:text-green-600"
            }
            onClick={() => setActiveTab("purchase-invoice")}
          >
            New Purchase Invoice
          </Button>
          <Button
            variant={activeTab === "invoices" ? "default" : "outline"}
            size="sm"
            className={
              activeTab === "invoices"
                ? "bg-green-600 hover:bg-green-700"
                : "border-gray-300 hover:border-green-600 hover:text-green-600"
            }
            onClick={() => setActiveTab("invoices")}
          >
            All Invoices
          </Button>
          <Button
            variant={activeTab === "products" ? "default" : "outline"}
            size="sm"
            className={
              activeTab === "products"
                ? "bg-green-600 hover:bg-green-700"
                : "border-gray-300 hover:border-green-600 hover:text-green-600"
            }
            onClick={() => setActiveTab("products")}
          >
            Products & Services
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>

          <TabsContent value="sales-module">
            <SalesModule />
          </TabsContent>

          <TabsContent value="sales-invoice">
            <SalesInvoice />
          </TabsContent>

          <TabsContent value="invoices">
            <InvoicesModule />
          </TabsContent>

          <TabsContent value="purchases-module">
            <PurchasesModule />
          </TabsContent>

          <TabsContent value="purchase-invoice">
            <PurchaseInvoice />
          </TabsContent>

          <TabsContent value="receivables">
            <ReceivablesModule />
          </TabsContent>

          <TabsContent value="payables">
            <PayablesModule />
          </TabsContent>

          <TabsContent value="general-ledger">
            <GeneralLedger />
          </TabsContent>

          <TabsContent value="chart-of-accounts">
            <ChartOfAccounts />
          </TabsContent>

          <TabsContent value="journal-entries">
            <JournalEntries />
          </TabsContent>

          <TabsContent value="petty-cash">
            <PettyCash />
          </TabsContent>

          <TabsContent value="bank-lodgement">
            <BankLodgement />
          </TabsContent>

          <TabsContent value="payments">
            <Payments />
          </TabsContent>

          <TabsContent value="receipts">
            <Receipts />
          </TabsContent>

          <TabsContent value="products">
            <ProductsServices />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer - Exact match to screenshot */}
      <footer className="bg-white border-t border-gray-200 px-6 py-4 mt-12">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>Copyright © 2025 Accounting, powered by Promix.</div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-green-600 hover:underline">
              Terms & Conditions
            </a>
            <span>/</span>
            <a href="#" className="text-green-600 hover:underline">
              Ask
            </a>
            <span>/</span>
            <a href="#" className="text-green-600 hover:underline">
              Our and Downloads
            </a>
            <span>/</span>
            <a href="#" className="text-green-600 hover:underline">
              Contact Us
            </a>
            <span>/</span>
            <a href="#" className="text-green-600 hover:underline">
              Need Help?
            </a>
            <span>/</span>
            <a href="#" className="text-green-600 hover:underline">
              Feedback
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
