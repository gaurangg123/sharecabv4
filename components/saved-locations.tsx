"use client"

import { useState } from "react"
import { Plus, Clock, Home, Briefcase, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type SavedLocation = {
  id: string
  name: string
  address: string
  type: "home" | "work" | "favorite" | "recent"
}

export function SavedLocations({ onSelect }: { onSelect: (address: string) => void }) {
  const [locations, setLocations] = useState<SavedLocation[]>([
    {
      id: "1",
      name: "Home",
      address: "B-12, Vasant Kunj, New Delhi",
      type: "home",
    },
    {
      id: "2",
      name: "Office",
      address: "Cyber City, Gurugram",
      type: "work",
    },
    {
      id: "3",
      name: "Gym",
      address: "Fitness Hub, Saket, New Delhi",
      type: "favorite",
    },
    {
      id: "4",
      name: "Mall",
      address: "Select Citywalk, Saket, New Delhi",
      type: "recent",
    },
  ])

  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    type: "favorite" as const,
  })

  const getIcon = (type: SavedLocation["type"]) => {
    switch (type) {
      case "home":
        return <Home className="h-4 w-4" />
      case "work":
        return <Briefcase className="h-4 w-4" />
      case "favorite":
        return <Heart className="h-4 w-4" />
      case "recent":
        return <Clock className="h-4 w-4" />
    }
  }

  const handleAddLocation = () => {
    if (newLocation.name && newLocation.address) {
      setLocations([
        ...locations,
        {
          id: Date.now().toString(),
          ...newLocation,
        },
      ])
      setNewLocation({
        name: "",
        address: "",
        type: "favorite",
      })
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <h3 className="text-sm font-medium">Saved Locations</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Plus className="h-4 w-4" />
              <span className="sr-only">Add location</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Location</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Location Name</Label>
                <Input
                  id="name"
                  value={newLocation.name}
                  onChange={(e) => setNewLocation({ ...newLocation, name: e.target.value })}
                  placeholder="Home, Work, etc."
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={newLocation.address}
                  onChange={(e) => setNewLocation({ ...newLocation, address: e.target.value })}
                  placeholder="Enter full address"
                />
              </div>
              <Button onClick={handleAddLocation}>Save Location</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="px-2">
        <ScrollArea className="h-[120px] px-1">
          <div className="space-y-1">
            {locations.map((location) => (
              <Button
                key={location.id}
                variant="ghost"
                className="w-full justify-start text-left h-auto py-2"
                onClick={() => onSelect(location.address)}
              >
                <div className="flex items-start gap-2">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">{getIcon(location.type)}</div>
                  <div>
                    <p className="font-medium text-sm">{location.name}</p>
                    <p className="text-xs text-muted-foreground">{location.address}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
