export default function Container({ children, className = '', narrow = false }) {
  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${narrow ? 'max-w-4xl' : 'max-w-7xl'} ${className}`}>
      {children}
    </div>
  )
}
