import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className = 'Layout-container'>
      {children}
    </div>
  )
}

export { Layout };