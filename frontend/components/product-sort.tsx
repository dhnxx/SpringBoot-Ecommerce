'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const sortOptions = [
    { value: 'name_asc', label: 'Name (A-Z)' },
    { value: 'name_desc', label: 'Name (Z-A)' },
    { value: 'price_asc', label: 'Price (Low to High)' },
    { value: 'price_desc', label: 'Price (High to Low)' }
];

export default function ProductSort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [sort, setSort] = useState(searchParams.get('sort') || 'name_asc');

    useEffect(() => {
        setSort(searchParams.get('sort') || 'name_asc');
    }, [searchParams]);

    const handleSortChange = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('sort', value);
        router.push(`/products?${params.toString()}`);
    };

    return (
        <div className='w-48'>
            <Select value={sort} onValueChange={handleSortChange}>
                <SelectTrigger>
                    <SelectValue placeholder='Sort by' />
                </SelectTrigger>
                <SelectContent>
                    {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
