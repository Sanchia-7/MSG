"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, RefreshCw, Save } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

// Pipe material density data (kg/m³)
const pipeMaterialDensity = {
  "carbon-steel": 7850,
  "stainless-steel-304": 8000,
  "stainless-steel-316": 8000,
  duplex: 7800,
  "super-duplex": 7850,
  copper: 8940,
  aluminum: 2700,
  pvc: 1400,
  hdpe: 950,
  concrete: 2400,
}

// Pipe schedule data
const pipeSchedules = {
  "10": { factor: 0.8 },
  "20": { factor: 0.9 },
  "30": { factor: 1.0 },
  "40": { factor: 1.1 },
  "60": { factor: 1.2 },
  "80": { factor: 1.3 },
  "100": { factor: 1.4 },
  "120": { factor: 1.5 },
  "140": { factor: 1.6 },
  "160": { factor: 1.7 },
  STD: { factor: 1.1 }, // Standard (equivalent to SCH 40 for NPS 1/8 to NPS 10)
  XS: { factor: 1.3 }, // Extra Strong (equivalent to SCH 80 for NPS 1/8 to NPS 8)
  XXS: { factor: 1.7 }, // Double Extra Strong
}

export default function PipePriceCalculatorPage() {
  // State for calculation type
  const [calculationType, setCalculationType] = useState("tonnage")

  // State for pipe dimensions
  const [outerDiameter, setOuterDiameter] = useState("")
  const [wallThickness, setWallThickness] = useState("")
  const [pipeLength, setPipeLength] = useState("")
  const [pipeSchedule, setPipeSchedule] = useState("")
  const [nominalSize, setNominalSize] = useState("")

  // State for material and price
  const [material, setMaterial] = useState("carbon-steel")
  const [pricePerTon, setPricePerTon] = useState("")
  const [pricePerMeter, setPricePerMeter] = useState("")
  const [currency, setCurrency] = useState("USD")

  // State for calculation results
  const [pipeWeight, setPipeWeight] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [calculationHistory, setCalculationHistory] = useState<any[]>([])

  // Calculate pipe weight based on dimensions and material
  const calculatePipeWeight = () => {
    if (!outerDiameter || !wallThickness || !pipeLength || !material) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return 0
    }

    const od = Number.parseFloat(outerDiameter)
    const wt = Number.parseFloat(wallThickness)
    const length = Number.parseFloat(pipeLength)

    if (isNaN(od) || isNaN(wt) || isNaN(length)) {
      toast({
        title: "Invalid input",
        description: "Please enter valid numbers",
        variant: "destructive",
      })
      return 0
    }

    // Calculate inner diameter
    const id = od - 2 * wt

    if (id <= 0) {
      toast({
        title: "Invalid dimensions",
        description: "Wall thickness is too large for the given outer diameter",
        variant: "destructive",
      })
      return 0
    }

    // Calculate volume in cubic meters
    const volumeM3 = (Math.PI / 4) * (Math.pow(od / 1000, 2) - Math.pow(id / 1000, 2)) * (length / 1000)

    // Calculate weight in kg
    const density = pipeMaterialDensity[material as keyof typeof pipeMaterialDensity]
    const weightKg = volumeM3 * density

    // Convert to tons
    const weightTons = weightKg / 1000

    return weightTons
  }

  // Calculate pipe weight based on nominal size and schedule
  const calculatePipeWeightBySchedule = () => {
    if (!nominalSize || !pipeSchedule || !pipeLength || !material) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return 0
    }

    const length = Number.parseFloat(pipeLength)

    if (isNaN(length)) {
      toast({
        title: "Invalid input",
        description: "Please enter a valid length",
        variant: "destructive",
      })
      return 0
    }

    // This is a simplified calculation - in a real application, you would have a lookup table
    // for each nominal size and schedule combination
    const nominalSizeInch = Number.parseFloat(nominalSize)
    const baseWeight = Math.PI * nominalSizeInch * 0.5 // Simplified base weight per meter

    const scheduleFactor = pipeSchedules[pipeSchedule as keyof typeof pipeSchedules]?.factor || 1
    const density = pipeMaterialDensity[material as keyof typeof pipeMaterialDensity]

    // Calculate weight in kg
    const weightKg = baseWeight * scheduleFactor * (length / 1000) * (density / 7850) // Normalized to carbon steel

    // Convert to tons
    const weightTons = weightKg / 1000

    return weightTons
  }

  // Calculate total price
  const calculateTotalPrice = (weight: number) => {
    if (!pricePerTon && calculationType === "tonnage") {
      toast({
        title: "Missing price information",
        description: "Please enter the price per ton",
        variant: "destructive",
      })
      return 0
    }

    if (!pricePerMeter && calculationType === "length") {
      toast({
        title: "Missing price information",
        description: "Please enter the price per meter",
        variant: "destructive",
      })
      return 0
    }

    if (calculationType === "tonnage") {
      const price = Number.parseFloat(pricePerTon)
      if (isNaN(price)) {
        toast({
          title: "Invalid price",
          description: "Please enter a valid price per ton",
          variant: "destructive",
        })
        return 0
      }
      return weight * price
    } else {
      const price = Number.parseFloat(pricePerMeter)
      const length = Number.parseFloat(pipeLength)
      if (isNaN(price) || isNaN(length)) {
        toast({
          title: "Invalid input",
          description: "Please enter valid numbers",
          variant: "destructive",
        })
        return 0
      }
      return (length / 1000) * price // Convert mm to meters
    }
  }

  // Perform calculation
  const performCalculation = () => {
    let weight

    if (calculationType === "tonnage") {
      if (pipeSchedule && nominalSize) {
        weight = calculatePipeWeightBySchedule()
      } else {
        weight = calculatePipeWeight()
      }

      setPipeWeight(weight)
      const price = calculateTotalPrice(weight)
      setTotalPrice(price)

      // Add to history
      if (weight > 0 && price > 0) {
        const historyItem = {
          id: Date.now(),
          type: calculationType,
          material,
          dimensions:
            pipeSchedule && nominalSize
              ? `${nominalSize}" - SCH ${pipeSchedule}`
              : `OD: ${outerDiameter}mm, WT: ${wallThickness}mm`,
          length: `${pipeLength}mm`,
          weight: weight.toFixed(4),
          price: price.toFixed(2),
          currency,
          timestamp: new Date().toLocaleTimeString(),
        }
        setCalculationHistory((prev) => [historyItem, ...prev].slice(0, 10))
      }
    } else {
      // For length-based calculation
      const length = Number.parseFloat(pipeLength)
      if (isNaN(length)) {
        toast({
          title: "Invalid input",
          description: "Please enter a valid length",
          variant: "destructive",
        })
        return
      }

      const price = calculateTotalPrice(0) // Weight not used for length-based calculation
      setTotalPrice(price)

      // Add to history
      if (price > 0) {
        const historyItem = {
          id: Date.now(),
          type: calculationType,
          material,
          dimensions:
            pipeSchedule && nominalSize
              ? `${nominalSize}" - SCH ${pipeSchedule}`
              : `OD: ${outerDiameter}mm, WT: ${wallThickness}mm`,
          length: `${pipeLength}mm`,
          weight: "N/A",
          price: price.toFixed(2),
          currency,
          timestamp: new Date().toLocaleTimeString(),
        }
        setCalculationHistory((prev) => [historyItem, ...prev].slice(0, 10))
      }
    }
  }

  // Clear form
  const clearForm = () => {
    setOuterDiameter("")
    setWallThickness("")
    setPipeLength("")
    setPipeSchedule("")
    setNominalSize("")
    setPricePerTon("")
    setPricePerMeter("")
    setPipeWeight(0)
    setTotalPrice(0)
  }

  // Save calculation to PDF (simplified - would need a PDF library in a real app)
  const saveCalculation = () => {
    toast({
      title: "Calculation saved",
      description: "Your calculation has been saved (demo functionality)",
    })
  }

  return (
    <div>
      <Navbar />
      <PageHeader
        title="Pipe Price Calculator"
        subtitle="Calculate pipe weight and price based on dimensions and material"
      />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Pipe Price Calculator</CardTitle>
              <CardDescription>
                Calculate the weight and price of pipes based on dimensions, material, and pricing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Calculation Type */}
                <div>
                  <Label>Calculation Type</Label>
                  <RadioGroup
                    value={calculationType}
                    onValueChange={setCalculationType}
                    className="mt-2 flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tonnage" id="tonnage" />
                      <Label htmlFor="tonnage">Tonnage Calculation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="length" id="length" />
                      <Label htmlFor="length">Length Calculation</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Tabs defaultValue="dimensions">
                  <TabsList>
                    <TabsTrigger value="dimensions">By Dimensions</TabsTrigger>
                    <TabsTrigger value="schedule">By Schedule</TabsTrigger>
                  </TabsList>

                  <TabsContent value="dimensions" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="outerDiameter">Outer Diameter (mm)</Label>
                        <Input
                          id="outerDiameter"
                          type="number"
                          placeholder="e.g., 114.3"
                          value={outerDiameter}
                          onChange={(e) => setOuterDiameter(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="wallThickness">Wall Thickness (mm)</Label>
                        <Input
                          id="wallThickness"
                          type="number"
                          placeholder="e.g., 6.02"
                          value={wallThickness}
                          onChange={(e) => setWallThickness(e.target.value)}
                        />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="schedule" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Label htmlFor="nominalSize">Nominal Size (inches)</Label>
                        <Select value={nominalSize} onValueChange={setNominalSize}>
                          <SelectTrigger id="nominalSize">
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "0.125",
                              "0.25",
                              "0.375",
                              "0.5",
                              "0.75",
                              "1",
                              "1.25",
                              "1.5",
                              "2",
                              "2.5",
                              "3",
                              "4",
                              "6",
                              "8",
                              "10",
                              "12",
                              "14",
                              "16",
                              "18",
                              "20",
                              "24",
                            ].map((size) => (
                              <SelectItem key={size} value={size}>
                                {size}"
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pipeSchedule">Pipe Schedule</Label>
                        <Select value={pipeSchedule} onValueChange={setPipeSchedule}>
                          <SelectTrigger id="pipeSchedule">
                            <SelectValue placeholder="Select schedule" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(pipeSchedules).map((schedule) => (
                              <SelectItem key={schedule} value={schedule}>
                                {schedule}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="pipeLength">Pipe Length (mm)</Label>
                    <Input
                      id="pipeLength"
                      type="number"
                      placeholder="e.g., 6000"
                      value={pipeLength}
                      onChange={(e) => setPipeLength(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="material">Material</Label>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger id="material">
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carbon-steel">Carbon Steel</SelectItem>
                        <SelectItem value="stainless-steel-304">Stainless Steel 304</SelectItem>
                        <SelectItem value="stainless-steel-316">Stainless Steel 316</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="super-duplex">Super Duplex</SelectItem>
                        <SelectItem value="copper">Copper</SelectItem>
                        <SelectItem value="aluminum">Aluminum</SelectItem>
                        <SelectItem value="pvc">PVC</SelectItem>
                        <SelectItem value="hdpe">HDPE</SelectItem>
                        <SelectItem value="concrete">Concrete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <Label htmlFor="currency">Currency</Label>
                    <Select value={currency} onValueChange={setCurrency}>
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="AED">AED (د.إ)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {calculationType === "tonnage" ? (
                    <div>
                      <Label htmlFor="pricePerTon">Price Per Ton</Label>
                      <Input
                        id="pricePerTon"
                        type="number"
                        placeholder="e.g., 1200"
                        value={pricePerTon}
                        onChange={(e) => setPricePerTon(e.target.value)}
                      />
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="pricePerMeter">Price Per Meter</Label>
                      <Input
                        id="pricePerMeter"
                        type="number"
                        placeholder="e.g., 50"
                        value={pricePerMeter}
                        onChange={(e) => setPricePerMeter(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button onClick={performCalculation} className="min-w-[120px]">
                    <Calculator className="mr-2 h-4 w-4" />
                    Calculate
                  </Button>
                  <Button onClick={clearForm} variant="outline" className="min-w-[120px]">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                  <Button onClick={saveCalculation} variant="outline" className="min-w-[120px]">
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Calculation Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                {calculationType === "tonnage" && (
                  <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Pipe Weight</div>
                    <div className="mt-1 text-2xl font-bold">
                      {pipeWeight.toFixed(4)} <span className="text-sm font-normal">tons</span>
                    </div>
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {(pipeWeight * 1000).toFixed(2)} kg
                    </div>
                  </div>
                )}

                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Total Price</div>
                  <div className="mt-1 text-2xl font-bold">
                    {totalPrice.toFixed(2)} <span className="text-sm font-normal">{currency}</span>
                  </div>
                  {calculationType === "tonnage" && (
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Based on {pricePerTon} {currency} per ton
                    </div>
                  )}
                  {calculationType === "length" && (
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Based on {pricePerMeter} {currency} per meter
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {calculationHistory.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Calculation History</CardTitle>
                <CardDescription>Your recent pipe price calculations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {calculationHistory.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium capitalize">{item.material.replace(/-/g, " ")}</span>
                        <span className="text-sm text-gray-500">{item.timestamp}</span>
                      </div>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div>
                          <div className="text-sm text-gray-500">Dimensions</div>
                          <div>{item.dimensions}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Length</div>
                          <div>{item.length}</div>
                        </div>
                        {item.type === "tonnage" && (
                          <div>
                            <div className="text-sm text-gray-500">Weight</div>
                            <div>{item.weight} tons</div>
                          </div>
                        )}
                        <div>
                          <div className="text-sm text-gray-500">Price</div>
                          <div>
                            {item.price} {item.currency}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

