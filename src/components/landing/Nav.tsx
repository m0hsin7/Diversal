import { useEffect, useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Brand } from '@/components/site/Brand';
const links = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: '/services', label: 'Services' }, { to: '/about', label: 'Company' }, { to: '/contact', label: 'Contact' }] as const;
export function Nav() {
 const [solid, setSolid] = useState(false); const [open, setOpen] = useState(false); const location = useLocation();
 useEffect(() => { const update = () => setSolid(window.scrollY > 50); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
 useEffect(() => setOpen(false), [location.pathname]);
 const light = location.pathname !== '/' || solid || open;
 return <header className={`site-nav ${light ? 'nav-solid' : 'nav-film'}`}><nav className="site-container"><Link to="/" aria-label="Diversal home"><Brand compact /></Link><div className="desktop-links">{links.map(l => <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === '/' }} activeProps={{ className: 'nav-active' }}>{l.label}</Link>)}</div><Button asChild variant="outline" className="nav-contact"><a href="tel:+923325178767">Let’s talk ↗</a></Button><Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}><span className="menu-symbol">{open ? '×' : '☰'}</span></Button></nav>{open && <div id="mobile-navigation" className="mobile-navigation">{links.map(l => <Link key={l.to} to={l.to}>{l.label}<span>↗</span></Link>)}</div>}</header>;
}
