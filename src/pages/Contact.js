import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, message, email);

  return (
    <main className="dark:bg-gray-800 dark:text-white">
      <div className="flex justify-center items-center bg-white dark:bg-gray-800 ">
        <div className="container ">
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name Surname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">message</label>
              <input
                type="text"
                name="message"
                placeholder="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

// <form
// name="contact"
// method="post"
// data-netlify="true"
// className="p-8 my-4 md:px-12 lg:w-full lg:pl-20 lg:pr-40 mr-auto rounded-2xl"
// >
// <input type="hidden" name="form-name" value="contact" />
// <div className="flex justify-center">
//   <h1 className="font-bold uppercase text-4xl">
//     Tell me what you've
//     <span className="relative ml-2">
//       <span
//         className="block absolute -inset-0 skew-x-12 bg-gradient-to-tr from-[#60e7ff] to-[#8000FF]"
//         aria-hidden="true"
//       ></span>
//       <span className="relative text-black dark:text-white">
//         Got
//       </span>
//     </span>
//   </h1>
// </div>
// <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
//   <input
//     className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600 border-xl"
//     type="text"
//     placeholder="First Name*"
//     name="name"
//     required
//   />
//   <input
//     className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600"
//     type="text"
//     placeholder="Last Name*"
//     name="surname"
//     required
//   />
//   <label className="block">
//     <input
//       className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600 peer"
//       type="email"
//       placeholder="Email*"
//       name="email"
//       required
//     />
//     <p className="mt-2 invisible peer-invalid:visible text-red-600 text-xs">
//       Please provide a valid email address
//     </p>
//   </label>
//   <label>
//     <input
//       className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600"
//       type="number"
//       placeholder="Phone Number"
//       name="number"
//     />
//   </label>
// </div>
// <div className="my-4">
//   <textarea
//     placeholder="Message*"
//     className="w-full h-48 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg border border-slate-600"
//     name="message"
//     required
//   ></textarea>
// </div>
// <div className="my-2  flex justify-center">
//   <button
//     type="submit"
//     className="text-black uppercase text-m font-bold bg-[#60e7ff] p-4 rounded-lg
//       transition duration-300 hover:bg-[#8000FF] dark:text-white"
//   >
//     Send!
//   </button>
// </div>
// </form>
