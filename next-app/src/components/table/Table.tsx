import React from 'react'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

const brandData = [
  {
    logo: '/images/brand/brand-01.svg',
    name: 'Google',
    visitors: 3.5,
    revenues: '5,768',
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: '/images/brand/brand-02.svg',
    name: 'Twitter',
    visitors: 2.2,
    revenues: '4,635',
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: '/images/brand/brand-03.svg',
    name: 'Github',
    visitors: 2.1,
    revenues: '4,290',
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: '/images/brand/brand-04.svg',
    name: 'Vimeo',
    visitors: 1.5,
    revenues: '3,580',
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: '/images/brand/brand-05.svg',
    name: 'Facebook',
    visitors: 3.5,
    revenues: '6,768',
    sales: 390,
    conversion: 4.2,
  },
]

export function Table() {
  return (
    <div className="flex flex-col">
      <TableHeader />
      {brandData.map((brand, key) => (
        <TableRow key={key} brand={brand} />
      ))}
    </div>
  )
}
