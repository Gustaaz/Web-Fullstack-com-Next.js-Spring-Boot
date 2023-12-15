// import { Facebook, Github, Globe, Twitter } from 'lucide-react'
// import { LinkFooter } from './LinkFooter'
import { ColumnsFooter } from './ColumnsFooter'

export function Footer() {
  const portoVelhoLinks = [
    { href: 'https://www.portovelho.ro.gov.br/', title: 'Portal' },
  ]
  // const gettingStartedLinks = [
  //   { href: "#", title: "About Us" },
  //   { href: "#", title: "Guidelines and how to" },
  //   { href: "#", title: "Quote from the best" },
  //   { href: "#", title: "How to start a blog" },
  // ];
  const epmpvLinks = [
    {
      href: 'https://epmpv.portovelho.ro.gov.br/?a=login&f=index',
      title: 'e-PMPV: Autenicação',
    },
    {
      href: 'https://epmpv.portovelho.ro.gov.br/?a=autenticidade',
      title: 'e-PMPV: Autenticidade de Documentos',
    },
    {
      href: 'https://epmpv.portovelho.ro.gov.br/?a=consultaETCDF&f=formPrincipal',
      title: 'e-PMPV: Consulta Processual',
    },
  ]

  return (
    <div className="bg-[#0e0e0e]">
      <div className=" flex justify-start md:items-end md:justify-center ">
        <div className="mb-5 flex flex-col items-start justify-start px-1 pt-24 md:items-center md:justify-center md:px-0 md:pt-32 lg:pt-16 xl:px-20">
          <div className="flex flex-col items-start justify-start xl:flex-row xl:justify-center xl:space-x-8">
            <div className="flex items-center justify-start space-x-4">
              <p className="w-60 text-xl font-semibold leading-normal text-white xl:text-2xl">
                E-Vista-Sede
              </p>
            </div>
            <div className="mt-12 grid w-full grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-20 sm:gap-y-0 md:w-auto md:gap-x-28 xl:mt-0 xl:gap-8">
              <ColumnsFooter title="Porto Velho" links={portoVelhoLinks} />
              <ColumnsFooter title="E-PMPV / E-TCDF" links={epmpvLinks} />
              {/* <ColumnsFooter
                title="Getting Started"
                links={gettingStartedLinks}
              /> */}
            </div>
          </div>
          <div className="mt-12 flex  w-full flex-col-reverse items-center xl:flex-row xl:items-start xl:justify-center ">
            <p className="mt-10 text-sm leading-none text-white md:mt-12 xl:mt-0">
              2023 Poto Velho - RO SMTI/DESIS/DISA.
            </p>
            {/* <div className="mt-10 flex w-full flex-col items-start justify-start space-y-4 md:mt-12 md:w-auto md:flex-row md:items-center md:justify-center md:space-x-2 md:space-y-0 xl:mt-0 xl:space-x-6">
              <LinkFooter href="#" title="About Us" />
              <LinkFooter href="#" title="Guidelines and how to" />
              <LinkFooter href="#" title="Quote from the best" />
              <LinkFooter href="#" title="How to start a blog" />
            </div> */}
            {/* <div className="flex w-full items-start justify-start space-x-6 md:w-auto md:items-center md:justify-end ">
              <LinkFooter href="#" title={<Twitter />} />
              <LinkFooter href="#" title={<Facebook />} />
              <LinkFooter href="#" title={<Globe />} />
              <LinkFooter href="#" title={<Github />} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
