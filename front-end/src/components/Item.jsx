import React from "react"

const item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1402348664997542800/original/086e1eb7-4e2f-48e9-a299-042f8c794360.jpeg?im_w=960"
      alt="Imagem Acomodação"
      className="aspect-square object-cover rounded-2xl"

      />
      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Studio aconchegante em rua tranquila com vista para o verde e bem-localizado, fica a duas quadras da Avenida Paulista coração empresarial e cultural da cidade de São Paulo.

          Próximo do metrô Trianon Masp 650 m (8 minutos andando), bons restaurantes, mercado, farmácia, shopping e pontos turísticos.

        </p>


      </div>

      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>

    </a>
  )
}

export default item;