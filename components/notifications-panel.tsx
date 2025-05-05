"use client"

import { useState, useEffect } from "react"
import { Bell, Check, X, Info, AlertTriangle } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

type NotificationType = "info" | "success" | "warning" | "error"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: NotificationType
}

export function NotificationsPanel() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Ride Confirmed",
      message: "Your ride to Cyber City has been confirmed. Driver is on the way.",
      time: "2 minutes ago",
      read: false,
      type: "success",
    },
    {
      id: "2",
      title: "Fare Update",
      message: "Fare for your recent ride has been updated due to a longer route.",
      time: "1 hour ago",
      read: false,
      type: "info",
    },
    {
      id: "3",
      title: "Subscription Expiring",
      message: "Your Premium subscription will expire in 3 days. Renew now to avoid interruption.",
      time: "5 hours ago",
      read: true,
      type: "warning",
    },
    {
      id: "4",
      title: "Weekend Offer",
      message: "Get 20% off on all rides this weekend using code WEEKEND20.",
      time: "1 day ago",
      read: true,
      type: "info",
    },
  ])

  const [open, setOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const count = notifications.filter((notification) => !notification.read).length
    setUnreadCount(count)
  }, [notifications])

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return <Check className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      case "error":
        return <X className="h-4 w-4 text-red-500" />
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center justify-between">
            <span>Notifications</span>
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                Mark all as read
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-8rem)] py-4">
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`relative rounded-lg border p-4 ${notification.read ? "" : "bg-muted/50"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-background rounded-full p-1 border">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 text-xs"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as read
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center">
              <Bell className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-muted-foreground">No notifications</p>
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
