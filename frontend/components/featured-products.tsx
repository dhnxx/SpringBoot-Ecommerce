import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
    {
        id: 1,
        name: 'Bamboo Toothbrush',
        price: '$4.99',
        image: 'https://placecats.com/500/200'
    },
    {
        id: 2,
        name: 'Reusable Water Bottle',
        price: '$19.99',
        image: 'https://placecats.com/400/200'
    },
    {
        id: 3,
        name: 'Organic Cotton Tote',
        price: '$14.99',
        image: 'https://placecats.com/200/200'
    },
    {
        id: 4,
        name: 'Solar-Powered Charger',
        price: '$29.99',
        image: 'https://placecats.com/300/200'
    }
];

export default function FeaturedProducts() {
    return (
        <section className='py-20'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='mb-12 text-center text-3xl font-bold'>Featured Products</h2>
                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                    {products.map((product) => (
                        <Card key={product.id}>
                            <CardHeader>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className='h-48 w-full rounded-t-lg object-cover'
                                    unoptimized
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle>{product.name}</CardTitle>
                                <p className='text-muted-foreground'>{product.price}</p>
                            </CardContent>
                            <CardFooter>
                                <Button className='w-full bg-primary text-primary-foreground'>Add to Cart</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
