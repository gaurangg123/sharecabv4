"use client"

import * as React from "react"
import { Clock } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TimePickerDemoProps {
  value?: string
  onChange?: (time: string) => void
}

export function TimePickerDemo({ value = "12:00", onChange }: TimePickerDemoProps) {
  const [selectedTime, setSelectedTime] = React.useState<string>(value)

  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = ["00", "15", "30", "45"]

  React.useEffect(() => {
    if (value !== selectedTime) {
      setSelectedTime(value)
    }
  }, [value])

  const handleTimeChange = (newTime: string) => {
    setSelectedTime(newTime)
    if (onChange) {
      onChange(newTime)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-start text-left font-normal pl-9 relative">
          <Clock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          {selectedTime || "Select time"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0" align="start">
        <div className="p-3 border-b">
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Select Time</h4>
            <div className="flex items-center space-x-2">
              <div className="grid gap-1 text-center">
                <Label htmlFor="hours" className="text-xs">
                  Hours
                </Label>
                <div className="border rounded-md overflow-hidden h-[120px]">
                  <div className="h-[120px] overflow-y-auto scrollbar-thin">
                    {hours.map((hour) => (
                      <div
                        key={hour}
                        className={cn(
                          "py-1 px-3 cursor-pointer hover:bg-muted",
                          selectedTime.split(":")[0] === hour.toString().padStart(2, "0") &&
                            "bg-primary/10 font-medium",
                        )}
                        onClick={() => {
                          const currentMinute = selectedTime.split(":")[1] || "00"
                          handleTimeChange(`${hour.toString().padStart(2, "0")}:${currentMinute}`)
                        }}
                      >
                        {hour.toString().padStart(2, "0")}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center text-xl font-semibold">:</div>
              <div className="grid gap-1 text-center">
                <Label htmlFor="minutes" className="text-xs">
                  Minutes
                </Label>
                <div className="border rounded-md overflow-hidden h-[120px]">
                  <div className="h-[120px] overflow-y-auto scrollbar-thin">
                    {minutes.map((minute) => (
                      <div
                        key={minute}
                        className={cn(
                          "py-1 px-3 cursor-pointer hover:bg-muted",
                          selectedTime.split(":")[1] === minute && "bg-primary/10 font-medium",
                        )}
                        onClick={() => {
                          const currentHour = selectedTime.split(":")[0] || "12"
                          handleTimeChange(`${currentHour}:${minute}`)
                        }}
                      >
                        {minute}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 border-t flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              const now = new Date()
              const hours = now.getHours().toString().padStart(2, "0")
              const minutes = Math.floor(now.getMinutes() / 15) * 15
              handleTimeChange(`${hours}:${minutes.toString().padStart(2, "0")}`)
            }}
          >
            Now
          </Button>
          <Button size="sm" onClick={() => handleTimeChange("12:00")}>
            Reset
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
