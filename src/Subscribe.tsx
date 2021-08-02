export default function Subscribe() {
  return (
    <div className="grid place-items-center">
      <form className="">
        <input
          className="rounded p-4 border mr-2 text-gray-800 border-gray-500 bg-white"
          placeholder="your@mail.com"
        />
        <button
          type="submit"
          className="block w-full sm:w-auto sm:inline  px-8 rounded bg-primary-400  text-white font-bold p-4 uppercase border-primary-500 border-t border-b border-r"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
