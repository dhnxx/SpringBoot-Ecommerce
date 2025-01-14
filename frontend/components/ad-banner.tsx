import { Card, CardContent } from '@/components/ui/card';

import { Leaf } from 'lucide-react';

export default function AdBanner() {
    return (
        <Card className='mb-8 bg-gradient-to-r from-green-400 to-blue-500'>
            <CardContent className='p-6 text-white'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2 className='mb-2 text-2xl font-bold'>Eco Summer Sale!</h2>
                        <p className='text-lg'>Get 20% off on all sustainable products</p>
                    </div>
                    <Leaf className='h-16 w-16' />
                </div>
            </CardContent>
        </Card>
    );
}
