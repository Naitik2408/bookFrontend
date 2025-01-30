const AddBookForm = ({ newBook, handleFormChange, handleFormSubmit }) => (
    <form onSubmit={handleFormSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-3 gap-5">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Book Name:</label>
          <input
            type="text"
            name="bookName"
            value={newBook.bookName}
            onChange={handleFormChange}
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">MRP:</label>
          <input
            type="number"
            name="mrp"
            value={newBook.mrp}
            onChange={handleFormChange}
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quantity Left:</label>
          <input
            type="number"
            name="quantityLeft"
            value={newBook.quantityLeft}
            onChange={handleFormChange}
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Royalty Earned:</label>
          <input
            type="number"
            name="royaltyEarned"
            value={newBook.royaltyEarned}
            onChange={handleFormChange}
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Books Sold:</label>
          <input
            type="number"
            name="booksSold"
            value={newBook.booksSold}
            onChange={handleFormChange}
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
  
  export default AddBookForm;