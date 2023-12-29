'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button, Input, Textarea } from '..'

const productSchema = z.object({
  sku: z.string().min(1, { message: 'O sku do produto é obrigatório' }),
  price: z.string().min(1, { message: 'O preço do produto é obrigatório' }),
  name: z.string().min(1, { message: 'O nome do produto é obrigatório' }),
  description: z
    .string()
    .min(1, { message: 'A descrição do produto é obrigatório' })
    .max(100, {
      message: 'A descrição do produto deve ter no maximo 100 caracteres',
    }),
})

type Product = z.infer<typeof productSchema>

export function FormProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    watch,
  } = useForm<Product>({
    resolver: zodResolver(productSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      sku: '',
      price: '',
      name: '',
      description: '',
    },
  })

  function onSubmit(data: Product) {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            {...register('sku')}
            label="sku"
            placeholder="Digite o sku do produto"
            helpText={errors.sku && errors.sku.message}
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Input
            {...register('price')}
            label="preço"
            placeholder="Digite o preço do produto"
            helpText={errors.price && errors.price.message}
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Input
            {...register('name')}
            label="nome"
            placeholder="Digite o nome do produto"
            helpText={errors.name && errors.name.message}
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textarea
            {...register('description')}
            label="descricao"
            placeholder="Digite a descrição do produto"
            helpText={errors.description && errors.description.message}
            length={
              (watch('description') && getValues('description').length) || 0
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button>Salvar</Button>
      </div>
    </form>
  )
}
