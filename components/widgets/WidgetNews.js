const WidgetNews = () => {
  return (
    <div>
      <div className="aspect-h-7 aspect-w-6 block w-full overflow-hidden rounded-lg">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold leading-6 text-gray-900">
            <span className="sr-only">Details for </span>
            IMG_4985.HEIC
          </h2>
          <p className="text-sm font-medium text-gray-500">3.9 MB</p>
        </div>
        <button
          type="button"
          className="relative ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Favorite</span>
        </button>
      </div>
    </div>
  );
};

export default WidgetNews;
