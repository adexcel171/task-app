import Button from './Button'

const Header = () => {
  const onClick= ()=>{
    console.log('click')
  }
  return (
    <header className='header' >
      <h1>Task Tracker</h1>
      < Button onClick={onclick} />

    </header>
  )
}

export default Header
