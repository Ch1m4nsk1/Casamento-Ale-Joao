import { useState, useEffect } from 'react'
import './Dialog.css'

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!open) return null

  return (
    <div className="dialog-overlay" onClick={() => onOpenChange(false)}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children, className = '' }) {
  return <div className={`dialog-body ${className}`}>{children}</div>
}

export function DialogHeader({ children }) {
  return <div className="dialog-header">{children}</div>
}

export function DialogTitle({ children, className = '' }) {
  return <h2 className={`dialog-title ${className}`}>{children}</h2>
}

export function DialogClose({ onClick, className = '' }) {
  return (
    <button
      className={`dialog-close ${className}`}
      onClick={onClick}
      aria-label="Fechar"
    >
      ✕
    </button>
  )
}
