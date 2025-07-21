"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Plus, MoreVertical, Calendar } from "lucide-react"

export default function SalesInvoice() {
  const [invoiceLines, setInvoiceLines] = useState([
    {
      id: 1,
      product: "Promix Accounting",
      description: "Promix Accounting",
      ledgerAccount: "4000 - Sales - Product",
      quantity: "1.00",
      price: "66.67",
      discount: "0.00",
      vatRate: "Standard",
      vat: "66.67",
      total: "66.67",
    },
    {
      id: 2,
      product: "Promix Accounting",
      description: "Promix Accounting",
      ledgerAccount: "4000 - Sales - Product",
      quantity: "1.00",
      price: "66.67",
      discount: "0.00",
      vatRate: "Standard",
      vat: "66.67",
      total: "66.67",
    },
    {
      id: 3,
      product: "Promix Accounting",
      description: "Promix Accounting",
      ledgerAccount: "4000 - Sales - Product",
      quantity: "1.00",
      price: "66.67",
      discount: "0.00",
      vatRate: "Standard",
      vat: "66.67",
      total: "66.67",
    },
    {
      id: 4,
      product: "Promix Accounting",
      description: "Promix Accounting",
      ledgerAccount: "4000 - Sales - Product",
      quantity: "1.00",
      price: "66.67",
      discount: "0.00",
      vatRate: "Standard",
      vat: "66.67",
      total: "66.67",
    },
    {
      id: 5,
      product: "Promix Accounting",
      description: "Promix Accounting",
      ledgerAccount: "4000 - Sales - Product",
      quantity: "1.00",
      price: "66.67",
      discount: "0.00",
      vatRate: "Standard",
      vat: "66.67",
      total: "66.67",
    },
    {
      id: 6,
      product: "Promix Accounting",
      description: "Promix Accounting",
      ledgerAccount: "4000 - Sales - Product",
      quantity: "1.00",
      price: "66.67",
      discount: "0.00",
      vatRate: "Standard",
      vat: "66.67",
      total: "66.67",
    },
  ])

  return (
    <div className="space-y-6">
      {/* Header - Exact match to screenshot */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">New Sales Invoice</h1>
        <p className="text-gray-600 text-sm">
          Draft a concise invoice with itemized charges, payment terms, and contact details.
        </p>
      </div>

      {/* Form Fields - Exact match to screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="customer" className="text-sm font-medium text-gray-700">
            Customer Name*
          </Label>
          <Input id="customer" placeholder="Enter customer name" className="border-gray-300" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="invoice-date" className="text-sm font-medium text-gray-700">
            Invoice Date*
          </Label>
          <div className="relative">
            <Input id="invoice-date" placeholder="Select date" className="border-gray-300" />
            <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="due-date" className="text-sm font-medium text-gray-700">
            Due Date*
          </Label>
          <div className="relative">
            <Input id="due-date" placeholder="Select date" className="border-gray-300" />
            <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="reference" className="text-sm font-medium text-gray-700">
            Reference
          </Label>
          <Input id="reference" placeholder="Enter reference" className="border-gray-300" />
        </div>
      </div>

      {/* Actions Button - Exact match to screenshot */}
      <div className="flex justify-start mb-4">
        <Button
          variant="outline"
          size="sm"
          className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
        >
          <Plus className="w-4 h-4 mr-2" />
          Actions
        </Button>
      </div>

      {/* Invoice Lines Table - Exact match to screenshot */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-600 hover:bg-green-600">
              <TableHead className="text-white font-medium">Product/Service</TableHead>
              <TableHead className="text-white font-medium">Description*</TableHead>
              <TableHead className="text-white font-medium">Ledger Account*</TableHead>
              <TableHead className="text-white font-medium">Qty/Hrs*</TableHead>
              <TableHead className="text-white font-medium">Price/Rate*</TableHead>
              <TableHead className="text-white font-medium">Discount</TableHead>
              <TableHead className="text-white font-medium">VAT/Rate*</TableHead>
              <TableHead className="text-white font-medium">VAT*</TableHead>
              <TableHead className="text-white font-medium">Total</TableHead>
              <TableHead className="text-white font-medium w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoiceLines.map((line, index) => (
              <TableRow key={line.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell>
                  <Select defaultValue={line.product}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Promix Accounting">Promix Accounting</SelectItem>
                      <SelectItem value="Consulting Services">Consulting Services</SelectItem>
                      <SelectItem value="Training Program">Training Program</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input defaultValue={line.description} className="border-gray-300" />
                </TableCell>
                <TableCell>
                  <Select defaultValue={line.ledgerAccount}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4000 - Sales - Product">4000 - Sales - Product</SelectItem>
                      <SelectItem value="4100 - Sales - Services">4100 - Sales - Services</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Input defaultValue={line.quantity} className="border-gray-300" />
                </TableCell>
                <TableCell>
                  <Input defaultValue={line.price} className="border-gray-300" />
                </TableCell>
                <TableCell>
                  <Input defaultValue={line.discount} className="border-gray-300" />
                </TableCell>
                <TableCell>
                  <Select defaultValue={line.vatRate}>
                    <SelectTrigger className="border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Standard">Standard (7.5%)</SelectItem>
                      <SelectItem value="Zero">Zero Rated</SelectItem>
                      <SelectItem value="Exempt">Exempt</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{line.vat}</span>
                </TableCell>
                <TableCell>
                  <span className="text-gray-900">{line.total}</span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Reorder Lines - Exact match to screenshot */}
      <div className="flex justify-start">
        <Button variant="link" className="text-green-600 hover:text-green-700 p-0">
          Reorder lines
        </Button>
      </div>

      {/* Bottom Section - Exact match to screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
            Notes
          </Label>
          <Textarea id="notes" placeholder="Add notes here..." className="border-gray-300 h-32" />
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-2">
          <Label htmlFor="terms" className="text-sm font-medium text-gray-700">
            Terms and conditions
          </Label>
          <Textarea id="terms" placeholder="Add terms and conditions..." className="border-gray-300 h-32" />
        </div>

        {/* Carriage - Exact match to screenshot */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="carriage" className="text-sm font-medium text-gray-700">
              Carriage
            </Label>
            <div className="flex space-x-2">
              <Select defaultValue="standard">
                <SelectTrigger className="border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard(NG)</SelectItem>
                  <SelectItem value="express">Express Delivery</SelectItem>
                  <SelectItem value="pickup">Customer Pickup</SelectItem>
                </SelectContent>
              </Select>
              <Input defaultValue="0.00" className="border-gray-300 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination - Exact match to screenshot */}
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
        <div>Displaying 1 - 61 of 61</div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <Button variant="outline" className="border-gray-300 bg-transparent">
          Save as Draft
        </Button>
        <Button className="bg-green-600 hover:bg-green-700">Save & Send</Button>
      </div>
    </div>
  )
}
