"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Plus, MoreVertical, Calendar } from "lucide-react"

export default function PurchaseInvoice() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">New Purchase Invoice</h1>
        <p className="text-gray-600 text-sm">
          Record a new invoice you've received from a supplier with itemized charges and payment terms.
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="space-y-2">
          <Label htmlFor="supplier" className="text-sm font-medium text-gray-700">
            Supplier Name*
          </Label>
          <Select>
            <SelectTrigger className="border-gray-300">
              <SelectValue placeholder="Select supplier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="supplier1">Nigerian Suppliers Ltd</SelectItem>
              <SelectItem value="supplier2">Lagos Trading Co</SelectItem>
            </SelectContent>
          </Select>
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

      {/* Currency Info */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-end text-sm text-gray-600">
          <span>Currency: Nigerian Naira (₦) | 1 USD = ₦1,650.00</span>
        </div>
      </div>

      {/* Actions Button */}
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

      {/* Invoice Lines Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium">Product/Service</TableHead>
              <TableHead className="text-white font-medium">Description*</TableHead>
              <TableHead className="text-white font-medium">Ledger Account*</TableHead>
              <TableHead className="text-white font-medium">Qty/Hrs*</TableHead>
              <TableHead className="text-white font-medium">Price/Rate* (₦)</TableHead>
              <TableHead className="text-white font-medium">Discount</TableHead>
              <TableHead className="text-white font-medium">VAT/Rate*</TableHead>
              <TableHead className="text-white font-medium">VAT* (₦)</TableHead>
              <TableHead className="text-white font-medium">Total (₦)</TableHead>
              <TableHead className="text-white font-medium w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-white">
              <TableCell>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="office-supplies">Office Supplies</SelectItem>
                    <SelectItem value="equipment">Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input placeholder="Enter description" className="border-gray-300" />
              </TableCell>
              <TableCell>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5000">5000 - Cost of Sales</SelectItem>
                    <SelectItem value="6000">6000 - Operating Expenses</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input defaultValue="1.00" className="border-gray-300" />
              </TableCell>
              <TableCell>
                <Input placeholder="0.00" className="border-gray-300" />
              </TableCell>
              <TableCell>
                <Input defaultValue="0.00" className="border-gray-300" />
              </TableCell>
              <TableCell>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="VAT Rate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard (7.5%)</SelectItem>
                    <SelectItem value="zero">Zero Rated</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <span className="text-gray-900">0.00</span>
              </TableCell>
              <TableCell>
                <span className="text-gray-900">0.00</span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
            Notes
          </Label>
          <Textarea id="notes" placeholder="Internal notes..." className="border-gray-300 h-32" />
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-2">
          <Label htmlFor="terms" className="text-sm font-medium text-gray-700">
            Terms and conditions
          </Label>
          <Textarea id="terms" placeholder="Payment terms..." className="border-gray-300 h-32" />
        </div>

        {/* Total Section */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₦0.00</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (7.5%):</span>
                <span>₦0.00</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Total:</span>
                <span>₦0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-green-500 hover:bg-green-600">Save Invoice</Button>
      </div>
    </div>
  )
}
