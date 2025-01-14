import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-muted py-12'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>EcoShop</h3>
                        <p className='text-sm text-muted-foreground'>
                            Providing eco-friendly products for a sustainable future.
                        </p>
                    </div>
                    <div>
                        <h4 className='mb-4 text-sm font-semibold'>Quick Links</h4>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/about' className='text-sm text-muted-foreground hover:text-primary'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='/products' className='text-sm text-muted-foreground hover:text-primary'>
                                    Our Products
                                </Link>
                            </li>
                            <li>
                                <Link href='/blog' className='text-sm text-muted-foreground hover:text-primary'>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' className='text-sm text-muted-foreground hover:text-primary'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-4 text-sm font-semibold'>Customer Service</h4>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='/faq' className='text-sm text-muted-foreground hover:text-primary'>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href='/shipping' className='text-sm text-muted-foreground hover:text-primary'>
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href='/terms' className='text-sm text-muted-foreground hover:text-primary'>
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href='/privacy' className='text-sm text-muted-foreground hover:text-primary'>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='mb-4 text-sm font-semibold'>Connect With Us</h4>
                        <ul className='space-y-2'>
                            <li>
                                <Link href='#' className='text-sm text-muted-foreground hover:text-primary'>
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-sm text-muted-foreground hover:text-primary'>
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-sm text-muted-foreground hover:text-primary'>
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-sm text-muted-foreground hover:text-primary'>
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-12 border-t pt-8'>
                    <p className='text-center text-sm text-muted-foreground'>
                        © {new Date().getFullYear()} EcoShop. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
