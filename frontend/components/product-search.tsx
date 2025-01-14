'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Search } from 'lucide-react';

export default function ProductSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

    useEffect(() => {
        setSearchQuery(searchParams.get('q') || '');
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(searchParams);
        if (searchQuery) {
            params.set('q', searchQuery);
        } else {
            params.delete('q');
        }
        router.push(`/products?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSearch} className='mb-8'>
            <div className='flex gap-2'>
                <Input
                    type='text'
                    placeholder='Search eco-friendly products...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full'
                />
                <Button type='submit'>
                    <Search className='mr-2 h-4' />
                    Search
                </Button>
            </div>
        </form>
    );
}
