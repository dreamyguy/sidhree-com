import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { DataContext } from "../../contexts/DataContext";
import { isNotEmptyArray } from "../../utils/isEmptyUtil";
import "./App.scss";

const initialState = {
  loading: false,
  data: {},
};

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

const App = ({ children }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const userReposApi = "https://api.github.com/users/dreamyguy/repos?per_page=100";
  const userBioApi = "https://api.github.com/users/dreamyguy";

  useEffect(() => {
    setState({ loading: true });
    const getUserReposData = () => axios.get(userReposApi);
    const getUserBioData = () => axios.get(userBioApi);
    axios
      .all([getUserReposData(), getUserBioData()])
      .then((res) => {
        if (res && isNotEmptyArray(res)) {
          const run = async () => {
            const userReposData = await res[0].data; // array
            const userBioData = await res[1].data; // object
            if (isNotEmptyArray(userReposData) && userBioData) {
              const data = {
                userRepos: userReposData,
                userBio: userBioData,
              };
              setState({
                data,
                loading: false,
              });
            }
          };
          return run();
        }
        return null;
      })
      .catch((err) => {
        setState({
          error: err.message,
          loading: false,
        });
      });
  }, []);

  const { data, error, loading } = state;

  return (
    <div className="app">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <li>{error.message}</li>
      ) : data ? (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
      ) : null}
    </div>
  );
};

export default App;
