import { BackButton, FormProduct } from '@/components'

export default function ToAddProduct() {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="flex justify-center items-center h-full py-5">
        <div className="w-full max-w-7xl space-y-7">
          <BackButton>Cadastro de Produtos</BackButton>

          <FormProduct />
        </div>
      </div>
    </div>
  )
}
