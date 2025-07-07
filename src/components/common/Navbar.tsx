import Image from 'next/image'; 
import Link from 'next/link';
import { nav_links} from '@/components/constants/nav_links';

const Navbar = () => {
  return (
    <header>
        {/*  contact information */}
        <div className="header-container">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-9 text-start">
                        <span className='header-information'> <Image src="/icons/pin.png" alt="location-pin" width={15} height={15}/> <span>10545 Ramatlabama Miga, Mahikeng, South Africa </span></span>
                        <span className='header-information'> <Image src="/icons/phone-call.png" alt="phone-icon" width={15} height={15}/> <span>+27-18-523-0602 </span> </span>
                        <span className='header-information'> <Image src="/icons/email.png" alt="email" width={15} height={15}/> <span>info@elohimbabyland.co.za </span> </span>
                    </div> 
                    <div className="col col-3 text-end">
                       <span className='header-information'> <Image src="/icons/facebook.png" alt="facebook" width={15} height={15}/></span>
                        <span className='header-information'> <Image src="/icons/instagram.png" alt="instagram" width={15} height={15}/></span>
                        <span className='header-information'> <Image src="/icons/twitter.png" alt="twitter" width={15} height={15}/></span>
                        <span className='header-information'> <Image src="/icons/whatsapp.png" alt="whatsapp" width={15} height={15}/></span>
                    </div>
                </div>
            </div>
        </div>

        {/* navbar and logo */}
        <nav className='navbar-container'>
            <div className="container">
                <div className="row navbar-container">
                    {/* logo */}
                    <div className="col text-start">
                        <div className="row navigation-logo-container">
                            <div className="col col-3">
                                <Link href="/" className="navbar-brand">
                                    <Image src="/images/elohim-logo.png" alt="logo" width={140} height={119} />
                                </Link>
                            </div>
                            <div className="col col-3">
                                <Link href="/" className="navbar-brand">
                                    <h1 className='navigation-logo-name'>
                                        Elohim <br /> Baby Land
                                    </h1>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* nav-links */}
                    <div className="col">
                        <ul className="navigation-links-container">
                            {nav_links.map((link) => (
                                <Link href={link.href} className="nav-link" key={link.key}>
                                    <div>
                                    {link.icon && (
                                        <Image
                                        src={link.icon}
                                        alt={`${link.label} icon`}
                                        width={45} 
                                        height={45}
                                        />
                                    )}
                                    </div>
                                    {link.label}  
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
};

export default Navbar;