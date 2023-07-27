import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className = 'Layout-container'>
      <div className='container-children'>
        {children}
      </div>
    </div>
  )
}

export { Layout };