import React, { useEffect, useState } from "react";
const MovieApiClient = () => {
  const URL = "http://localhost:4000/";
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: "", rating: 2.5,});
  useEffect(
    () =>
      fetch(`${URL}api/movies`)
        .then((response) => response.json())
        .then((movies) => setMovies(movies)),
    []
  );

  const deleteMovie = (movie) =>
    fetch(`${URL}api/movies/${movie._id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));

  const onMovieTitleChange = (event) =>
    setMovie({ ...movie, title: event.target.value });

  const createMovieClickHandler = () =>
    fetch(`${URL}api/movies`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));

  const saveMovie = () =>
    fetch(`${URL}api/movies/${movie._id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies));

  return (
    <div>
      <h2>Movies</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="float-end">
            <button onClick={saveMovie} className="btn btn-primary">
              Save
            </button>

            <button
              onClick={createMovieClickHandler}
              className=" ms-2 btn btn-success"
            >
              Create
            </button>
          </div>

          <input
            className="form-control"
            value={movie.title}
            onChange={onMovieTitleChange}
            style={{ width: "70%" }}
          />
        </li>
        {movies.map((movie) => (
          <li className="list-group-item" key={movie._id}>
            {movie.title} {movie.rating} 
            <button
              onClick={() => setMovie(movie)}
              className="btn btn-primary float-end ms-2"
            >
              Edit
            </button>
            <button
              onClick={() => deleteMovie(movie)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieApiClient;
