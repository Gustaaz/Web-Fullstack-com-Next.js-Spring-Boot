import { Table } from '@/components'
import Link from 'next/link'

export default function ProductListing() {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="mb-8 flex items-center justify-between">
        <h4 className="text-xl font-semibold text-black">Produtos</h4>
        <Link
          href="/produtos/adicionar"
          className="inline-flex items-center justify-center rounded-md border border-black py-2 px-10 text-center font-medium text-black hover:bg-gray-100 lg:px-4 xl:px-7"
        >
          Novo
        </Link>
      </div>
      <Table />
    </div>
  )
}
