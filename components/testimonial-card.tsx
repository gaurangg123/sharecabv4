import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
          ))}
        </div>
        <blockquote className="text-lg italic">"{quote}"</blockquote>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center gap-4">
        <Avatar>
          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${author.charAt(0)}`} alt={author} />
          <AvatarFallback>{author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
