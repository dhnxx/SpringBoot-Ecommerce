import { Button } from '@/components/ui/button';

export default function CallToAction() {
    return (
        <section className='bg-primary py-20 text-primary-foreground'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h2 className='mb-4 text-3xl font-bold'>Join Our Eco-Friendly Community</h2>
                    <p className='mb-8 text-lg'>
                        Subscribe to our newsletter for eco-tips, exclusive offers, and updates on new sustainable
                        products.
                    </p>
                    <Button variant='secondary' size='lg'>
                        Subscribe Now
                    </Button>
                </div>
            </div>
        </section>
    );
}
