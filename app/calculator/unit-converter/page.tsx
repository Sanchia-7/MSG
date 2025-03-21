"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUp, RefreshCw } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

// Conversion categories and their units
const conversionData = {
  length: {
    name: "Length",
    units: [
      { id: "meter", name: "Meter (m)", factor: 1 },
      { id: "kilometer", name: 'Kilometer (km)", factor: 1000   name: "Meter (m)', factor: 1 },
      { id: "kilometer", name: "Kilometer (km)", factor: 1000 },
      { id: "centimeter", name: "Centimeter (cm)", factor: 0.01 },
      { id: "millimeter", name: "Millimeter (mm)", factor: 0.001 },
      { id: "inch", name: "Inch (in)", factor: 0.0254 },
      { id: "foot", name: "Foot (ft)", factor: 0.3048 },
      { id: "yard", name: "Yard (yd)", factor: 0.9144 },
      { id: "mile", name: "Mile (mi)", factor: 1609.344 },
    ],
  },
  weight: {
    name: "Weight",
    units: [
      { id: "kilogram", name: "Kilogram (kg)", factor: 1 },
      { id: "gram", name: "Gram (g)", factor: 0.001 },
      { id: "milligram", name: "Milligram (mg)", factor: 0.000001 },
      { id: "metricTon", name: "Metric Ton (t)", factor: 1000 },
      { id: "pound", name: "Pound (lb)", factor: 0.45359237 },
      { id: "ounce", name: "Ounce (oz)", factor: 0.028349523125 },
      { id: "usTon", name: "US Ton", factor: 907.18474 },
      { id: "imperialTon", name: "Imperial Ton", factor: 1016.0469088 },
    ],
  },
  temperature: {
    name: "Temperature",
    units: [
      { id: "celsius", name: "Celsius (°C)" },
      { id: "fahrenheit", name: "Fahrenheit (°F)" },
      { id: "kelvin", name: "Kelvin (K)" },
    ],
    // Special conversion functions for temperature
    convert: (value: number, fromUnit: string, toUnit: string) => {
      if (fromUnit === toUnit) return value

      // Convert to Celsius first
      let celsius
      if (fromUnit === "celsius") {
        celsius = value
      } else if (fromUnit === "fahrenheit") {
        celsius = ((value - 32) * 5) / 9
      } else if (fromUnit === "kelvin") {
        celsius = value - 273.15
      }

      // Convert from Celsius to target unit
      if (toUnit === "celsius") {
        return celsius
      } else if (toUnit === "fahrenheit") {
        return (celsius * 9) / 5 + 32
      } else if (toUnit === "kelvin") {
        return celsius + 273.15
      }
    },
  },
  pressure: {
    name: "Pressure",
    units: [
      { id: "pascal", name: "Pascal (Pa)", factor: 1 },
      { id: "kilopascal", name: "Kilopascal (kPa)", factor: 1000 },
      { id: "megapascal", name: "Megapascal (MPa)", factor: 1000000 },
      { id: "bar", name: "Bar", factor: 100000 },
      { id: "psi", name: "PSI", factor: 6894.76 },
      { id: "ksi", name: "KSI", factor: 6894760 },
      { id: "atmosphere", name: "Atmosphere (atm)", factor: 101325 },
    ],
  },
  volume: {
    name: "Volume",
    units: [
      { id: "cubicMeter", name: "Cubic Meter (m³)", factor: 1 },
      { id: "liter", name: "Liter (L)", factor: 0.001 },
      { id: "milliliter", name: "Milliliter (mL)", factor: 0.000001 },
      { id: "cubicFoot", name: "Cubic Foot (ft³)", factor: 0.028316846592 },
      { id: "cubicInch", name: "Cubic Inch (in³)", factor: 0.000016387064 },
      { id: "usGallon", name: "US Gallon (gal)", factor: 0.003785411784 },
      { id: "imperialGallon", name: "Imperial Gallon", factor: 0.00454609 },
      { id: "barrel", name: "Oil Barrel (bbl)", factor: 0.158987294928 },
    ],
  },
  area: {
    name: "Area",
    units: [
      { id: "squareMeter", name: "Square Meter (m²)", factor: 1 },
      { id: "squareKilometer", name: "Square Kilometer (km²)", factor: 1000000 },
      { id: "squareCentimeter", name: "Square Centimeter (cm²)", factor: 0.0001 },
      { id: "squareMillimeter", name: "Square Millimeter (mm²)", factor: 0.000001 },
      { id: "squareInch", name: "Square Inch (in²)", factor: 0.00064516 },
      { id: "squareFoot", name: "Square Foot (ft²)", factor: 0.09290304 },
      { id: "squareYard", name: "Square Yard (yd²)", factor: 0.83612736 },
      { id: "acre", name: "Acre", factor: 4046.8564224 },
      { id: "hectare", name: "Hectare (ha)", factor: 10000 },
    ],
  },
  density: {
    name: "Density",
    units: [
      { id: "kgPerCubicMeter", name: "kg/m³", factor: 1 },
      { id: "gPerCubicCentimeter", name: "g/cm³", factor: 1000 },
      { id: "kgPerLiter", name: "kg/L", factor: 1000 },
      { id: "poundPerCubicFoot", name: "lb/ft³", factor: 16.01846337 },
      { id: "poundPerCubicInch", name: "lb/in³", factor: 27679.9047 },
    ],
  },
  speed: {
    name: "Speed",
    units: [
      { id: "meterPerSecond", name: "Meter/Second (m/s)", factor: 1 },
      { id: "kilometerPerHour", name: "Kilometer/Hour (km/h)", factor: 0.277778 },
      { id: "milePerHour", name: "Mile/Hour (mph)", factor: 0.44704 },
      { id: "knot", name: "Knot (kn)", factor: 0.514444 },
      { id: "footPerSecond", name: "Foot/Second (ft/s)", factor: 0.3048 },
    ],
  },
  energy: {
    name: "Energy",
    units: [
      { id: "joule", name: "Joule (J)", factor: 1 },
      { id: "kilojoule", name: "Kilojoule (kJ)", factor: 1000 },
      { id: "calorie", name: "Calorie (cal)", factor: 4.184 },
      { id: "kilocalorie", name: "Kilocalorie (kcal)", factor: 4184 },
      { id: "wattHour", name: "Watt-hour (Wh)", factor: 3600 },
      { id: "kilowattHour", name: "Kilowatt-hour (kWh)", factor: 3600000 },
      { id: "btu", name: "BTU", factor: 1055.06 },
      { id: "therm", name: "Therm", factor: 105506000 },
    ],
  },
  power: {
    name: "Power",
    units: [
      { id: "watt", name: "Watt (W)", factor: 1 },
      { id: "kilowatt", name: "Kilowatt (kW)", factor: 1000 },
      { id: "megawatt", name: "Megawatt (MW)", factor: 1000000 },
      { id: "horsepower", name: "Horsepower (hp)", factor: 745.7 },
      { id: "btuPerHour", name: "BTU/hour", factor: 0.29307107 },
    ],
  },
}

