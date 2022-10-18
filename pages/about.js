const About = () => {
  const people = [
    "berto",
    "hugo",
    "cristina",
    "Iñaki",
    "Israel",
    "Piero",
    "Javier",
    "Alba",
  ];
  return (
    <section>
      <h1 className="mb-2">About</h1>
      <button className="bg-fuchsia-500 text-white font-bold px-6 py-2 rounded-full hover:bg-fuchsia-800 hover:text-black active:text-blue-300 focus:border-4 focus:border-black">
        Click me!
      </button>

      <ul className="mt-4">
        {people.map((person) => (
          <li
            key={person}
            className="border-b-2 py-2 px-2 first:bg-slate-500 last:bg-slate-200 odd:border-b-red-500"
          >
            {person}
          </li>
        ))}
      </ul>

      <form className="mt-4 ml-4 bg-gray-300 p-4 max-w-sm rounded-lg ">
        <label htmlFor="name" className="text-sm block mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full p-1 mb-2 rounded-sm required:bg-green-300 required:border-green-500 required:border-2"
        />

        <label htmlFor="email" className="text-sm block mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-1 rounded-sm invalid:bg-red-300 peer"
        />
        <p className="text-xs pt-1 invisible peer-invalid:visible">
          Introduce un email válido
        </p>
      </form>

      <article className="bg-gray-300 rounded-lg mt-4 ml-4 max-w-xs px-4 py-4 hover:bg-blue-700 group">
        <h1 className="text-lg font-bold group-hover:text-white first-letter:text-2xl">
          Name, surname
        </h1>
        <p className="group-hover:text-white">Brief description</p>
      </article>
    </section>
  );
};

export default About;
