import React, { Component } from "react";

class Filter extends Component {
  state = {
    Data: [], // list is empty in the beginning
    error: false,
    searchValue: "",
    isLoading: false,
  };

  componentDidMount() {
    this.Data();
    // function call
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      this.Search();
    }
  }

  Data = async () => {
    //try to get data

    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7"
    );

    if (response.ok) {
      // ckeck if status code is 200
      const data = await response.json();
      this.setState({ Data: data.results });
    } else {
      this.setState({ error: true });
    }
  };
  Search = async () => {
    //try to get data
    this.setState({ isLoading: true });
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bc63f0c08d018cf26d4cf02b8efde4d7&query=${this.state.searchValue}`
    );

    if (res.ok) {
      // ckeck if status code is 200
      const data = await res.json();
      this.setState({ Data: data.results });
      this.setState({ isLoading: false });
    } else {
      this.setState({ error: true });
    }
  };

  handleChangeName = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const { Data, error, isLoading } = this.state;
    return(
    <div>
   
        <div class="input-group">
          <div class="form-outline">
            <input
              type="search"
              id="form1"
              class="form-control"
              onChange={this.handleChangeName}
            />
          </div>
          <div className="table">
             
             <tr>
                <th>
         Film Title
             </th>
             <th>
         Film Description
             </th>
             </tr>   
        </div>
        {isLoading && <div>Loading</div>}
        {Data.length > 0 &&
          !isLoading &&
          Data.map((film) => (
          <tr>
            <td> {film.title}</td>
            <td> {film.overview}</td>
            
            </tr>
            
          ))}
        {error && <div>Fail, can not display the data</div>}
      </div>
      </div>
  
    );
  }
}
export default Filter;