import { useState } from "react";

const Products = () => {
  const [dark, setDark] = useState(false);

  return (
    <main className={dark ? "dark" : ""}>
      <section className="bg-slate-300 p-4 min-h-screen dark:bg-slate-800">
        <h1 className="text-gray-600 text-6xl mb-4 dark:text-slate-50">
          Products
        </h1>
        <p className="text-gray-600 dark:text-slate-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iste
          eaque, ad officia a nobis maxime aliquam molestiae expedita id dolorum
          aperiam harum tenetur ullam vitae iure? Tempora, aspernatur sed?
        </p>
        <button className="mt-4 text-3xl" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
        <p className="bg-[url('https://picsum.photos/200/300')] bg-no-repeat h-60">
          hello
        </p>
        <p className="text-8xl text-micolor mt-20xl font-mifuente">
          Color personalizado
        </p>
      </section>
    </main>
  );
};

export default Products;
