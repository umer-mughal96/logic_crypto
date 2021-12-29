import React from 'react'

const KnowledgeComp = (props) => {
  return (
    <div>
      <div className="container-fluid crypto-container">
        <div className="row">
          <div className="col-12 search-form">
            <h1>
              Knowledgebase
              {props?.value?.text ?
              <>
              <br />
              <span>Home/Risk managment</span>
              </>
               : ''}
            </h1>
            <form action="" method="GET" id="search-form">
              <input
                className="form-control my-0 py-1 amber-border"
                type="text"
                aria-label="Search"
                name="keyword"
                value=""
              />
              <a href="" className="btn">
                Search
              </a>
              <img src="files/images/knowledgepage/search-icon.svg" alt="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeComp
