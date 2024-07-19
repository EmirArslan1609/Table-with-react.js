import Link from "./Link";

function Sidebar(){
    const links = [
        {label: 'dropdown', path: '/dropdown'},
        {label: 'accordion', path: '/accordion'},
        {label: 'button', path: '/button'},
        {label: 'modal', path: '/modal'},
        {label: 'table', path: '/table'},
        {label: 'counter', path: '/counter'},
    ];

    const renderedLinks = links.map((link) =>{
        return ( 
        <Link key={link.label} to={link.path} className='text-blue-600 mb-3' activeClassName='font-bold border-l-2 pl-2 border-blue-700' >
            {link.label}
        </Link>
            );
    });

    return(
        <div className=" pt-5 mr-10">
        <div className=" sticky pl-5 no-scrollbar overflow-auto flex flex-col select-none">
            {renderedLinks}
        </div>
        </div>
    )

}
export default Sidebar;