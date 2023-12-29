import { BackButton, Input, Textarea } from '@/components'

export default function ToAddProduct() {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
      <div className="flex justify-center items-center h-full py-5">
        <div className="w-full max-w-7xl space-y-7">
          <BackButton>Cadastro de Produtos</BackButton>

          <form>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Input
                  label="sku"
                  name="sku"
                  placeholder="Digite o sku do produto"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <Input
                  label="preço"
                  name="price"
                  placeholder="Digite o preço do produto"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Input
                  label="nome"
                  name="name"
                  placeholder="Digite o nome do produto"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <Textarea
                  name="description"
                  label="descricao"
                  placeholder="Digite a descrição do produto"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
