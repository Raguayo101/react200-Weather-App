import React from "react";

export default class History extends React.Component {
  render() {
    const { history } = this.props;
    console.log("10", history.length);
    return (
      <div className="col-12 col-md-6 mb-4">
        {history.length == 0 ? (
          <span></span>
        ) : (
          <div className="card search-history-box shadow border-0">
            <h6 className="mt-3 mb-3 text-center">Search History</h6>
            <div className="card-body p-0 mb-0 border-0">
              <table className="table table-striped mb-0 border-0">
                <tbody className="border-0">
                  {history.map((item, i) => {
                    return (
                      <tr key={i} className="border-0">
                        <td>
                          <p className="search-hist-text">{item.cityName}</p>
                        </td>
                        <td className="text-end">
                          <p className="mb-0 search-hist-text">{item.date}</p>
                          <p className="mb-0 search-hist-text">{item.time}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}
