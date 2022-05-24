import '../styles/navbar.css';
export default function NavBar(){
    return(
        <>
            <div id='navbar' className='font-Archivo text-[#424949] my-10'>
                    <div to='/'>ABOUT</div>
                    <div to='/'>ACADEMICS</div>
                    <div to='/'>PEOPLE</div>
                    <div to='/'>RESEARCH</div>
                    <div to='/'>CONTACT US</div>
            </div>
        </>
    )
}