import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const ModernInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-muted-foreground">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border bg-surface/50 px-4 py-3 text-sm font-medium",
            "border-border-light backdrop-blur-sm",
            "placeholder:text-muted-foreground/60",
            "focus-ring smooth-transition",
            "hover:bg-surface-elevated/60",
            error && "border-destructive focus:border-destructive focus:ring-destructive/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive animate-slide-in">
            {error}
          </p>
        )}
      </div>
    )
  }
)
ModernInput.displayName = "ModernInput"

export { ModernInput }