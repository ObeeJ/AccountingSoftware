"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, MoreVertical } from "lucide-react"

export default function ProductsServices() {
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const products = [
    {
      id: "1",
      code: "PROMIX-001",
      name: "Promix Accounting Software",
      description: "Professional accounting software for Nigerian businesses",
      category: "Software",
      type: "Service",
      costPrice: "₦50,000.00",
      salesPrice: "₦75,000.00",
      stock: "Unlimited",
      status: "Active",
    },
    {
      id: "2",
      code: "OFFICE-001",
      name: "Office Supplies Bundle",
      description: "Complete office supplies package",
      category: "Supplies",
      type: "Product",
      costPrice: "₦25,000.00",
      salesPrice: "₦35,000.00",
      stock: "50",
      status: "Active",
    },
    {
      id: "3",
      code: "CONSULT-001",
      name: "Business Consultation",
      description: "Professional business advisory services",
      category: "Services",
      type: "Service",
      costPrice: "₦0.00",
      salesPrice: "₦100,000.00",
      stock: "Unlimited",
      status: "Active",
    },
    {
      id: "4",
      code: "TRAIN-001",
      name: "Accounting Training",
      description: "Comprehensive accounting training program",
      category: "Training",
      type: "Service",
      costPrice: "₦15,000.00",
      salesPrice: "₦45,000.00",
      stock: "Unlimited",
      status: "Active",
    },
  ]

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(products.map((p) => p.id))
    } else {
      setSelectedItems([])
    }
  }

  const handleSelectItem = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id])
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id))
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Products and Services</h1>
        <p className="text-gray-600 text-sm">
          Manage your products and services catalog for invoicing and inventory tracking.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-green-500">4</div>
          <div className="text-sm text-gray-600">Total Items</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-blue-500">2</div>
          <div className="text-sm text-gray-600">Products</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-purple-500">2</div>
          <div className="text-sm text-gray-600">Services</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold text-orange-500">4</div>
          <div className="text-sm text-gray-600">Active Items</div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">{selectedItems.length} Selected</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <Input placeholder="Search products..." className="pl-10 w-64 border-gray-300" />
          </div>
          <Button variant="outline" className="border-gray-300 bg-transparent">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button className="bg-green-500 hover:bg-green-600">
            <Plus className="w-4 h-4 mr-2" />
            New Item
          </Button>
        </div>
      </div>

      {/* Products Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-500 hover:bg-green-500">
              <TableHead className="text-white font-medium w-12">
                <Checkbox checked={selectedItems.length === products.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="text-white font-medium">Code</TableHead>
              <TableHead className="text-white font-medium">Name</TableHead>
              <TableHead className="text-white font-medium">Description</TableHead>
              <TableHead className="text-white font-medium">Category</TableHead>
              <TableHead className="text-white font-medium">Type</TableHead>
              <TableHead className="text-white font-medium">Cost Price</TableHead>
              <TableHead className="text-white font-medium">Sales Price</TableHead>
              <TableHead className="text-white font-medium">Stock</TableHead>
              <TableHead className="text-white font-medium">Status</TableHead>
              <TableHead className="text-white font-medium w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell>
                  <Checkbox
                    checked={selectedItems.includes(product.id)}
                    onCheckedChange={(checked) => handleSelectItem(product.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell className="font-medium text-gray-900">{product.code}</TableCell>
                <TableCell className="font-medium text-gray-900">{product.name}</TableCell>
                <TableCell className="text-gray-600">{product.description}</TableCell>
                <TableCell className="text-gray-600">{product.category}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      product.type === "Product" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {product.type}
                  </span>
                </TableCell>
                <TableCell className="text-gray-900">{product.costPrice}</TableCell>
                <TableCell className="text-gray-900">{product.salesPrice}</TableCell>
                <TableCell className="text-gray-600">{product.stock}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {product.status}
                  </span>
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

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <Select defaultValue="10">
            <SelectTrigger className="w-16 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span>entries</span>
        </div>

        <div className="flex items-center space-x-4">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex space-x-1">
            <Button variant="outline" size="sm" className="bg-green-500 text-white border-green-500">
              1
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
