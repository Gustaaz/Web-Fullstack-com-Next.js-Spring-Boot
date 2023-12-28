export const TableHeader = () => {
  const headerItems = [
    { label: 'Source' },
    { label: 'Visitors', text_align: true },
    { label: 'Revenues', text_align: true },
    { label: 'Sales', text_align: true, hidden: true },
    { label: 'Conversion', text_align: true, hidden: true },
  ]
  return (
    <div className="grid grid-cols-3 rounded-sm bg-gray-100 dark:bg-meta-4 sm:grid-cols-5">
      {headerItems.map((item, index) => (
        <div
          key={index}
          className={`p-2.5 ${item.hidden ? 'hidden sm:block' : ''} ${
            item.text_align ? `text-center` : ''
          }  xl:p-5`}
        >
          <h5 className="text-sm font-medium uppercase xsm:text-base">
            {item.label}
          </h5>
        </div>
      ))}
    </div>
  )
}
