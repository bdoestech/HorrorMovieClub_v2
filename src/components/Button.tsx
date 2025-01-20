import React from 'react'

interface SciFiButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const SciFiButton: React.FC<SciFiButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="relative px-6 py-3 font-bold text-white rounded-md bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 transition-all duration-300 ease-in-out shadow-lg hover:shadow-red-500/50 active:shadow-red-500/30 overflow-hidden group"
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></span>
      <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <span className="w-full h-1/2 bg-gradient-to-b from-transparent to-red-300/20 blur-sm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
      </span>
      <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-400 group-hover:w-full transition-all duration-300 ease-in-out transform -translate-x-1/2"></span>
    </button>
  )
}

export default SciFiButton