export default function UnitConverterPage() {
  const [activeCategory, setActiveCategory] = useState("length")
  const [fromUnit, setFromUnit] = useState("")
  const [toUnit, setToUnit] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState("")
  const [conversionHistory, setConversionHistory] = useState<any[]>([])
  const [showHistory, setShowHistory] = useState(false)

  // Set default units when category changes
  useEffect(() => {
    const category = conversionData[activeCategory as keyof typeof conversionData]
    if (category && category.units.length > 0) {
      setFromUnit(category.units[0].id)
      setToUnit(category.units.length > 1 ? category.units[1].id : category.units[0].id)
    }
  }, [activeCategory])

  // Convert units
  const convertUnits = () => {
    if (!inputValue || !fromUnit || !toUnit) {
      setResult("")
      return
    }

    const value = Number.parseFloat(inputValue)
    if (isNaN(value)) {
      setResult("Invalid input")
      return
    }

    const category = conversionData[activeCategory as keyof typeof conversionData]

    // Handle temperature conversion separately
    if (activeCategory === "temperature" && category.convert) {
      const convertedValue = category.convert(value, fromUnit, toUnit)
      setResult(convertedValue.toFixed(6))

      // Add to history
      const historyItem = {
        id: Date.now(),
        category: activeCategory,
        fromValue: value,
        fromUnit,
        toValue: convertedValue,
        toUnit,
        timestamp: new Date().toLocaleTimeString(),
      }
      setConversionHistory((prev) => [historyItem, ...prev].slice(0, 10))
      return
    }

    // Standard conversion using factors
    const fromUnitData = category.units.find((u) => u.id === fromUnit)
    const toUnitData = category.units.find((u) => u.id === toUnit)

    if (fromUnitData && toUnitData) {
      const baseValue = value * fromUnitData.factor
      const convertedValue = baseValue / toUnitData.factor
      setResult(convertedValue.toFixed(6))

      // Add to history
      const historyItem = {
        id: Date.now(),
        category: activeCategory,
        fromValue: value,
        fromUnit,
        toValue: convertedValue,
        toUnit,
        timestamp: new Date().toLocaleTimeString(),
      }
      setConversionHistory((prev) => [historyItem, ...prev].slice(0, 10))
    }
  }

  // Swap units
  const swapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    // Recalculate if there's a value
    if (inputValue) {
      setTimeout(convertUnits, 0)
    }
  }

  // Clear form
  const clearForm = () => {
    setInputValue("")
    setResult("")
  }

  // Clear history
  const clearHistory = () => {
    setConversionHistory([])
  }

  return (
    <div>
      <Navbar />
      <PageHeader title="Unit Converter" subtitle="Convert between different units of measurement" />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Unit Converter Calculator</CardTitle>
              <CardDescription>Select a category and convert between different units of measurement</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="length" onValueChange={setActiveCategory}>
                <TabsList className="mb-6 flex flex-wrap">
                  {Object.entries(conversionData).map(([key, category]) => (
                    <TabsTrigger key={key} value={key} className="mb-2">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(conversionData).map(([key, category]) => (
                  <TabsContent key={key} value={key} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="fromValue">From</Label>
                          <div className="flex space-x-2">
                            <Input
                              id="fromValue"
                              type="number"
                              placeholder="Enter value"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                            />
                            <Select value={fromUnit} onValueChange={setFromUnit}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                {category.units.map((unit) => (
                                  <SelectItem key={unit.id} value={unit.id}>
                                    {unit.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="toValue">To</Label>
                          <div className="flex space-x-2">
                            <Input
                              id="toValue"
                              type="text"
                              placeholder="Result"
                              value={result}
                              readOnly
                              className="bg-gray-50"
                            />
                            <Select value={toUnit} onValueChange={setToUnit}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                              </SelectTrigger>
                              <SelectContent>
                                {category.units.map((unit) => (
                                  <SelectItem key={unit.id} value={unit.id}>
                                    {unit.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <Button onClick={convertUnits} className="min-w-[120px]">
                        Convert
                      </Button>
                      <Button onClick={swapUnits} variant="outline" className="min-w-[120px]">
                        <ArrowRight className="mr-2 h-4 w-4 rotate-90" />
                        <ArrowUp className="mr-2 h-4 w-4 rotate-0" />
                        Swap
                      </Button>
                      <Button onClick={clearForm} variant="outline" className="min-w-[120px]">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Clear
                      </Button>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          <div className="mb-8 flex justify-between">
            <Button variant="outline" onClick={() => setShowHistory(!showHistory)} className="min-w-[120px]">
              {showHistory ? "Hide History" : "Show History"}
            </Button>
            {conversionHistory.length > 0 && (
              <Button variant="outline" onClick={clearHistory} className="min-w-[120px]">
                Clear History
              </Button>
            )}
          </div>

          {showHistory && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Conversion History</CardTitle>
                  <CardDescription>Your recent unit conversions</CardDescription>
                </CardHeader>
                <CardContent>
                  {conversionHistory.length === 0 ? (
                    <p className="text-center text-gray-500">No conversion history yet</p>
                  ) : (
                    <div className="space-y-4">
                      {conversionHistory.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <span className="font-medium capitalize">{item.category}</span>
                            <span className="text-sm text-gray-500">{item.timestamp}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-semibold">{item.fromValue}</span>
                            <span>
                              {
                                conversionData[item.category as keyof typeof conversionData].units.find(
                                  (u) => u.id === item.fromUnit,
                                )?.name
                              }
                            </span>
                            <span>=</span>
                            <span className="font-semibold">{item.toValue.toFixed(6)}</span>
                            <span>
                              {
                                conversionData[item.category as keyof typeof conversionData].units.find(
                                  (u) => u.id === item.toUnit,
                                )?.name
                              }
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          <div className="mt-12 rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h3 className="mb-4 text-xl font-bold">About Unit Conversion</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Unit conversion is essential in the oil and gas industry to ensure accurate measurements across different
              systems. Our calculator provides precise conversions for length, weight, temperature, pressure, volume,
              area, density, speed, energy, and power units commonly used in industrial applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you're working with metric or imperial units, this tool helps you quickly convert between
              different measurement systems with accuracy and reliability.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

