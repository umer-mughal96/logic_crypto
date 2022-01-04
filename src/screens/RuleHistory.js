import React from "react";
import Sidebar from "../components/Sidebar";

const RuleHistory = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="s-layout">
            <Sidebar />

            <main className="s-layout__content pl-4">
              <div className="rule-history">
                <h1>Rule User History</h1>
                <div className="rule-history-box">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Show only trades
                    </label>
                  </div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" className="border-top-0">Action</th>
                        <th scope="col" className="border-top-0">Rule Created</th>
                        <th scope="col" className="border-top-0">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RuleHistory;
