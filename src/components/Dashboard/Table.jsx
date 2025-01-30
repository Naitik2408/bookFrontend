import PropTypes from 'prop-types';

const Table = ({ books }) => (
  <table className="min-w-full bg-white">
    <thead>
      <tr>
      <th className="py-2 px-4 border-b">Sr No</th>
        <th className="py-2 px-4 border-b">Book Name</th>
        <th className="py-2 px-4 border-b">MRP</th>
        <th className="py-2 px-4 border-b">Quantity Left</th>
        <th className="py-2 px-4 border-b">Royalty Earned</th>
        <th className="py-2 px-4 border-b">Books Sold</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => (
        <tr key={index}>
          <td className="py-2 px-4 border-b">{index+1}</td>
          <td className="py-2 px-4 border-b">{book.bookName}</td>
          <td className="py-2 px-4 border-b">{book.mrp}</td>
          <td className="py-2 px-4 border-b">{book.quantityLeft}</td>
          <td className="py-2 px-4 border-b">{book.royaltyEarned}</td>
          <td className="py-2 px-4 border-b">{book.booksSold}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookName: PropTypes.string.isRequired,
      mrp: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      quantityLeft: PropTypes.number.isRequired,
      royaltyEarned: PropTypes.number.isRequired,
      booksSold: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Table;