import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className='bg-muted py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='mx-auto max-w-2xl text-center'>
                    <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                        Eco-Friendly Products for a Sustainable Lifestyle
                    </h1>
                    <p className='mt-6 text-xl text-muted-foreground'>
                        Discover our collection of environmentally conscious products that help you reduce your carbon
                        footprint.
                    </p>
                    <div className='mt-10 flex justify-center gap-4'>
                        <Button size='lg' className=''>
                            Shop Now
                        </Button>
                        <Button variant='outline' size='lg' className=''>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
