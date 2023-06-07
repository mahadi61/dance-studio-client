const Instructors = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://i.ibb.co/bXbysTM/hero.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Zemla</td>
              <td>Purple.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
