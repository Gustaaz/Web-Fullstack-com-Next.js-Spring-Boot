import React from 'react'

export const TableRow = ({ brand }: any) => {
  return (
    <div className={`grid grid-cols-3 sm:grid-cols-5 border-b `}>
      <div className="flex items-center gap-3 p-2.5 xl:p-5">
        <p className="sm:block">{brand.name}</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p>{brand.visitors}K</p>
      </div>

      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-meta-3">${brand.revenues}</p>
      </div>

      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p>{brand.sales}</p>
      </div>

      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
        <p className="text-meta-5">{brand.conversion}%</p>
      </div>
    </div>
  )
}
